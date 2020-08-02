import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "reactstrap";
import { TaskStatusApi } from "../../../api/TaskStatus";
import { Redirect } from "react-router-dom";

interface TaskCreationFormInterface {
    onSubmit(): any;
    onInputChange(name: string): any;
    title: string;
    description: string;
    status: string;
}

const TaskCreationForm = ({
    onSubmit,
    onInputChange,
    title,
    description,
    status,
}: TaskCreationFormInterface) => {
    const [taskStatusOptions, setTaskStatusOptions] = useState([]);
    const [hasSubmit, setHasSubmit] = useState(false);

    useEffect(() => {
        TaskStatusApi.findAll().then((options) => {
            setTaskStatusOptions(options.map((option: any) => option.status));
        });
    }, [setTaskStatusOptions]);

    return (
        <>
            <Form onSubmit={onSubmit}>
                <h4>name</h4>
                <Input value={title} onChange={onInputChange("title")} />
                <h4>description</h4>
                <Input
                    value={description}
                    onChange={onInputChange("description")}
                />
                <h4>status</h4>
                <select value={status} onChange={onInputChange("status")}>
                    {taskStatusOptions.length > 0 &&
                        taskStatusOptions.map((statusOption: string) => {
                            return (
                                <option key={statusOption} value={statusOption}>
                                    {statusOption}
                                </option>
                            );
                        })}
                </select>
                <Button
                    onClick={(e) => {
                        onSubmit();
                        setHasSubmit(true);
                    }}
                >
                    submit
                </Button>
            </Form>
            {hasSubmit && <Redirect to={"/tasks/"} />}
        </>
    );
};

export { TaskCreationForm };
