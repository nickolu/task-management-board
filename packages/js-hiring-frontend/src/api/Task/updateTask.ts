import { TaskApi, TaskPayloadInterface } from "./";
import { logger } from "../../util/logger";

export function updateTask(taskData: TaskPayloadInterface) {
    TaskApi.update(taskData)
        .then((data) => {
            logger.debug("task updated with", data);
        })
        .catch((e) => {
            logger.error("this no work");
            throw Error(e);
        });
}
