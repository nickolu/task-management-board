import React, { useEffect, useState } from "react";
import { updateTask } from "../../../api/Task/updateTask";
import { findOneById } from "../../../api/Task/findOneById";
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
        findOneById(token, (data: TaskPayloadInterface) => {
            setInitialTaskData(data);
        });
    }, [token]);

    return <TaskPage onSubmit={updateTask} initialTaskData={initialTaskData} />;
};
