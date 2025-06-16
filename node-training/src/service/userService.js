const { encryptPassword } = require("../util/password");
const shortid = require("shortid");
const userRepo = require("../repository/userRepo");

const createUser = async (user) => {
  const { username, password, role } = user || {};
  const _user = await userRepo.getUserByUsername(username);
  if (_user) {
    throw new Error("Username already exists");
  }

  const newUser = {
    id: shortid.generate(),
    username,
    role: role || "user", // Default role is 'user' if not provided
    password: encryptPassword(password),
  };

  await userRepo.createUser(newUser);

  const { password: _, ...userInfo } = newUser; // Exclude password from the response
  return userInfo;
};

const userService = {
  createUser,
};

module.exports = userService;
