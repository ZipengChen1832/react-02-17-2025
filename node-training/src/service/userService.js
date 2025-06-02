const { encryptPassword } = require("../util/password");
const users = require("../repository/userRepo");
const shortid = require("shortid");

const createUser = async (user) => {
  const { username, password, role } = user || {};
  const userExists = users.some((_user) => _user.username === username);
  if (userExists) {
    // return res.status(409).json({ message: "Username already exists" });
    throw new Error("Username already exists");
  }

  const newUser = {
    id: shortid.generate(),
    username,
    role: role || "user", // Default role is 'user' if not provided
    password: encryptPassword(password),
  };

  users.push(newUser);

  const { password: _, ...userInfo } = newUser; // Exclude password from the response
  return userInfo;
};

module.exports = {
  createUser,
};
