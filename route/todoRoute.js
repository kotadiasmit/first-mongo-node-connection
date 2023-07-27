import express from "express";
import { todo } from "../controller/todoController.js";

const router = express.Router();
const {
  getAllTodo,
  addTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  updateTodoByUser,
} = todo;

router.get("/all", getAllTodo);

router.post("/add", addTodo);

router.get("/todo", getTodoById);

router.put("/update", updateTodo);

router.put("/user", updateTodoByUser);

router.delete("/delete/:id", deleteTodo);

export default router;
