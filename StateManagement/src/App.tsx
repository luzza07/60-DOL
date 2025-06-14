import { useReducer } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";
import NavBar from "./components/NavBar";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");
  return (
    <>
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />

          <TaskList />
          {/* <Counter/> */}
        </TasksContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
