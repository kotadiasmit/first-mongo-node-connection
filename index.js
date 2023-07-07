import express from "express";
import router from "./route/index.js";
import mongoose from "mongoose";

const app = express();
const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (res) => {
    app.listen(port, () => {
      console.log(`connected to ${port}`);
      console.log("connect to database");
    });
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/", router);
