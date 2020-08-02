import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { TaskController } from "./controller/task.controller";
import { TaskStatusController } from "./controller/taskStatus.controller";

export function createApp() {
    const taskController = new TaskController();
    const taskStatusController = new TaskStatusController();
    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.header("Content-type", "application/json");

        next();
    });

    app.use("/tasks", taskController.getRouter());
    app.use("/task-status", taskStatusController.getRouter());

    return app;
}
