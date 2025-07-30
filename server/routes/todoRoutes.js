const express = require("express");
const todoController = require("../controller/todoController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// GET /api/todos - Get all todos for user
router.get("/", todoController.getTodos);

// POST /api/todos - Create new todo
router.post("/", todoController.createTodo);

// PUT /api/todos/:id - Update todo
router.put("/:id", todoController.updateTodo);

// PUT /api/todos/:id/status - Update todo status only
router.put("/:id/status", todoController.updateTodoStatus);

// DELETE /api/todos/:id - Delete todo
router.delete("/:id", todoController.deleteTodo);

// GET /api/todos/status/:status - Get todos by status
router.get("/status/:status", todoController.getTodosByStatus);

module.exports = router;
