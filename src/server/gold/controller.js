import { getGoldById, getGolds, pushGold } from "./service";

export const fetchAllGolds = async (req, res) => {
  try {
    const users = await getGolds();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const fetchGold = async (req, res) => {
    try {
      const users = await pushGold(req, res);
      res.status(200).json({ message: "Create Successful" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };

  export const fetchGoldById = async (req, res) => {
    try {
      const { id } = req.query;
      const user = await getGoldById(id);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(user);
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };