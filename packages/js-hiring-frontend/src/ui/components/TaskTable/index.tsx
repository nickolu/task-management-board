import React from "react";
import { TaskInterface } from "../../../api/Task";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import styled from "styled-components";
import { deleteTask } from "../../../api/Task/deleteTask";

interface TasksList {
    tasks: TaskInterface[];
}

const HoverRow = styled.tr`
    &:hover {
        background-color: #eeeeee;
    }
`;

const DeleteLink = styled.span`
    text-decoration: underline;
    color: blue;
    cursor: pointer;
`;

const TaskTable = ({ tasks, setTasks }: any) => {
    const optimisticDelete: any = (taskToDelete: any) => {
        deleteTask(taskToDelete);

        setTasks(
            tasks.filter((task: any) => {
                return taskToDelete !== task;
            })
        );
    };

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length === 0 && (
                        <tr>
                            <td colSpan={5}>No tasks found</td>
                        </tr>
                    )}
                    {tasks.map((task: TaskInterface) => {
                        const { _id: id, title, description, status } = task;
                        const statusName: string = status.status;
                        return (
                            <HoverRow key={id}>
                                <td>
                                    <Link to={`/tasks/${id}`}>edit</Link>
                                </td>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>{statusName}</td>
                                <td>
                                    [
                                    <DeleteLink
                                        onClick={() => {
                                            optimisticDelete(task);
                                        }}
                                    >
                                        delete
                                    </DeleteLink>
                                    ]
                                </td>
                            </HoverRow>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export { TaskTable };
