import "./App.css";
import TaskList from "./tasks/TaskList";
import NavBar from "./components/NavBar";
import AuthProvider from "./auth/AuthProvider";
import { TasksProvider } from "./tasks/index";
import Counter from "./counter/Counter";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <Counter/>
          <NavBar />

          <TaskList />
          
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
