import { getConnection } from "../database/db";

export const getUsers = async () => {
  const connection = await getConnection();
  const [rows] = await connection.query("SELECT * FROM users");
  return rows;
};

export const getUserById = async (id) => {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};