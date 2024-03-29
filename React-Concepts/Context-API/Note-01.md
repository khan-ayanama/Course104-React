# useContext

## Creating Context

```jsx
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
```

## Providing to component

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CounterProvider from "./countContext/countStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
```

## Accessing inside component

```jsx
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
```
