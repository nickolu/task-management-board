import { TaskApi } from ".";

export function findAllTasks(callback: any) {
    TaskApi.findAll()
        .then((data) => {
            callback(data);
        })
        .catch((e) => {
            throw Error(e);
        });
}
