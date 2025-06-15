import { useContext } from "react";
import TasksContext from "../tasks/tasksContext";
import LoginStatus from "../auth/LoginStatus";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <nav>
      <span>{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
