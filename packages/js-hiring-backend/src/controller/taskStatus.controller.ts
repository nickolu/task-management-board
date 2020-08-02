import { Request, Response, Router } from "express";
import { TaskStatus } from "../model/TaskStatus";
import { BaseController } from "./base.controller";

class TaskStatusController extends BaseController {
    getRouter(): Router {
        const router = Router();
        router.get("/find-all", this.findAll.bind(this));
        router.post("/delete", this.delete.bind(this));
        router.post("/create-new", this.createNew.bind(this));
        return router;
    }

    createNew(request: Request, response: Response) {
        try {
            const newTaskStatus = new TaskStatus(request.body);

            newTaskStatus.save();

            this.makeSuccessfulResponse(response, newTaskStatus);
        } catch (e) {
            throw Error(e);
        }
    }

    async findAll(_request: null, response: Response) {
        const taskStatuses = await TaskStatus.find({});

        this.makeSuccessfulResponse(response, taskStatuses);
    }

    async delete(request: Request, response: Response) {
        const filters: Request["query"] = request.query;
        const areNoQueryArgumentsPresent = Object.entries(filters).length === 0;

        if (areNoQueryArgumentsPresent) {
            this.makeBadRequestResponse(
                response,
                "at least one query argument must be provided"
            );
            return;
        }

        const taskStatuses = await TaskStatus.find(
            this.buildMongoQuery(filters)
        );

        this.makeSuccessfulResponse(response, taskStatuses);
    }
}

export { TaskStatusController };
