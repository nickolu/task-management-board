import React from "react";
import { Link } from "react-router-dom";

export const Page = ({ children }: any) => {
    return (
        <div>
            <div>
                <h1>Task Management Board</h1>
                <Link to="/">Dashboard</Link> | <Link to="/tasks/">Tasks</Link>{" "}
                | <Link to="/tasks/create">Create a Task</Link>
            </div>
            {children}
        </div>
    );
};
