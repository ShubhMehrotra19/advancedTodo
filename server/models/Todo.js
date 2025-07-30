const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // This connects to the User model
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["TODO", "In progress", "completed"],
      default: "TODO",
    },
  },
  {
    timestamps: true,
  }
);

// Add indexes for better query performance
todoSchema.index({ userId: 1 });
todoSchema.index({ userId: 1, status: 1 });

const TodoModel = mongoose.model("Todo", todoSchema);
module.exports = TodoModel;
