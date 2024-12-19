import { getConnection } from '@/server/database/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;

    const connection = await getConnection();
    const [rows] = await connection.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];

    // Bandingkan password yang dimasukkan dengan yang disimpan di database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Password False" });
    }
    
    if (!user.is_verify) {
        return res.status(403).json({ message: "Your account has not been activated. Please verify your email." });
    }
    // Buat JWT token
    const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    return token;
};

export const register = async (req, res) => {
    const connection = await getConnection();
    const { name, email, password, address, latitude, longitude, phone, is_active, is_verify, role } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide all fields: name, email, and password" });
    }

    const [existingUser] = await connection.query("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser.length > 0) {
        return res.status(409).json({ message: "User with this email already exists" });
    }

    // Mengenkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan data pengguna baru ke database
    const [result] = await connection.query(
        "INSERT INTO users (name, email, password, address, latitude, longitude, phone, is_active, is_verify, role) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?)",
        [name, email, hashedPassword, address, latitude, longitude, phone, is_active, is_verify, role]
    );

    return result;
};