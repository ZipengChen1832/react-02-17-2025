const { connectDB } = require("../database/connection");

const getUsers = async () => {
  const connection = await connectDB();
  const sql = "SELECT * FROM Users";
  const [results, fields] = await connection.query(sql);
  return results;
};

const getUserByUsername = async (username) => {
  const connection = await connectDB();
  const sql = `SELECT * FROM Users WHERE username = "${username}"`;
  const [results, fields] = await connection.query(sql);
  if (results.length === 0) {
    return null; // User not found
  }
  return results[0]; // Return the first user found
};

const getUserById = async (id) => {
  const connection = await connectDB();
  const sql = `SELECT * FROM Users WHERE id = "${id}"`;
  const [results, fields] = await connection.query(sql);
  if (results.length === 0) {
    return null; // User not found
  }
  return results[0]; // Return the first user found
};

const createUser = async (user) => {
  try {
    const connection = await connectDB();
    const { id, username, password, role } = user || {};
    const sql = `INSERT INTO Users (id, username, password, role) VALUES ("${id}", "${username}", "${password}", "${role}")`;
    await connection.query(sql);
    return user;
  } catch (error) {
    console.error("Error creating user:", error.message);
    // throw new Error("Failed to create user");
  }
};

const userRepo = {
  getUsers,
  getUserByUsername,
  getUserById,
  createUser,
};

module.exports = userRepo;
