import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      <h1>This is a counter</h1>
      <div>
        <p>current count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
};

export default Counter;
