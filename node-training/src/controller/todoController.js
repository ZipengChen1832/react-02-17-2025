const todoService = require("../service/todoService");

const getTodos = async (req, res) => {
  const { id: userId } = req.user;
  const todos = await todoService.getTodosByUser(userId);
  res.json(todos);
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await todoService.getTodoById(id);

  res.json(todo);
};

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const { id: userId } = req.user;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = await todoService.createTodo({
    title,
    description,
    userId,
  });
  res.status(201).json(newTodo);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const todoToUpdate = await todoService.updateTodo(id, {
    title,
    description,
    completed,
  });
  res.json(todoToUpdate);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await todoService.deleteTodo(id);
  res.status(200).json({ message: `Todo with id ${id} deleted successfully` });
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
