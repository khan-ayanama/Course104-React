import { createContext, useContext, useState } from "react";

const countContext = createContext(null);

export const countStore = () => {
  return useContext(countContext);
};

const CounterProvider = (props) => {
  const [count, setCount] = useState(5);
  return (
    <countContext.Provider value={{ count, setCount, name: "Ayan " }}>
      {props.children}
    </countContext.Provider>
  );
};

export default CounterProvider;
