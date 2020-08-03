import React from "react";
import { Col } from "reactstrap";
import { TaskCard } from "../TaskCard";
import styled from "styled-components";

const StyledCol = styled(Col)`
    background: #fefefe;
    border: 1px dashed #dddddd;
    min-width: 200px;
    min-height: 300px;
`;

export const StatusColumn = ({ status, tasks }: any) => {
    return (
        <StyledCol>
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
        </StyledCol>
    );
};
