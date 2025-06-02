import { useState } from "react";

import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  const [count, setCount] = useState(0);
    let items = [
    "nepal",
    "india",
    "china",
    "bhutan",
    "sri lanka",
    "maldives",
    "bangladesh",
    "pakistan",
    "afghanistan",
  ];

  const handleSelectitem = ( item:string) => {
    console.log(item);
  }

 const [alertVisible,setAlertVisible]= useState(false)

  return (
    <>
      <ListGroup items={items} heading="cities"  onSelectItem={handleSelectitem}/> 
      {alertVisible && <Alert onClose ={()=> setAlertVisible(false)} >
        Alerted
        </Alert>}
        <Buttons color='primary' onClick={() => setAlertVisible(true)}>
          My Button
          </Buttons>
      
    </>
  );
}

export default App;
