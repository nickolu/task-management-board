import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export const Page = ({ children }: any) => {
    return (
        <Container>
            <div>
                <h1>Task Management Board</h1>
                <Link to="/">Dashboard</Link> | <Link to="/tasks/">Tasks</Link>{" "}
                | <Link to="/tasks/create">Create a Task</Link>
            </div>
            {children}
        </Container>
    );
};
