// Importing library
import React from "react";
import ReactDOM from "react-dom/client";

// Importing components
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
