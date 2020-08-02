import { Request, Response, Router } from "express";
import { Task } from "../model/task";
import { TaskStatus } from "../model/TaskStatus";
import { BaseController } from "./base.controller";
import mongoose from "mongoose";

class TaskController extends BaseController {
    getRouter(): Router {
        const router = Router();
        router.get("/find-all", this.findAll.bind(this));
        router.get("/find-by-filter", this.findByFilter.bind(this));
        router.get("/find-one-by-id", this.findOneById.bind(this));
        router.get("/find-by-status", this.findByStatus.bind(this));
        router.delete("/delete", this.deleteOne.bind(this));
        router.post("/create-new", this.createNew.bind(this));
        router.post("/update", this.update.bind(this));
        return router;
    }

    async createNew(request: Request, response: Response) {
        const taskInputs = {
            description: request.body.description,
            title: request.body.title,
            status: request.body.status,
        };
        const taskStatus = await TaskStatus.findOne({
            status: taskInputs.status,
        });

        taskInputs.status = taskStatus;

        const newTask = new Task(taskInputs);
        newTask.save();

        this.makeSuccessfulResponse(response, newTask);
    }

    async deleteOne(request: Request, response: Response) {
        const body: Request["body"] = request.body;
        const id: string = String(body._id);
        console.log(body);
        if (mongoose.isValidObjectId(id)) {
            const task = await Task.findById(mongoose.Types.ObjectId(id));

            if (task === null) {
                this.makeBadRequestResponse(
                    response,
                    `cannot delete task. Task not found with id ${id}`
                );
            } else {
                Task.deleteOne({ _id: id }, (err) => {
                    if (err) {
                        this.makeBadRequestResponse(response, err);
                    } else {
                        this.makeSuccessfulResponse(response, {
                            message: `task ${id} deleted`,
                        });
                    }
                });
            }
        } else {
            this.makeBadRequestResponse(
                response,
                "_id must be a valid mongo ObjectId"
            );
        }
    }

    async findAll(_request: null, response: Response) {
        const tasks = await Task.find({});

        this.makeSuccessfulResponse(response, tasks);
    }

    async findByFilter(request: Request, response: Response) {
        const filters: Request["query"] = request.query;
        const areNoQueryArgumentsPresent = Object.entries(filters).length === 0;

        if (areNoQueryArgumentsPresent) {
            this.makeBadRequestResponse(
                response,
                "at least one query argument must be provided"
            );
            return;
        }

        const tasks = await Task.find(this.buildMongoQuery(filters));

        this.makeSuccessfulResponse(response, tasks);
    }

    async findOneById(request: Request, response: Response) {
        const query: Request["query"] = request.query;
        const id: string = String(query._id);

        if (mongoose.isValidObjectId(id)) {
            const task = await Task.findById(mongoose.Types.ObjectId(id));
            this.makeSuccessfulResponse(response, task);
        } else {
            this.makeBadRequestResponse(
                response,
                "_id must be a valid mongo ObjectId"
            );
        }
    }

    async findByStatus(request: Request, response: Response) {
        const query: Request["query"] = request.query;
        const statusToFind = query.status;
        const taskStatuses = await TaskStatus.find(
            this.buildMongoQuery({ status: request.query.status })
        );

        console.log(taskStatuses, query.status);

        if (taskStatuses.length === 0) {
            this.makeBadRequestResponse(
                response,
                `invalid status provided: ${statusToFind}`
            );
        } else {
            const query: any = { "status.status": taskStatuses[0].status };
            const tasks = await Task.find(query);

            if (tasks.length > 0) {
                this.makeSuccessfulResponse(response, tasks);
            } else {
                this.makeBadRequestResponse(
                    response,
                    `no tasks found with status ${statusToFind}`
                );
            }
        }
    }

    async update(request: Request, response: Response) {
        const body: Request["body"] = request.body;
        const id: string = String(body._id);
        const task = await Task.findById(mongoose.Types.ObjectId(id));

        const taskInputs = {
            description: request.body.description,
            title: request.body.title,
            status: request.body.status,
        };

        const taskStatus = await TaskStatus.findOne({
            status: taskInputs.status,
        });

        taskInputs.status = taskStatus;

        if (task) {
            await task.updateOne(taskInputs);

            const updatedTask = await Task.findById(
                mongoose.Types.ObjectId(id)
            );

            this.makeSuccessfulResponse(response, updatedTask);
        }
    }
}

export { TaskController };
