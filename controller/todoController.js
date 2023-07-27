import { Todo } from "../model/todoModel.js";

const getAllTodo = async (req, res) => {
  await Todo.find()
    .then((result) =>
      result?.length > 0 ? res.send(result) : res.send("no data found")
    )
    .catch((err) => res.send(err));
};

const addTodo = async (req, res) => {
  const todo = req.body;
  console.log(todo);
  if (todo.name && todo.title) {
    await Todo.create(todo)
      .then((result) => res.send(result))
      .catch((err) => res.status(400).send(err.message));
  } else {
    res.status(400);
    res.send({ message: "add name and title" });
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  await Todo.findById(id)
    .then((result) =>
      result
        ? res.send(result)
        : res.status(404).send(`task with id : ${id} not found`)
    )
    .catch((err) => res.send({ message: err.message }));
};

const updateTodo = async (req, res) => {
  const { _id } = req.body;
  await Todo.findByIdAndUpdate(_id, { $set: req.body })
    .then((result) =>
      !result
        ? res.status(404).send(`no data found with id: ${_id}`)
        : res.send(`data updated with given details.`)
    )
    .catch((err) => res.status(404).send({ message: err.message }));
};

const updateTodoByUser = async (req, res) => {
  const { oldName, name } = req.body;
  await Todo.updateOne({ name: oldName }, { $set: { name: name } })
    .then((result) => {
      //res.send(result)
      !result.matchedCount
        ? res.send(`no name found with ${oldName}`)
        : result.modifiedCount
        ? res.send(`${oldName} has been updated with ${name}`)
        : res.send(`oldName is same as provided name`);
    })
    .catch((err) => res.send({ message: err.message }));
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id)
    .then((result) =>
      result
        ? res.send("data deleted successfully")
        : res.status(404).send(`task with id : ${id} not found`)
    )
    .catch((err) => res.send({ message: err.message }));
};

export const todo = {
  getAllTodo,
  addTodo,
  getTodoById,
  updateTodo,
  updateTodoByUser,
  deleteTodo,
};
