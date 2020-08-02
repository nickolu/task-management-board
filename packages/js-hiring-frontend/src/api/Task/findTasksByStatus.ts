import { TaskApi } from ".";

export function findTasksByStatus(status: string, callback: any) {
    TaskApi.findByStatus(status)
        .then((tasks) => {
            callback(tasks);
        })
        .catch((e) => {
            throw Error(e);
        });
}
