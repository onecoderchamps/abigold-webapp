import { useState, useEffect } from "react";
import Layout from './component/layout';
import { Delete, Edit, Eye, Trash } from "lucide-react";
import * as XLSX from "xlsx"; // Import xlsx library
import DataTable from 'react-data-table-component'; // Import DataTable
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Member = ({ pageProps }) => {
  const [users, setUsers] = useState([]);
  const [itemJson, setitemJson] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    file: null,
    batch: "",
    date: "",
    price: "",
    hpp: "",
    margin: "",
    notes: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState("");  // Start date for filtering
  const [endDate, setEndDate] = useState("");      // End date for filtering

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        // Token expired or invalid
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login
      } else if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      if (error.message === "Unauthorized") {
        window.location.href = "/login";
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Filter by search and date range
  const filteredUsers = users.filter(user => {
    // Filter by search text
    const matchesSearch = (
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchText.toLowerCase()) ||
      user.role.toLowerCase().includes(searchText.toLowerCase()) ||
      user.address.toLowerCase().includes(searchText.toLowerCase()) ||
      user.createdAt.toLowerCase().includes(searchText.toLowerCase())
    );

    // Filter by date range
    const userDate = new Date(user.date);
    const isInDateRange = (
      (!startDate || userDate >= new Date(startDate)) &&
      (!endDate || userDate <= new Date(endDate))
    );

    return matchesSearch && isInDateRange;
  });

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Full Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true,
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex gap-5 justify-center align-middle">
          <Trash color="red" />
        </div>
      ),
    }
  ];


  if (loading) return <Layout><p>Loading users...</p></Layout>;

  return (
    <Layout>
      <div className="w-full p-5">
        <div className="flex gap-4 justify-between">
          <div className="flex gap-2 items-center">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search Data"
                value={searchText}
                onChange={handleSearch}
                className="px-4 py-1 border rounded w-full"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>Filter Date  :</div>
            <DatePicker
              selected={startDate}
              onChange={setStartDate}
              dateFormat="dd/MM/yyyy"
              className="border px-3 py-1 rounded"
              placeholderText="Start Date"
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
              dateFormat="dd/MM/yyyy"
              className="border px-3 py-1 rounded"
              placeholderText="End Date"
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>

        <div className="overflow-x-auto p-5 bg-gray-100 rounded-md">
          <DataTable
            columns={columns}
            data={filteredUsers}
            pagination
            highlightOnHover
            striped
            responsive
          />
        </div>
      </div>
    </Layout>
  );
};

export default Member;
