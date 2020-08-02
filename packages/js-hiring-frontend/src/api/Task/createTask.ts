import { TaskApi, TaskPayloadInterface } from "./";
import { logger } from "../../util/logger";

export function createTask(taskData: TaskPayloadInterface) {
    logger.debug("creating task with", taskData);
    TaskApi.create(taskData)
        .then((data) => {
            logger.debug("task created with", data);
        })
        .catch((e) => {
            throw Error(e);
        });
}
