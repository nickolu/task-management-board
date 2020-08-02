import React from "react";
import { TaskInterface } from "../../../api/Task";
import { Link } from "react-router-dom";

interface TasksList {
    tasks: TaskInterface[];
}

const TaskTable = ({ tasks }: TasksList) => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>title</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task: TaskInterface) => {
                    const { _id: id, title, description, status } = task;
                    const statusName: string = status.status;
                    return (
                        <tr key={id}>
                            <td>
                                <Link to={`/tasks/${id}`}>edit</Link>
                            </td>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>{statusName}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export { TaskTable };
