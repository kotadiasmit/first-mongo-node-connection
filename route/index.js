import express from "express";
const router = express.Router();

import { todo } from "../controller/index.js";

const { getAllTodo, addTodo, getTodoById, updateTodo, deleteTodo } = todo;

router.get("/all", getAllTodo);

router.post("/add", addTodo);

router.get("/todo", getTodoById);

router.put("/update", updateTodo);

router.delete("/delete/:id", deleteTodo);

export default router;
