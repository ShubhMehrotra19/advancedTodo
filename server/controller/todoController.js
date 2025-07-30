const Todo = require("../models/Todo");
const User = require("../models/User");

const todoController = {
  // Get all todos for authenticated user
  getTodos: async (req, res) => {
    try {
      const userId = req.user.userId;

      // Find todos and populate user info if needed
      const todos = await Todo.find({ userId }).sort({ createdAt: -1 });

      res.json({
        todos,
        total: todos.length,
      });
    } catch (error) {
      console.error("Get todos error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Create new todo
  createTodo: async (req, res) => {
    try {
      const userId = req.user.userId;
      const { title, description } = req.body;

      // Validation
      if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title is required" });
      }

      // Create todo
      const todo = new Todo({
        userId,
        title: title.trim(),
        description: description ? description.trim() : "",
        status: "TODO",
      });

      await todo.save();

      // Populate user info in response
      await todo.populate("userId", "name email");

      res.status(201).json({
        message: "Todo created successfully",
        todo,
      });
    } catch (error) {
      console.error("Create todo error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Update todo status
  updateTodoStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const userId = req.user.userId;

      // Validate status
      const validStatuses = ["TODO", "In progress", "completed"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      // Update todo (ensure user owns this todo)
      const todo = await Todo.findOneAndUpdate(
        { _id: id, userId },
        { status },
        { new: true }
      ).populate("userId", "name email");

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res.json({
        message: "Todo updated successfully",
        todo,
      });
    } catch (error) {
      console.error("Update todo error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Update todo details
  updateTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;
      const userId = req.user.userId;

      // Build update object
      const updateData = {};
      if (title !== undefined) updateData.title = title.trim();
      if (description !== undefined)
        updateData.description = description.trim();
      if (status !== undefined) {
        const validStatuses = ["TODO", "In progress", "completed"];
        if (!validStatuses.includes(status)) {
          return res.status(400).json({ message: "Invalid status" });
        }
        updateData.status = status;
      }

      // Update todo
      const todo = await Todo.findOneAndUpdate(
        { _id: id, userId },
        updateData,
        { new: true }
      ).populate("userId", "name email");

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res.json({
        message: "Todo updated successfully",
        todo,
      });
    } catch (error) {
      console.error("Update todo error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Delete todo
  deleteTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.userId;

      const todo = await Todo.findOneAndDelete({ _id: id, userId });

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res.json({
        message: "Todo deleted successfully",
        deletedTodo: todo,
      });
    } catch (error) {
      console.error("Delete todo error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Get todos by status
  getTodosByStatus: async (req, res) => {
    try {
      const { status } = req.params;
      const userId = req.user.userId;

      const validStatuses = ["TODO", "In progress", "completed"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      const todos = await Todo.find({ userId, status }).sort({ createdAt: -1 });

      res.json({
        todos,
        status,
        count: todos.length,
      });
    } catch (error) {
      console.error("Get todos by status error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = todoController;
