import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";
import { findAllTaskStatuses } from "../../../api/TaskStatus/findAllTaskStatuses";
import { findAllTasks } from "../../../api/Task/findAllTasks";

export const DashboardPage = () => {
    const [tasks, setTasks] = useState([]);
    const [statuses, setTaskStatuses] = useState([]);
    const tasksByStatus: any = {};

    useEffect(() => {
        findAllTasks(setTasks);
        findAllTaskStatuses((options: any) => {
            setTaskStatuses(options.map((option: any) => option.status));
        });
    }, []);

    statuses.forEach((status) => {
        const thisStatus: any = [];
        tasks.forEach((task: any) => {
            if (task.status.status === status) {
                thisStatus.push(task);
            }
        });

        if (thisStatus.length > 0) {
            tasksByStatus[status] = thisStatus;
        }
    });

    return (
        <Page>
            {statuses.map((status: any) => (
                <StatusColumn status={status} tasks={tasks} />
            ))}
        </Page>
    );
};

const StatusColumn = ({ status, tasks }: any) => {
    return (
        <div>
            <h2>{status}</h2>
            {tasks.map(
                (task: any) =>
                    task.status.status === status && <div>{task.title}</div>
            )}
        </div>
    );
};
