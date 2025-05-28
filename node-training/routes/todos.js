const { Router } = require("express");
const shortid = require("shortid");

const router = Router();

let todos = [
  {
    id: shortid.generate(),
    title: "Learn Node.js",
    description: "Understand the basics of Node.js",
    completed: false,
  },
];

// READ
router.get("/todos", (req, res) => {
  res.json(todos);
});

router.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
  }

  res.json(todo);
});

// CREATE
router.post("/todos", (req, res) => {
  const { title, description } = req.body;

  const newTodo = {
    id: shortid.generate(),
    title: title,
    description: description || "",
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// UPDATE
router.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const todoToUpdate = todos.find((todo) => todo.id === id);
  if (!todoToUpdate) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
  }

  if (title !== undefined) {
    todoToUpdate.title = title;
  }
  if (description !== undefined) {
    todoToUpdate.description = description;
  }
  if (completed !== undefined) {
    todoToUpdate.completed = completed;
  }

  res.json(todoToUpdate);
});

// DELETE
router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoToDelete = todos.find((todo) => todo.id === id);
  if (!todoToDelete) {
    res.status(404).json({ message: `Todo with id ${id} not found` });
    return;
  }

  todos = todos.filter((todo) => todo.id !== id);
  res.status(200).json({ message: `Todo with id ${id} deleted successfully1` });
});

module.exports = router;
