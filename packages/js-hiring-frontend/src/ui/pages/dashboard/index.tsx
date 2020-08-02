import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { Page } from "../../components/Page";
import { findAllTaskStatuses } from "../../../api/TaskStatus/findAllTaskStatuses";
import { findAllTasks } from "../../../api/Task/findAllTasks";
import { StatusColumn } from "../../components/StatusColumn";

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
            <Row>
                {statuses.map((status: any) => (
                    <StatusColumn status={status} tasks={tasks} />
                ))}
            </Row>
        </Page>
    );
};
