import  { useReducer } from "react";
import counterReducer from "./counterReducer";

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      Counter({value})
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};

export default Counter;
