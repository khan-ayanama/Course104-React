# Redux Toolkit app structure

## Creating the Redux Store

```js
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from '../features/counter/counterSlice'

    export default configureStore({
    reducer: {
        counter: counterReducer
    }
    })
```

When we call configureStore, we can pass in all of the different reducers in an object. *The key names in the object will define the keys in our final state value*.

When we pass in an object like `{counter: counterReducer}`, that says that we want to have a state.counter section of our Redux state object, and that we want the counterReducer function to be in charge of deciding if and how to update the state.counter section whenever an action is dispatched.

`configureStore` automatically adds several middleware to the store setup by default to provide a good developer experience, and also sets up the store so that the Redux DevTools Extension can inspect its contents.

## Redux Slices

A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.

### Creating Slice Reducers and Actions

```js
    import { createSlice } from '@reduxjs/toolkit'

    export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
        },
        decrement: state => {
        state.value -= 1
        },
        incrementByAmount: (state, action) => {
        state.value += action.payload
        }
    }
    })

    export const { increment, decrement, incrementByAmount } = counterSlice.actions

    export default counterSlice.reducer
```

The string from the `name` option is used as the first part of each action type, and the key name of each reducer function is used as the second part. So, the "counter" name + the "increment" reducer function generated an action type of {type: "counter/increment"}.

`createSlice` needs us to pass in the initial state value for the reducers, so that there is a state the first time it gets called. In this case, we're providing an object with a value field that starts off at 0.

`createSlice` automatically generates action creators with the same names as the reducer functions we wrote. We can check that by calling one of them and seeing what it returns

```js
    console.log(counterSlice.actions.increment())
    // {type: "counter/increment"}

    // It also generates the slice reducer function that knows how to respond to all these action types:
    const newState = counterSlice.reducer(
    { value: 10 },
    counterSlice.actions.increment()
    )
    console.log(newState)
    // {value: 11}
```

### Writing Async Logic with Thunks

```js
    // the outside "thunk creator" function
    const fetchUserById = userId => {
    // the inside "thunk function"
    return async (dispatch, getState) => {
        try {
        // make an async call in the thunk
        const user = await userAPI.fetchById(userId)
        // dispatch an action when we get the response back
        dispatch(userLoaded(user))
        } catch (err) {
        // If something went wrong, handle it here
        }
    }
    }
```

### Reading Data with useSelector

```js
    const countPlusTwo = useSelector(state => state.counter.value + 2)
```

### Dispatching Actions with useDispatch

```js
    <button
    className={styles.button}
    aria-label="Increment value"
    onClick={() => dispatch(increment())}
    >
    +
    </button>
```

### Providing the Store

```js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App'
    import store from './app/store'
    import { Provider } from 'react-redux'

    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    )
```

## Summary

`SUMMARY`

* We can create a Redux store using the Redux Toolkit configureStore API
  * configureStore accepts a reducer function as a named argument
  * configureStore automatically sets up the store with good default settings
* Redux logic is typically organized into files called "slices"
  * A "slice" contains the reducer logic and actions related to a specific feature / section of the Redux state
  * Redux Toolkit's createSlice API generates action creators and action types for each individual reducer function you provide
* Redux reducers must follow specific rules
  * Should only calculate a new state value based on the state and action arguments
  * Must make immutable updates by copying the existing state
  * Cannot contain any asynchronous logic or other "side effects"
  * Redux Toolkit's createSlice API uses Immer to allow "mutating" immutable updates
* Async logic is typically written in special functions called "thunks"
  * Thunks receive dispatch and getState as arguments
  * Redux Toolkit enables the redux-thunk middleware by default
* React-Redux allows React components to interact with a Redux store
  * Wrapping the app with `<Provider store={store}>` enables all components to use the store
  * Global state should go in the Redux store, local state should stay in React components.
