# React-Router-Dom

It is used in React app for the route inside of an app.

- To install react-router-dom library which is developed by remix

  ```js
      npm i react-router-dom
  ```

## Use React Router

Now we will learn how to use the react-router-dom inside of an application after installation.

- createBrowserRouter --> This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.

- It will create an array of object for required path and their elements.

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

- After mappping the path and element in createBrowserRouter we need to render it in root.

- We need to import the RouterProvider from react-router-dom and render it inside of root with the array created by createBrowserRouter as a prop. insde the Router key which is also imported from the same.

```js
    root.render(<RouterProvider Router={appRouter}>)
```

- Complete Code

```js
// Importing react-router-dom functions
import { createBrowserRoute, RouterProvider } from "react-router-dom";

// App Normal Layout
const AppLayOut = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

// Mapping routes and the element attached to it
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering According to path inside the key router
root.render(<RouterProvider router={appRouter} />);
```

## Creating an customized Error page

- Create an error component and also use hook name {useRouteError} which will give all the information of an error.

```js
// error.js
// useRouteError hook will give all the info about error
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <p>Please try again later!!</p>
      <p>{err.status + " : " + err.statusText}</p>
    </div>
  );
};
export default Error;

// App.js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    // Here map the error component with errorElement
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

## Types of Routing

1. Client Site Routing
2. Server Site Routing

## Linking page one to another

```js
// Here Link provides us server side routing
import { Link } from "react-router-dom";

<div>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
</div>;
```

## Rendering components between footer and header

We will import Outlet from react-router-dom and place the content which should be rendered between Footer and Header inside the children of App layout and put the `<Outlet/>` inside the App layout which is the placeholder of the components

```js
// Importin Outlet
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayOut = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/*Here outlet is the placeholder of component*/}
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    // Defining the children alongside with it's url
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
```

## Dynamic Segment

In Dyanamic segment we can use dyanamic routes for different pages.

- useParams --> It is the hook which reads the parameter given to dyanmic url.

```js
// RestaurantMenu.js
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>This is Restaurant Menu</h2>
      <h2>Restaurant Name</h2>
      <p>Restaurant Id : {id}</p>
    </div>
  );
};
export default RestaurantMenu;

// App.js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // Dynamic Route
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
```

## Loader and UseLoaderData hook

Loader is a data fetched by backend and passed to particular root as loader

```js
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
const Root = () => {
  return (
    <>
      <h1>Main Page</h1>
      <ul style={{ display: "inline-block", listStyleType: "none" }}>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>
          <Link to={"contact/1"}>Contact</Link>
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
        path: "/contact/:id",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

and with `useLoaderData` hook you can acces it in your component

```js
import { useLoaderData } from "react-router-dom";

const About = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <>
      <h1>This is About Page</h1>
    </>
  );
};

export default About;
```
