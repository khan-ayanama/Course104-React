# Redux Toolkit

## Install Redux Toolkit and React-Redux

Add the Redux Toolkit and React-Redux packages to your project:

```bash
    npm install @reduxjs/toolkit react-redux
```

## Create a Redux Store

Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it

```js
    // app/store.js
    import { configureStore } from '@reduxjs/toolkit'

    export const store = configureStore({
    reducer: {},
    })
```

This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

## Provide the Redux Store to React

Once the store is created, we can make it available to our React components by putting a `React-Redux` `<Provider>` around our application in src/index.js. Import the Redux store we just created, put a `<Provider>` around your `<App>`, and pass the store as a prop

```js
    // index.js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    import App from './App'
    import { store } from './app/store'
    import { Provider } from 'react-redux'

    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    )
```

## Create a Redux State Slice

Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

```js
    // features/counter/counterSlice.js
    import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
    value: 0,
    }

    export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
        },
        decrement: (state) => {
        state.value -= 1
        },
        incrementByAmount: (state, action) => {
        state.value += action.payload
        },
    },
    })

    // Action creators are generated for each case reducer function
    export const { increment, decrement, incrementByAmount } = counterSlice.actions

    export default counterSlice.reducer
```

## Add Slice Reducers to the Store

Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

```js
    // app/store.js
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from '../features/counter/counterSlice'

    export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    })
```

## Use Redux State and Actions in React Components

Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a `<Counter>` component inside, then import that component into App.js and render it inside of `<App>`.

```js
    // feature/counter/Counter.js
    import React from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { decrement, increment } from './counterSlice'

    export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
            Increment
            </button>
            <span>{count}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            Decrement
            </button>
        </div>
        </div>
    )
    }
```
