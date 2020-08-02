import { Document, Schema, model } from "mongoose";
import { TaskStatusSchema, TaskStatusInterface } from "./TaskStatus";

export interface TaskInterFace extends Document {
    description: String;
    title: String;
    status: TaskStatusInterface;
}

export const taskSchema = new Schema({
    description: String,
    title: String,
    status: TaskStatusSchema,
});

taskSchema.methods = {
    updateStatus: function (status: TaskStatusInterface) {
        this.status = status;
    },
};

const Task = model<TaskInterFace>("Task", taskSchema);

export { Task };
