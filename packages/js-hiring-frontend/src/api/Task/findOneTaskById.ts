import { TaskApi, TaskInterface } from ".";

export function findOneTaskById(id: string, callBack: any) {
    TaskApi.findOneById(id)
        .then((task: TaskInterface) => {
            callBack(task);
        })
        .catch((e) => {
            throw Error(e);
        });
}
