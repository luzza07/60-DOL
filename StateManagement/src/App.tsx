import { useReducer } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";
import NavBar from "./components/NavBar";

import AuthProvider from "./components/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />

          <TaskList />
          {/* <Counter/> */}
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
