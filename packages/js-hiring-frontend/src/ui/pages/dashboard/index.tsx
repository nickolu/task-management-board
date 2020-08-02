import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Page } from "../../components/Page";
import { findAllTaskStatuses } from "../../../api/TaskStatus/findAllTaskStatuses";
import { findAllTasks } from "../../../api/Task/findAllTasks";
import { TaskCard } from "../../components/TaskCard";

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

const StatusColumn = ({ status, tasks }: any) => {
    console.log(tasks);
    return (
        <Col>
            <h2>{status}</h2>
            {tasks.map(
                (task: any) =>
                    task.status.status === status && (
                        <TaskCard
                            key={task.title}
                            title={task.title}
                            id={task._id}
                            description={task.description}
                            status={task.status}
                        />
                    )
            )}
        </Col>
    );
};
