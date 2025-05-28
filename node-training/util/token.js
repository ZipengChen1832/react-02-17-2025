const jwt = require("jsonwebtoken");

const JWT_SECRET = "your-secret-key";

const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log("Decoded token:", decoded);
  return decoded;
};

module.exports = {
  signToken,
  verifyToken,
};
