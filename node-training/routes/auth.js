const { Router } = require("express");
const shortid = require("shortid");
const { encryptPassword, comparePassword } = require("../util/password");
const { signToken } = require("../util/token");

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

router.post("/register", (req, res) => {
  const { username, password, role } = req.body;
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
    role: role || "user", // Default role is 'user' if not provided
    password: encryptPassword(password),
  };

  const { password: _, ...userInfo } = newUser; // Exclude password from the response

  users.push(newUser);
  res.status(201).json({
    message: "User registered successfully",
    user: userInfo,
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  const user = users.find((u) => u.username === username);

  // This approach gives out a bit too much information
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (comparePassword(password, user.password) === false) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const { id, role } = user; // Exclude password from the response

  //  two ways to store the token
  // 1. In a http-only cookie
  // 2. store in the local storage of the browser
  res
    .cookie(
      "token",
      signToken({
        id,
        role,
      }),
      {
        httpOnly: true,
      }
    )
    .status(200)
    .json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
      },
    });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
});

module.exports = router;
