import { Request, Response, Router } from "express";
import { Task } from "../model/task";
import { BaseController } from "./base.controller";

class TaskController extends BaseController {
    getRouter(): Router {
        const router = Router();
        router.get("/find-all", this.findAll.bind(this));
        router.get("/find-by-filter", this.findByFilter.bind(this));
        router.post("/create-new", this.createNew.bind(this));
        return router;
    }

    createNew(request: Request, response: Response) {
        console.log(request.body);
        try {
            const newTask = new Task({
                description: request.body.description,
                title: request.body.title,
            });

            newTask.save();
        } catch (e) {
            throw Error(e);
        }

        this.makeSuccessfulResponse(response, { message: "sent the " });
    }

    async findAll(request: null, response: Response) {
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

        const tasks = await Task.find(buildMongoQuery(filters));

        this.makeSuccessfulResponse(response, tasks);
    }
}

interface MongoQueryInterface {
    [key: string]: any;
}

function buildMongoQuery(requestQuery: Request["query"]) {
    const mongoQuery: MongoQueryInterface = {};
    Object.entries(requestQuery).forEach((entry: any[]) => {
        mongoQuery[entry[0]] = entry[1];
    });

    return mongoQuery;
}

export { TaskController };
