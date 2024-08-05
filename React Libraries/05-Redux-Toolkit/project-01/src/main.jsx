import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { StoreProvider } from "./store";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.Fragment>
);
