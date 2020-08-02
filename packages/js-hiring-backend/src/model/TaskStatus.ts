import mongoose from "mongoose";

interface TaskStatusInterface extends mongoose.Document {
    status: String;
}

const TaskStatusSchema = new mongoose.Schema({
    text: String,
});

const TaskStatus = mongoose.model<TaskStatusInterface>(
    "TaskStatus",
    TaskStatusSchema
);

export { TaskStatus, TaskStatusInterface, TaskStatusSchema };
