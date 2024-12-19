import jwt from "jsonwebtoken";

// Middleware to verify JWT token
export const verifyToken = (handler) => {
  return async (req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

    if (!token) {
      return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
      // Verify the token using JWT secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Save decoded token to req.user for use in the route handler
      req.user = decoded;

      return handler(req, res); // Proceed to the next handler
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired. Please log in again." });
      }
      if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid token. Please log in again." });
      }
      console.error("JWT verification error:", error);
      return res.status(500).json({ message: "Internal server error during token verification." });
    }
  };
};
