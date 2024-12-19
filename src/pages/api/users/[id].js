import { fetchUserById } from "@/server/user/controller";


export default async function handler(req, res) {
  if (req.method === "GET") {
    return fetchUserById(req, res);
  }
  res.status(405).json({ error: "Method not allowed" });
}