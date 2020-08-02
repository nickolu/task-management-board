import { TaskStatusApi } from ".";
import { logger } from "../../util/logger";

export function findAllTaskStatuses(callback: any) {
    TaskStatusApi.findAll().then((statuses) => {
        logger.debug(`found statuses ${statuses}`);
        callback(statuses);
    });
}
