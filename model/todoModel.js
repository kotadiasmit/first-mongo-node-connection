import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  title: {
    type: String,
    minlength: 4,
    maxlength: 30,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  id: {
    type: String,
    unique: true,
  },
});

export const Todo = mongoose.model("myDb", TodoSchema);
