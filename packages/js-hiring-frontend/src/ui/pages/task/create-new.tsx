import React from "react";
import { createTask } from "../../../api/Task/createTask";
import { TaskPage } from ".";

const CreateTaskPage = () => {
    return (
        <TaskPage
            onSubmit={createTask}
            initialTaskData={{
                title: "",
                description: "",
                status: "not started",
            }}
            title={"Create a new task"}
        />
    );
};

export { CreateTaskPage };
