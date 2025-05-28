const { Router } = require("express");
const shortid = require("shortid");
const { encryptPassword, comparePassword } = require("../util/password");
const { signToken } = require("../util/token");
const { userInfo } = require("os");

const router = Router();

const users = [
  {
    id: shortid.generate(),
    role: "admin",
    username: "John_Doe",
    password: "123",
  },
  {
    id: shortid.generate(),
    role: "user",
    username: "Jane_Doe",
    password: "123",
  },
];

router.post("/auth/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    return res.status(409).json({ message: "Username already exists" });
  }

  const newUser = {
    id: shortid.generate(),
    username,
    role: "user", // Default role for new users
    password: encryptPassword(password),
  };

  const { password: _, ...userInfo } = newUser; // Exclude password from the response

  users.push(newUser);
  res.status(201).json({
    message: "User registered successfully",
    user: userInfo,
  });
});

router.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  // This approach gives out a bit too much information
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (comparePassword(password, user.password) === false) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const { password: _, ...userInfo } = user; // Exclude password from the response

  res.status(200).json({
    message: "Login successful",
    token: signToken(userInfo),
    user: {
      id: user.id,
      username: user.username,
    },
  });
});

module.exports = router;
