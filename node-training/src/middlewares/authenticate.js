const { verifyToken } = require("../util/token");

function authenticate(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Please log in" });
  }
  try {
    const user = verifyToken(token);
    req.user = user; // Attach user info to request object
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authenticate;
