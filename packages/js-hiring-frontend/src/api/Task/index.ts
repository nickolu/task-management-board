import { get, post } from "../HttpApi";
import { TaskStatusInterface } from "../TaskStatus";

export interface TaskInterface {
    _id: string;
    title: string;
    description: string;
    status: TaskStatusInterface;
}

export interface TaskPayloadInterface {
    _id: string;
    title: string;
    description: string;
    status: string;
}

class TaskApi {
    static async findOneById(id: string) {
        return await get(`/tasks/find-one-by-id?_id=${id}`);
    }
    static async findAll() {
        return await get("/tasks/find-all");
    }
    static async create(document: object) {
        return await post("/tasks/create-new", document);
    }
    static async update(document: object) {
        return await post("/tasks/update", document);
    }
}

export { TaskApi };
