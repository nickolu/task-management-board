import React, { useState, useEffect } from "react";

import { Page } from "../../components/Page";
import { TaskCreationForm } from "../../components/TaskCreationForm";

const TaskPage = ({ onSubmit, initialTaskData }: any) => {
    const [taskData, setTaskData] = useState(initialTaskData);
    const { title, description, status } = taskData;

    useEffect(() => {
        setTaskData(initialTaskData);
    }, [initialTaskData]);

    const getChangeHandler = (fieldName: string) => {
        return (e: any) => {
            setTaskData({ ...taskData, [fieldName]: e.target.value });
        };
    };

    return (
        <Page>
            <div>
                <h3>Create a task</h3>
                <TaskCreationForm
                    onSubmit={() => {
                        onSubmit(taskData);
                    }}
                    onInputChange={getChangeHandler}
                    title={title}
                    description={description}
                    status={status.status}
                />
            </div>
        </Page>
    );
};

export { TaskPage };
