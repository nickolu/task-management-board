import { TaskApi } from "./";
import { logger } from "../../util/logger";

export function deleteTask(taskData: any) {
    TaskApi.delete(taskData)
        .then((data) => {
            logger.debug(data);
        })
        .catch((e) => {
            throw Error(e);
        });
}
