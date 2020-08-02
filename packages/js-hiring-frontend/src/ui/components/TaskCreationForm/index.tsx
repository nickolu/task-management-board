import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { StatusDropdown } from "../StatusDropdown";

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
    const [hasSubmit, setHasSubmit] = useState(false);

    return (
        <>
            <Form onSubmit={onSubmit}>
                <h4>Name</h4>
                <Input value={title} onChange={onInputChange("title")} />
                <h4>Description</h4>
                <Input
                    type="textarea"
                    value={description}
                    onChange={onInputChange("description")}
                />
                <h4>Status</h4>
                <StatusDropdown
                    status={status}
                    onChange={onInputChange("status")}
                />
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
