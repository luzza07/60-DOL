import "./App.css";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";
import AuthProvider from "./components/AuthProvider";
import TasksProvider from "./components/TasksProvider";

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
