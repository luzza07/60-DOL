
import { useContext } from "react";
import TasksContext from "./tasksContext";
import useAuthStore from "../auth/store";

const useTasks = () => useContext(TasksContext);

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuthStore();

  return (
    <>
      <p>User:{user}</p>
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
