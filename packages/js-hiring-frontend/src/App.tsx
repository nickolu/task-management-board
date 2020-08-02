import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Body {
    description: string;
    title: string;
}

const createTask = async (taskTitle: string, taskDescription: string) => {
    const response = await fetch("http://localhost:4000/tasks/create-new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: taskDescription,
            title: taskTitle,
        }),
    });

    return response.json();
};

function App() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    console.log(taskTitle, taskDescription);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <h4>name</h4>
                <input
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value);
                    }}
                />
                <h4>description</h4>
                <input
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        createTask(taskTitle, taskDescription)
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((e) => {
                                console.log(e);
                                throw Error(e);
                            });
                    }}
                >
                    create a task
                </button>
            </header>
        </div>
    );
}

export default App;
