# Introduction

Redux is a predictable state container for JavaScript apps.
Redux Toolkit is our official recommended approach for writing Redux logic.

## Installation

`Redux Toolkit`

```git
    # NPM
    npm install @reduxjs/toolkit

    # Yarn
    yarn add @reduxjs/toolkit
```

`Redux Core`

```git
    npm install redux
    yarn add redux
```

## Creating Store with Redux Toolkit

The whole global state of your app is stored in an object tree inside a single store. The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store.

```js
    import { createSlice, configureStore } from '@reduxjs/toolkit'

    const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
        },
        decremented: state => {
        state.value -= 1
        }
    }
    })

    export const { incremented, decremented } = counterSlice.actions

    const store = configureStore({
    reducer: counterSlice.reducer
    })

    // Can still subscribe to the store
    store.subscribe(() => console.log(store.getState()))

    // Still pass action objects to `dispatch`, but they're created for us
    store.dispatch(incremented())
    // {value: 1}
    store.dispatch(incremented())
    // {value: 2}
    store.dispatch(decremented())
    // {value: 1}
```

## Legacy Example

```js
    import { createStore } from 'redux'

    /**
     * This is a reducer - a function that takes a current state value and an
     * action object describing "what happened", and returns a new state value.
     * A reducer's function signature is: (state, action) => newState
     *
     * The Redux state should contain only plain JS objects, arrays, and primitives.
     * The root state value is usually an object. It's important that you should
     * not mutate the state object, but return a new object if the state changes.
     *
     * You can use any conditional logic you want in a reducer. In this example,
     * we use a switch statement, but it's not required.
     */
    function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
        return { value: state.value + 1 }
        case 'counter/decremented':
        return { value: state.value - 1 }
        default:
        return state
    }
    }

    // Create a Redux store holding the state of your app.
    // Its API is { subscribe, dispatch, getState }.
    let store = createStore(counterReducer)

    // You can use subscribe() to update the UI in response to state changes.
    // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
    // There may be additional use cases where it's helpful to subscribe as well.

    store.subscribe(() => console.log(store.getState()))

    // The only way to mutate the internal state is to dispatch an action.
    // The actions can be serialized, logged or stored and later replayed.
    store.dispatch({ type: 'counter/incremented' })
    // {value: 1}
    store.dispatch({ type: 'counter/incremented' })
    // {value: 2}
    store.dispatch({ type: 'counter/decremented' })
    // {value: 1}
```

## React-Redux

It is used to bind redux with react.

```git
    npm install react-redux
```
