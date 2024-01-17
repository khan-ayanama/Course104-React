# Redux

## What is Redux?

Redux is a pattern and library for managing and updating application state, using events called "actions"

## Why Should I Use Redux?

Redux helps you manage "global" state - state that is needed across many parts of your application.

The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.

## When Should I Use Redux?

Redux is more useful when:

* You have large amounts of application state that are needed in many places in the app
* The app state is updated frequently over time
* The logic to update that state may be complex
* The app has a medium or large-sized codebase, and might be worked on by many people.

## Redux Libraries and Tools

* `React-Redux:`  React-Redux is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.
* `Redux-Toolkit:` Redux Toolkit is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.
* `Redux DevTools Extension:` The Redux DevTools Extension shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".

## Redux Terms and Concepts

### State Management

* State describes the condition of the app at a specific point in time
* The UI is rendered based on that state
* When something happens (such as a user clicking a button), the state is updated based on what occurred
* The UI re-renders based on the new state

### Immutability

* In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.
* Redux expects that all state updates are done immutably.

### Terminology

`Actions`

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

```js
    const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
    }
```

`Action Creators`
An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```js
    const addTodo = text => {
    return {
        type: 'todos/todoAdded',
        payload: text
    }
    }
```

`Reducers`
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

Reducers must always follow some specific rules:

* They should only calculate the new state value based on the state and action arguments
* They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
* They must not do any asynchronous logic, calculate random values, or cause other "side effects"

```js
    const initialState = { value: 0 }

    function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
        // If so, make a copy of `state`
        return {
        ...state,
        // and update the copy with the new value
        value: state.value + 1
        }
    }
    // otherwise return the existing state unchanged
    return state
    }
```

`Store`
The current Redux application state lives in an object called the store .

The store is created by passing in a reducer, and has a method called getState that returns the current state value

```js
    import { configureStore } from '@reduxjs/toolkit'

    const store = configureStore({ reducer: counterReducer })

    console.log(store.getState())
    // {value: 0}
```

`Dispatch`
The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value

```js
    store.dispatch({ type: 'counter/increment' })

    console.log(store.getState())
    // {value: 1}
```

`Selectors`
Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data

```js
    const selectCounterValue = state => state.value

    const currentValue = selectCounterValue(store.getState())
    console.log(currentValue)
    // 2
```
