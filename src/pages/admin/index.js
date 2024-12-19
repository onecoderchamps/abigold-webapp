import { useState, useEffect } from "react";
import Layout from './component/layout';

const UserList = ({ pageProps }) => {
  const [users, setUsers] = useState([]);
  const [golds, setGolds] = useState([]);
  const [goldsSold, setGoldsSold] = useState([]);
  const [goldsStock, setGoldsStock] = useState([]);


  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage or any other storage
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
      if (error == "Unauthorized") {
        window.location.href = "/login";
      }
      setLoading(false);
    }
  };

  const fetchGolds = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage or any other storage
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
      console.log(data)
      setGolds(data);

      const stock = data.filter((item)=> item.is_verify === 0)
      const sold = data.filter((item)=> item.is_verify === 1)
      setGoldsStock(stock);
      setGoldsSold(sold);

      setLoading(false);
    } catch (error) {
      if (error == "Unauthorized") {
        window.location.href = "/login";
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchGolds();
  }, []);

  if (loading) return <Layout><p>Loading users...</p></Layout>;

  return (
    <Layout>
      <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <div className="col-span-1 bg-white rounded-3xl py-10 px-5 shadow relative">
          <h3 className="text-gray-500 text-sm">Total Member</h3>
          <span className="text-3xl font-bold text-gray-900 absolute bottom-4 right-6 text-lg text-gray-500">
            {users.length}
          </span>
        </div>
        <div className="col-span-1 bg-white rounded-3xl py-10 px-5 shadow relative">
          <h3 className="text-gray-500 text-sm">Total Gold Registered</h3>
          <span className="text-3xl font-bold text-gray-900 absolute bottom-4 right-6 text-lg text-gray-500">
            {golds.length}
          </span>
        </div>
        <div className="col-span-1 bg-white rounded-3xl py-10 px-5 shadow relative">
          <h3 className="text-gray-500 text-sm">Total Gold Stock</h3>
          <span className="text-3xl font-bold text-gray-900 absolute bottom-4 right-6 text-lg text-gray-500">
            {goldsStock.length}
          </span>
        </div>
        <div className="col-span-1 bg-white rounded-3xl py-10 px-5 shadow relative">
          <h3 className="text-gray-500 text-sm">Total Gold Sold</h3>
          <span className="text-3xl font-bold text-gray-900 absolute bottom-4 right-6 text-lg text-gray-500">
            {goldsSold.length}
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default UserList;
