const { connectDB } = require("../database/connection");

const getTodos = async () => {
  const connection = await connectDB();
  const sql = "SELECT * FROM Todos";
  const [results] = await connection.query(sql);
  return results;
};

const getTodosByUserId = async (userId) => {
  const connection = await connectDB();
  const sql = `SELECT * FROM Todos WHERE user_id = "${userId}"`;
  const [results] = await connection.query(sql);

  return results;
};

const getTodoById = async (id) => {
  const connection = await connectDB();
  const sql = `SELECT * FROM Todos WHERE id = "${id}"`;
  const [results] = await connection.query(sql);
  if (results.length === 0) {
    return null; // Todo not found
  }
  return results[0]; // Return the first todo found
};

const createTodo = async (todo) => {
  const connection = await connectDB();
  const { id, title, description, completed, userId } = todo || {};
  const sql = `INSERT INTO Todos (id, title, description, completed, user_id) VALUES ("${id}", "${title}", "${description}", ${completed}, "${userId}")`;
  await connection.query(sql);

  return {
    id,
    title,
    description,
    completed,
    userId,
  };
};

const updateTodo = async (id, updates) => {};

const deleteTodo = async (id) => {
  const connection = await connectDB();
  const sql = `DELETE FROM Todos WHERE id = "${id}"`;
  await connection.query(sql);
};

const todoRepo = {
  getTodos,
  getTodoById,
  getTodosByUserId,
  createTodo,
  updateTodo,
  deleteTodo,
};

module.exports = todoRepo;
