import { verifyToken } from "@/server/middleware/auth";
import { fetchAllUsers, createUser } from "@/server/user/controller";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // Handle GET requests with authentication
      return await verifyToken(fetchAllUsers)(req, res);
    } 
    
    if (req.method === "POST") {
      // Handle POST requests with authentication
      return await verifyToken(createUser)(req, res);
    }
    
    // Handle unsupported methods
    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
