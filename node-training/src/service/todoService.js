const shortid = require("shortid");
const todoRepo = require("../repository/todoRepo");

const getAllTodos = async () => {
  return todoRepo.getTodos();
};

const getTodoById = async (id) => {
  return todoRepo.getTodoById(id);
};

const createTodo = async (title, description) => {
  const newTodo = {
    id: shortid.generate(),
    title,
    description: description || "",
    completed: false,
  };

  await todoRepo.createTodo(newTodo);
  return newTodo;
};

const updateTodo = async (id, updates) => {
  const todoToUpdate = await todoRepo.getTodoById(id, updates);
  return todoToUpdate;
};

const deleteTodo = async (id) => {
  await todoRepo.deleteTodo(id);
};

const todoService = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

module.exports = todoService;
