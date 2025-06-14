import { useReducer } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";
import NavBar from "./components/NavBar";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />

        <TaskList />
        {/* <Counter/> */}
      </TasksContext.Provider>
    </>
  );
}

export default App;
