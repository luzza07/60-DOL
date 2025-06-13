import React, { useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";

const TaskList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task" + Date.now() },
          })
        }
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title} </span>
            <button
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
