import { countStore } from "./countContext/countStore";
const Counter = () => {
  const value = countStore();
  return (
    <div>
      <button onClick={() => value.setCount(value.count + 1)}>Increment</button>
      <button onClick={() => value.setCount(value.count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
