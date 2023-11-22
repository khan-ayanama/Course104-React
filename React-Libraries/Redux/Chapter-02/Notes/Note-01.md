# Middleware in Redux

## Creating a json-server

```bash
    # Installing json-server
    npm i json-server

    # Run the databse server
    json-server database/db.json
```

## Why we can't use asynchronous function as middleware in redux

The reason asynchronous functions are not typically used directly in Redux reducers is related to the fundamental nature of reducers and their requirement to be synchronous. Reducers in Redux are meant to be pure functions that take the current state and an action, and return a new state. They should not perform any side effects, including asynchronous operations.

However, if you need to perform asynchronous operations in your Redux application, Redux provides a middleware called redux-thunk that allows you to write action creators that return functions instead of plain action objects. These functions can then contain asynchronous logic and dispatch multiple actions as needed.

Here's a brief example using redux-thunk:

```javascript
    // Action creator using thunk
    const fetchData = () => {
    return (dispatch) => {
        dispatch(requestData()); // You can dispatch a synchronous action here

        // Async operation (e.g., fetching data)
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => dispatch(receiveData(data))) // Dispatch another action when data is received
        .catch(error => dispatch(requestDataError(error))); // Dispatch an error action if needed
    };
    };

    // Example reducer
    const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_DATA':
        // Handle the request action
        return { ...state, loading: true };
        case 'RECEIVE_DATA':
        // Handle the receive action
        return { ...state, loading: false, data: action.payload };
        case 'REQUEST_DATA_ERROR':
        // Handle the error action
        return { ...state, loading: false, error: action.payload };
        default:
        return state;
    }
    };
```

In this example, fetchData is an action creator that returns a function, thanks to redux-thunk. Inside that function, you can perform asynchronous operations and dispatch synchronous actions as needed. The middleware handles the asynchronous part, allowing you to structure your code in a way that adheres to Redux principles.

## Thunk Middleware

The Redux Thunk middleware is a middleware that allows you to write action creators that return a function instead of an action object. This function can then perform asynchronous operations and dispatch actions based on the results. Redux Thunk is a popular middleware for handling asynchronous logic in Redux.

Here's a basic explanation of how Redux Thunk works:

`1. Action Creators Return Functions:`
Instead of returning a plain action object, action creators can return functions. These functions receive the dispatch and getState functions as arguments, which allows them to interact with the store.

```javascript
    // Synchronous action creator
    const increment = () => ({
    type: 'INCREMENT',
    });

    // Asynchronous action creator using Redux Thunk
    const incrementAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
        dispatch(increment());
        }, 1000);
    };
    };
```

`2. Thunk Function:`
The function returned by the action creator is commonly referred to as a "thunk." It's a function that can contain asynchronous logic and has access to the dispatch method.

```Middleware Integration:```
To use Redux Thunk, you need to apply it as middleware when setting up your Redux store. You can do this using the applyMiddleware function from the redux library.

```javascript
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from './reducers';

    const store = createStore(rootReducer, applyMiddleware(thunk));
```

`Async Operations:`
Inside your thunk functions, you can perform asynchronous operations, such as making API calls. Once the asynchronous operation is complete, you can dispatch additional actions based on the results.

```javascript
    const fetchData = () => {
    return (dispatch) => {
        dispatch(requestData());

        // Async operation (e.g., fetching data)
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => dispatch(receiveData(data)))
        .catch(error => dispatch(requestDataError(error)));
    };
    };
```

By using Redux Thunk, you can handle asynchronous logic in a way that aligns with the principles of Redux, keeping your actions and reducers pure and predictable.

## Multiple Reducers

In Redux, managing state is typically done through multiple reducers. Each reducer is responsible for handling a specific part of the application state. This approach is beneficial for organizing and modularizing your code as your application grows. Here's how you can implement multiple reducers in Redux:

`Combine Reducers:`
The combineReducers function from the Redux library allows you to combine multiple reducers into a single reducer function. Each key in the combined reducer corresponds to a slice of the overall state.

```javascript
    // reducers/counterReducer.js
    const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state;
    }
    };

    // reducers/userReducer.js
    const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER':
        return action.payload;
        case 'LOGOUT':
        return null;
        default:
        return state;
    }
    };

    // rootReducer.js
    import { combineReducers } from 'redux';
    import counterReducer from './counterReducer';
    import userReducer from './userReducer';

    const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    });

    export default rootReducer;
```

`Create the Store with Combined Reducer:`
When creating your Redux store, use the combined reducer as the argument to the createStore function.

```javascript
    // store.js
    import { createStore } from 'redux';
    import rootReducer from './reducers/rootReducer';

    const store = createStore(rootReducer);

    export default store;
```

`Accessing State in Components:`
In your components, you can access different parts of the state using the keys defined in your combined reducer.

```javascript
    // ExampleComponent.js
    import React from 'react';
    import { connect } from 'react-redux';

    const ExampleComponent = ({ counter, user }) => {
    return (
        <div>
        <p>Counter: {counter}</p>
        <p>User: {user ? user.name : 'Not logged in'}</p>
        </div>
    );
    };

    const mapStateToProps = state => ({
    counter: state.counter,
    user: state.user,
    });

    export default connect(mapStateToProps)(ExampleComponent);
```

By following this pattern, you can manage different parts of your application state using separate reducers, keeping your codebase organized and scalable. Each reducer focuses on a specific aspect of the application, making it easier to reason about and maintain.
