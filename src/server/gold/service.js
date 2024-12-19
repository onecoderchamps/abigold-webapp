import { getConnection } from "../database/db";
import multer from "multer";
const upload = multer({ dest: 'uploads/' });

export const getGolds = async () => {
  const connection = await getConnection();
  const [rows] = await connection.query("SELECT * FROM gold");
  return rows;
};

export const getGoldById = async (id) => {
  const connection = await getConnection();
  const [rows] = await connection.execute("SELECT * FROM gold WHERE sn = ?", [id]);
  return rows[0];
};

export const pushGold = async (req, res) => {
  const connection = await getConnection();
  const { sn, batch, date, price, hpp, margin, notes, is_active, is_verify } = req.body;

  // Uncomment or modify validation if needed
  if (!sn) {
    return res.status(400).json({ message: "Please provide all fields: sn" });
  }

  // Check if gold with this 'sn' already exists in the database
  const [existingGold] = await connection.query("SELECT * FROM gold WHERE sn = ?", [sn]);

  if (existingGold.length > 0) {
    return res.status(409).json({ message: "Gold with this sn already exists" });
  }

  // Insert the new gold record into the gold table
  const [result] = await connection.query(
    "INSERT INTO gold (sn, batch, date, price, hpp, margin, notes, is_active, is_verify) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [sn, batch, date, price, hpp, margin, notes, is_active, is_verify]
  );

  // Return the result
  return res.status(201).json({ message: "Gold added successfully", result });
};