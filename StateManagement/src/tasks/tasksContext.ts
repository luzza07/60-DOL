import type { Dispatch } from "react";

import React from "react";
import type { Task, TaskAction } from "./TasksProvider";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
