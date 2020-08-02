import { config as dotenvConfig } from "dotenv";
import express from "express";
import { TaskController } from "./controller/task.controller";
import Message from "./model/message";
import { connect, connection, Schema, model } from "mongoose";
import { createApp } from "./app";
import { Task } from "./model/Task";

connect("mongodb://treeline:treeline@localhost:27017/jshiring", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

dotenvConfig();

// const db = connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//     const newTask = new Task({
//         description: "This is my task",
//         title: "this is my title",
//     });

//     newTask.save();
// });

const app = createApp();
const port = Number(process.env["PORT"]);
app.listen(port, () => console.log(`App listening on :${port}`));
