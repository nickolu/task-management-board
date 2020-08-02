import React, { useState, useEffect } from "react";
import { TaskTable } from "../../components/TaskTable";
import { TaskApi, TaskInterface } from "../../../api/Task";
import { Page } from "../../components/Page";

interface TasksPageState {
    tasks: TaskInterface[];
}

export const TasksPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        TaskApi.findAll()
            .then((data) => {
                setTasks(data);
            })
            .catch((e) => {
                throw Error(e);
            });
    }, []);

    return (
        <Page>
            <h2>Tasks</h2>

            <div>
                <h3>All Tasks</h3>
                {tasks && <TaskTable tasks={tasks} />}
            </div>
        </Page>
    );
};
