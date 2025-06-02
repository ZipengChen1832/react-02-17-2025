const jwt = require("jsonwebtoken");

const JWT_SECRET = "your-secret-key";
const REFRESH_SECRET = "your-refresh-secret-key";

// access token
const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "10m", // Token expiration time
  });
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

// const refreshToken = (payload) => {
//   return jwt.sign(payload, REFRESH_SECRET, {
//     expiresIn: "7d", // Refresh token expiration time
//   });
// };

// const verifyRefreshToken = (token) => {
//   return jwt.verify(token, REFRESH_SECRET);
// };

module.exports = {
  signToken,
  //   refreshToken,
  verifyToken,
  //   verifyRefreshToken,
};
