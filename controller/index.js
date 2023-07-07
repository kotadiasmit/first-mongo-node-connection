import { Todo } from "../model/index.js";

const getAllTodo = (req, res) => {
  Todo.find()
    .then((result) =>
      result?.length > 0
        ? res.send(result)
        : res.send({ message: `no data foud` })
    )
    .catch((err) => res.send(err));
};

const addTodo = (req, res) => {
  const todo = req.body;
  console.log(todo);
  if (todo.name && todo.title) {
    Todo.insertMany(todo)
      .then((result) => res.send(result))
      .catch((err) => res.status(400).send(err.message));
  } else {
    res.status(400);
    res.send({ message: `add name and title` });
  }
};

const getTodoById = (req, res) => {
  const { id } = req.body;

  Todo.findById(id)
    .then((result) => res.send(result))
    .catch((err) => res.send({ message: `task with id : ${id} not found` }));
};

const updateTodo = (req, res) => {
  const { id } = req.body;

  Todo.findByIdAndUpdate(id, { $set: req.body })
    .then((result) => res.send(req.body))
    .catch((err) => res.send({ message: `task with id : ${id} not found` }));
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete(id)
    .then((result) => res.send("data deleted successfully"))
    .catch((err) => res.send({ message: `task with id : ${id} not found` }));
};

export const todo = {
  getAllTodo,
  addTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
