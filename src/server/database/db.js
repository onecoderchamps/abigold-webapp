import mysql from "mysql2";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost", // MySQL server
  port: process.env.DB_PORT || 3306, // Default MySQL port
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const getConnection = () => {
  return pool.promise(); // Using promise-based API for async/await
};

