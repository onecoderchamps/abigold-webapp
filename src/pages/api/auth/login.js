import { fetchLogin } from '@/server/auth/controller';


// Fungsi untuk login
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await fetchLogin(req, res);
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
