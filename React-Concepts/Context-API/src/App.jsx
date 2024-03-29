import Counter from "./Counter";
import { countStore } from "./countContext/countStore";

const App = () => {
  // const countStore = countStore();
  const count = countStore();
  return (
    <div>
      <h2>Count is {count.count}</h2>
      <Counter />
    </div>
  );
};

export default App;
