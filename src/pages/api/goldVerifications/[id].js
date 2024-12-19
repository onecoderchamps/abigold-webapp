import { fetchGoldById } from "@/server/gold/controller";


export default async function handler(req, res) {
  if (req.method === "GET") {
    return fetchGoldById(req, res);
  }
  res.status(405).json({ error: "Method not allowed" });
}