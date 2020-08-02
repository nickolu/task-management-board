import { TasksPage } from "../pages/tasks";
import { DashboardPage } from "../pages/dashboard";
import { EditTaskPage } from "../pages/task/edit";
import { CreateTaskPage } from "../pages/task/create-new";

const routes = {
    public: [
        {
            path: "/tasks/create",
            component: CreateTaskPage,
        },
        {
            path: "/tasks/:token",
            component: EditTaskPage,
        },

        {
            path: "/tasks",
            component: TasksPage,
        },
        {
            path: "/",
            component: DashboardPage,
        },
    ],
};

export { routes };
