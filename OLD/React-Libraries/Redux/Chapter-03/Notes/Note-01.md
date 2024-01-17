# React Redux

React-Redux is a library that integrates React, a JavaScript library for building user interfaces, with Redux, a state management library. Redux is commonly used with React to manage the state of an application in a predictable way.

## 1. Redux: State Management Library

`Store:`
The central piece of Redux is the store. It holds the entire state tree of your application.
You create the store using the createStore function provided by Redux, passing in a root reducer.

```jsx
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
```

`Reducers:`
Reducers are functions responsible for handling actions and updating the state accordingly.
They take the current state and an action as arguments and return a new state.
Multiple reducers can be combined into a single root reducer using combineReducers.

```jsx
import { combineReducers } from "redux";
import someReducer from "./someReducer";

const rootReducer = combineReducers({
  someData: someReducer,
  // Add more reducers as needed
});

export default rootReducer;
```

## 2. React-Redux Integration

1. `Provider Component:`
   The Provider component is a wrapper that makes the Redux store available to the entire React component tree.
   It's typically placed at the root level of your application.

```jsx
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>{/* Your app components go here */}</Provider>
);
```

`Connect Function:`
The connect function is used to connect your React components to the Redux store.
It's a higher-order component that takes two functions as arguments: mapStateToProps and mapDispatchToProps.

```jsx
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  someData: state.someData,
});

const mapDispatchToProps = (dispatch) => ({
  someAction: () => dispatch(someAction()),
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(YourComponent);
```

## React-Redux with Functional Components

When working with React and Redux using functional components, you typically use the useSelector and useDispatch hooks provided by the react-redux library.

Here's a simple example:

`Install Dependencies:` Make sure you have react-redux and redux installed. You can install them using:

```bash
  npm install react-redux redux
```

`Setting up the Redux Store:` Create your Redux store, reducers, and actions just like in a traditional Redux setup.

```javascript
  // store.js
  import { createStore } from 'redux';
  import rootReducer from './reducers';

  const store = createStore(rootReducer);

  export default store;
  // reducers.js
  const initialState = {
    count: 0,
  };

  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  export default counterReducer;
```

`Connecting React Component:` Now, you can connect your functional component to the Redux store using the useSelector and useDispatch hooks.

```javascript
// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

`Integrating with App:` Finally, integrate your component into your main app file and wrap it with the Provider to give it access to the Redux store.

```javascript
// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Example</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
```

That's it! Your functional component (Counter) is now connected to the Redux store. It uses the useSelector hook to access the state and the useDispatch hook to dispatch actions.
