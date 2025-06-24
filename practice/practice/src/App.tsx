
//import Counter from "./components/counter";
import Parent from "./components/Parent";
import { UserProvider } from "./Contexts/UserContext";
// import Timer from "./components/Timer";

function App() {


 
  return (
    <>
    {/* <Counter/>
    <Timer/> */}
    <UserProvider><Parent /></UserProvider>
    
      {/* <div>
        <Message />
      </div>
      <div>
        <ListGroup />
      </div> */}
    </>
  );
}

export default App;
