import "./App.css";
import TaskList from "./tasks/TaskList";
import NavBar from "./components/NavBar";
import AuthProvider from "./components/AuthProvider";
import { TasksProvider } from "./tasks/index";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar />

          <TaskList />
          {/* <Counter/> */}
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
