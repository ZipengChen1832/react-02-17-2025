const { Router } = require("express");
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

const router = Router();

// GET all todos
router.get("/", getTodos);

// GET todo by ID
router.get("/:id", getTodoById);

// CREATE todo
router.post("/", createTodo);

// UPDATE todo
router.patch("/:id", updateTodo);

// DELETE todo
router.delete("/:id", deleteTodo);

module.exports = router;
