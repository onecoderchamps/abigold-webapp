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

      const response = await fetch("/api/goldVerifications", {
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

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {

      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setitemJson(jsonData); // Assuming the data structure in Excel is directly usable
      };
      reader.readAsBinaryString(file);
    } else {

      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Loop through each item in itemJson and make an API call
    for (let element of itemJson) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const formDataToSend = JSON.stringify({
          "sn": element.SN, // Static value, update accordingly
          "batch": formData.batch,
          "date": formData.date,
          "price": formData.price,
          "hpp": formData.hpp,
          "margin": formData.margin,
          "notes": formData.notes,
          "is_active": true,
          "is_verify": false,
        });

        const response = await fetch("/api/goldVerifications", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: formDataToSend,
        });

        if (response.status === 401) {
          // Token expired or invalid
          localStorage.removeItem("token");
          window.location.href = "/login"; // Redirect to login
        } else if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const newData = await response.json();

        // Update the users state with the newly added data
        setUsers((prevUsers) => [...prevUsers, newData]);
      } catch (error) {
        console.error("Error during submission:", error);
      }
    }

    // After all items are processed, call fetchUsers to reload the users list
    fetchUsers();

    // Close the modal after submission
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Filter by search and date range
  const filteredUsers = users.filter(user => {
    // Filter by search text
    const matchesSearch = (
      user.sn.toLowerCase().includes(searchText.toLowerCase()) ||
      user.batch.toLowerCase().includes(searchText.toLowerCase()) ||
      user.date.toLowerCase().includes(searchText.toLowerCase()) ||
      user.price.toString().includes(searchText) ||
      user.hpp.toString().includes(searchText) ||
      user.margin.toString().includes(searchText)
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
      name: 'Serial Number',
      selector: row => row.sn,
      sortable: true,
    },
    {
      name: 'Batch Pembuatan',
      selector: row => row.batch,
      sortable: true,
    },
    {
      name: 'Tanggal Pembuatan',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Harga Dasar',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'HPP',
      selector: row => row.hpp,
      sortable: true,
    },
    {
      name: 'Margin',
      selector: row => row.margin,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex gap-5 justify-center align-middle">
          <Edit color="green" />
          <Trash color="red" />
        </div>
      ),
    }
  ];


  if (loading) return <Layout><p>Loading users...</p></Layout>;

  return (
    <Layout>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[99999]">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Input Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Upload Excel File</label>
                <input
                  type="file"
                  name="file"
                  accept=".xlsx, .xls"
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded-3xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pembuatan Batch</label>
                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded"
                >
                  <option value="">Select Batch</option>
                  <option value="batch1">Batch 1</option>
                  <option value="batch2">Batch 2</option>
                  <option value="batch3">Batch 3</option>
                  <option value="batch4">Batch 4</option>
                  <option value="batch5">Batch 5</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tanggal Pembuatan</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Harga Dasar</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">HPP</label>
                <input
                  type="number"
                  name="hpp"
                  value={formData.hpp}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Margin (%)</label>
                <input
                  type="number"
                  name="margin"
                  value={formData.margin}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Notes</label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded"
                />
              </div>
              {/* Other form fields */}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="w-full p-5">
        <div className="flex gap-4 justify-between">
          <div className="flex gap-2 items-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-5"
              onClick={() => setIsModalOpen(true)}
            >
              Input Data
            </button>
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
