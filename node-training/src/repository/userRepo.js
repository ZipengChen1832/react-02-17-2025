const shortid = require("shortid");
const { connectDB } = require("../database/connection");

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

const getUsers = async () => {
  return [...users];
};

const getUserByUsername = async (username) => {
  return users.find((user) => user.username === username);
};

const getUserById = async (id) => {
  return users.find((user) => user.id === id);
};

const createUser = async (user) => {
  const connection = await connectDB();

  users.push(user);
};

const userRepo = {
  getUsers,
  getUserByUsername,
  getUserById,
  createUser,
};

module.exports = userRepo;
