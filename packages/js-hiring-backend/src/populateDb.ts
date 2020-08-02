import { TaskStatus } from "./model/TaskStatus";

const seedStatuses = [
    "not started",
    "in progress",
    "qa",
    "complete",
    "rejected",
    "blocked",
];

const populateTaskStatus = async () => {
    const tasks = await TaskStatus.find({});
    const areNoTaskStatusesInTheDb = Object.entries(tasks).length === 0;

    if (areNoTaskStatusesInTheDb) {
        seedStatuses.forEach((status) => {
            const newStatus = new TaskStatus({
                status,
            });

            newStatus.save();
        });
    }
};

const populateDb = async () => {
    try {
        await populateTaskStatus();
    } catch (e) {
        throw Error(e);
    }
};

export { populateDb };
