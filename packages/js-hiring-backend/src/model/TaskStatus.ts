import mongoose from "mongoose";

interface TaskStatusInterface extends mongoose.Document {
    status: String;
}

const taskStatusSchema = new mongoose.Schema({
    status: String,
});

const TaskStatus = mongoose.model<TaskStatusInterface>(
    "TaskStatus",
    taskStatusSchema
);

taskStatusSchema.methods = {
    findByStatus: async (status: string) => {
        return await TaskStatus.find({ status: status });
    },
};

export { TaskStatus, TaskStatusInterface, taskStatusSchema };
