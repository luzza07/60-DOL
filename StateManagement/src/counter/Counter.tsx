
import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      Counter({counter})<button onClick={() => increment()}>Increment</button>
      <button onClick={() => reset()}>RESET</button>
    </div>
  );
};

export default Counter;
