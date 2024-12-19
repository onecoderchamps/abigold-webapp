import { useState, useEffect } from "react";
import Layout from './component/layout';

const UserList = ({ pageProps }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchUsers();
  }, []);

  if (loading) return <Layout><p>Loading users...</p></Layout>;

  return (
    <Layout>
      <div className="w-max">
        <h1>All Users</h1>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default UserList;
