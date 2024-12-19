import { fetchRegister } from '@/server/auth/controller';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide all fields: name, email, and password" });
    }

    try {
     await fetchRegister(req,res);
      // Kirim respons sukses
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
