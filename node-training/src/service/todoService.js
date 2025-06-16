const shortid = require("shortid");
const todoRepo = require("../repository/todoRepo");

const getTodosByUser = async (userId) => {
  const todos = await todoRepo.getTodosByUserId(userId);
  return todos;
};

const getTodoById = async (id) => {
  const todo = await todoRepo.getTodoById(id);
  return todo;
};

const createTodo = async (newTodo) => {
  const { title, description, userId } = newTodo || {};
  const newTodos = await todoRepo.createTodo({
    id: shortid.generate(),
    userId,
    title,
    description,
    completed: false, // Default value for completed
  });
  return newTodos;
};

const updateTodo = async (id, update) => {
  const updatedTodo = await todoRepo.updateTodo(id, update);
  return updatedTodo;
};

const deleteTodo = async (id) => {
  await todoRepo.deleteTodo(id);
};

const todoService = {
  getTodosByUser,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
// sth important
module.exports = todoService;
