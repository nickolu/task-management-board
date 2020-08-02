import React from "react";
import { Col } from "reactstrap";
import { TaskCard } from "../TaskCard";

export const StatusColumn = ({ status, tasks }: any) => {
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
