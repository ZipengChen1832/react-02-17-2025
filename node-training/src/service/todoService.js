const shortid = require("shortid");
const todos = require("../repository/todoRepo");

const getAllTodos = async () => {
  return todos;
};

const getTodoById = async (id) => {
  return todos.find((todo) => todo.id === id);
};

const createTodo = async (title, description) => {
  const newTodo = {
    id: shortid.generate(),
    title,
    description: description || "",
    completed: false,
  };

  todos.push(newTodo);
  return newTodo;
};

const updateTodo = async (id, updates) => {
  const todoToUpdate = todos.find((todo) => todo.id === id);
  if (!todoToUpdate) return null;

  Object.assign(todoToUpdate, updates);
  return todoToUpdate;
};

const deleteTodo = async (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return null;

  const deletedTodo = todos.splice(index, 1);
  return deletedTodo[0];
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
