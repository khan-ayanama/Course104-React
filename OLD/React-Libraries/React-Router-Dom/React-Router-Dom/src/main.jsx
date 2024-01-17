import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

import ErrorPage from "./ErrorPage.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import { userData as rootLoader } from "./users.js";
import Contacts from "./Contacts.jsx";
import { actionCreator } from "./Contacts.jsx";

const Root = () => {
  return (
    <>
      <h1>Main Page</h1>
      <ul style={{ display: "inline-block", listStyleType: "none" }}>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>
          <Link to={"contacts"}>Contact</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
        loader: rootLoader,
      },
      {
        path: "contacts",
        element: <Contacts />,
        action: actionCreator,
        children: [
          {
            path: ":id",
            element: <Contact />,
            loader: rootLoader,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
