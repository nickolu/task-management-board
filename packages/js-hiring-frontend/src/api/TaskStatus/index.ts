import { get, post } from "../HttpApi";

export interface TaskStatusInterface {
    _id: string;
    title: string;
    description: string;
    status: string;
}

class TaskStatusApi {
    static async findAll() {
        return await get("/task-status/find-all");
    }
    static async create(status: string) {
        return await post("/task-status/create-new", status);
    }
    static async delete(status: string) {
        return await post("/task-status/delete", status);
    }
}

export { TaskStatusApi };
