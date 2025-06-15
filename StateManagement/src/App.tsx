import "./App.css";
import TaskList from "./tasks/TaskList";
import NavBar from "./components/NavBar";

import { TasksProvider } from "./tasks/index";
import Counter from "./counter/Counter";

function App() {
  return (
    <>
      <TasksProvider>
        <Counter />
        <NavBar />

        <TaskList />
      </TasksProvider>
    </>
  );
}

export default App;
