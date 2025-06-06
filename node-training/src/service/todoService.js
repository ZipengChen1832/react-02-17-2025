const shortid = require("shortid");
const todoRepo = require("../repository/todoRepo");
//getTodos, getTodoById,updateTodo,createTodo, deleteTodo,

const getAllTodos = async () => {
  const todos = await todoRepo.getTodos();
  return todos;
};

const getTodoById = async (id) => {
  const todo = await todoRepo.getTodoById(id);
  return todo
};
const updateTodo = async (id, update) => {
  const updatedTodo = await todoRepo.updateTodo(id, update);
  return updatedTodo;
};
const createTodo = async (newTodo) => {
    const newTodos=await todoRepo.createTodo(newTodo);
  return newTodos
};
const deleteTodo = async (id) => {
    const deletedTodos=await todoRepo.deleteTodo(id);
  return deletedTodos
};

const todoService = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };
  
  module.exports = todoService;