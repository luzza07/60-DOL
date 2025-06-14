import  { useContext } from "react";

import TasksContext from "../contexts/tasksContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TasksContext);

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
