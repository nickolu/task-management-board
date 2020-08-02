import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TaskCardContainer = styled.div`
    padding: 8px;
    border-radius: 6px;
    background: #dddddd;
    margin-bottom: 12px;
`;

export const TaskCard = ({ id, title, description, status }: any) => (
    <TaskCardContainer>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Current Status: {status.status}</p>
        <Link to={`/tasks/${id}`}>edit</Link>
    </TaskCardContainer>
);
