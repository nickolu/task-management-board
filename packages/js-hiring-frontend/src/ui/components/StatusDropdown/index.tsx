import React, { useEffect, useState } from "react";
import { findAllTaskStatuses } from "../../../api/TaskStatus/findAllTaskStatuses";

export const StatusDropdown = ({ status, onChange }: any) => {
    const [taskStatusOptions, setTaskStatusOptions] = useState([]);

    useEffect(() => {
        findAllTaskStatuses((options: any) => {
            setTaskStatusOptions(options.map((option: any) => option.status));
        });
    }, [setTaskStatusOptions]);

    return (
        <select value={status} onChange={onChange}>
            {taskStatusOptions.length > 0 &&
                taskStatusOptions.map((statusOption: string) => {
                    return (
                        <option key={statusOption} value={statusOption}>
                            {statusOption}
                        </option>
                    );
                })}
        </select>
    );
};
