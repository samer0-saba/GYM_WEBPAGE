const jwt = require("jsonwebtoken");

// Use a simple secret directly in the code as requested for simplicity
// In production, this should be in a .env file
const JWT_SECRET = "super_secret_titan_gym_key";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = { authMiddleware, JWT_SECRET };
