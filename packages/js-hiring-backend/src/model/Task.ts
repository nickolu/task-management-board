import { Document, Schema, model } from "mongoose";
import { taskStatusSchema, TaskStatusInterface } from "./TaskStatus";

export interface TaskInterFace extends Document {
    id: string;
    description: string;
    title: string;
    status: TaskStatusInterface;
}

export const taskSchema = new Schema({
    id: String,
    description: String,
    title: String,
    status: taskStatusSchema,
});

taskSchema.methods = {
    updateStatus: function (status: TaskStatusInterface) {
        this.status = status;
    },
};

const Task = model<TaskInterFace>("Task", taskSchema);

export { Task };
