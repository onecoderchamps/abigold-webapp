import { getUserById, getUsers } from "./service";



export const fetchAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const fetchUserById = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
