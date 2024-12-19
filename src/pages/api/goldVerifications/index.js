import { verifyToken } from "@/server/middleware/auth";
import { fetchAllGolds, fetchGold } from "@/server/gold/controller";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // Handle GET requests with authentication
      return await verifyToken(fetchAllGolds)(req, res);
    } 
    
    if (req.method === "POST") {
      // Handle POST requests with authentication
      return await verifyToken(fetchGold)(req, res);
    }
    
    // Handle unsupported methods
    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
