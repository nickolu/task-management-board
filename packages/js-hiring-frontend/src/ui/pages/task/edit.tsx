import React, { useEffect, useState } from "react";
import { updateTask } from "../../../api/Task/updateTask";
import { findOneTaskById } from "../../../api/Task/findOneTaskById";
import { TaskPage } from ".";
import { TaskPayloadInterface } from "../../../api/Task";

export const EditTaskPage = ({ token }: any) => {
    const [initialTaskData, setInitialTaskData] = useState({
        _id: "",
        title: "",
        description: "",
        status: "",
    });

    useEffect(() => {
        findOneTaskById(token, (data: TaskPayloadInterface) => {
            setInitialTaskData(data);
        });
    }, [token]);

    return <TaskPage onSubmit={updateTask} initialTaskData={initialTaskData} />;
};
