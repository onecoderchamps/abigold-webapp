import { login, register } from "./service";



export const fetchLogin = async (req, res) => {
  try {
    const users = await login(req, res);
    res.status(200).json({ message: "Login successful", token: users });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const fetchRegister = async (req, res) => {
    try {
      const users = await register(req, res);
      res.status(200).json({ message: "Register Successful, Admin ABI will activated your account" });
    } catch (err) {
      res.status(500).json({ error: "Failed to register  users" });
    }
  };
