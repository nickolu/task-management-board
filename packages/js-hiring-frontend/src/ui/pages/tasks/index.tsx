import React, { useState, useEffect } from "react";
import { TaskTable } from "../../components/TaskTable";
import { Page } from "../../components/Page";
import { findAllTasks } from "../../../api/Task/findAllTasks";

export const TasksPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        findAllTasks(setTasks);
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
