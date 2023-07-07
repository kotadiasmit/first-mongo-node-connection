import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true,
    minlength: 4,
    maxlength: 15,
  },
  title: {
    type: String,
    minlength: 4,
    maxlength: 30,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  id: {
    type: String,
  },
});

export const Todo = mongoose.model("myDb", TodoSchema);
