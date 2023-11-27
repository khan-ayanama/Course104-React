# Redux

* Redux is a `Pattern` and `Library`
* It is independent of Framework, it's not only bound with React
* Redux provides Global store and you can access it from anywhere in the App.
* You can change the state from anywhere

## Where to Use Redux

* `Big Application`
* `High frequency of State Changes`

## Redux Pattern

When use dispatch an `Action` it triggers the `Reducer Function` which changes the state of store.

* We can use Middleware between action and reducer.

## Basic structure of Redux

```js
    import { createStore } from 'redux'

    const history = []

    // Creating a Store which takes reducer as function
    const store = createStore(reducer)

    // Reducer Function
    function reducer(state={amount:1},action){
        if(action.type==='increment'){
            return{amount: state.amount+1}
        }
        return state;
    }


    // Subscribe a store (it will call whenever state of stores changes)
    // getState(): It gives the global state of store
    store.subscribe(()=>{
        history.push(store.getState())
        console.log(history)
    })


    // Changing the state in every 2 second
    setInterval(()=>{
        // Dispatching an action
        store.dispatch({type:'increment'})
    },2000)
```

`Note:` Do not change the state of store directly

## Middleware in Redux

```js
    import { createStore,applyMiddleware } from 'redux'
    import logger from 'redux-logger'

    const history = []

    // Creating a Store which takes reducer as function and second argument as middleware which will take an argument of middleware
    // /we will use the redux-logger middleware for the log of store
    // Generally you will get an error of middleware is not a function so write default after middleware
    const store = createStore(reducer,applyMiddleware(logger.default))

    // Reducer Function
    function reducer(state={amount:1},action){
        if(action.type==='increment'){
            return{amount: state.amount+1}
        }
        return state;
    }


    // Changing the state in every 2 second
    setInterval(()=>{
        // Dispatching an action
        store.dispatch({type:'increment'})
    },5000)
```

## Different Type of an Action in Store

```js
    // DIFFERRENT TYPES OF AN ACTION IN REDUCER FUNCTION OF STORE

    // USING MIDDLEWARE IN STORE

    import { createStore,applyMiddleware } from 'redux'
    import logger from 'redux-logger'

    const history = []

    const store = createStore(reducer,applyMiddleware(logger.default))

    // Reducer Function
    function reducer(state={amount:1},action){
        if(action.type==='increment'){
            return{amount: state.amount+1}
        }
        if(action.type==='decrement'){
            return{amount: state.amount - 1}
        }
        if(action.type==='incrementByAmount'){
            return{amount: state.amount + action.payload}
        }
        if(action.type==='decrementByAmount'){
            return{amount: state.amount - action.payload}
        }
        return state;
    }


    setInterval(()=>{
        // Dispatching an action
        store.dispatch({type:'increment'})
        store.dispatch({type:'decrement'})
        store.dispatch({type:'incrementByAmount',payload:5})
        store.dispatch({type:'decrementByAmount',payload:5})
    },1000)
```

### Optimizing Actions by Action Creator

```js
    // OPTIMIZING DIFFERENT TYPE OF ACTION BY CREATING ACTION CREATORS

    import { createStore,applyMiddleware } from 'redux'
    import logger from 'redux-logger'

    const history = []

    const store = createStore(reducer,applyMiddleware(logger.default))

    // Reducer Function
    function reducer(state={amount:1},action){
        if(action.type==='increment'){
            return{amount: state.amount+1}
        }
        if(action.type==='decrement'){
            return{amount: state.amount - 1}
        }
        if(action.type==='incrementByAmount'){
            return{amount: state.amount + action.payload}
        }
        if(action.type==='decrementByAmount'){
            return{amount: state.amount - action.payload}
        }
        return state;
    }

    // ACTION CREATORS

    function increment(){
        return {type:'increment'}
    }
    function decrement(){
        return {type:'decrement'}
    }
    function incrementByAmount(value){
        return {type:'incrementByAmount',payload:value}
    }

    function decrementByAmount(value){
        return {type:'decrementByAmount',payload:value}
    }


    setInterval(()=>{
        // Dispatching an action
        store.dispatch(increment())
        store.dispatch(decrement())
        store.dispatch(incrementByAmount(400))
        store.dispatch(decrementByAmount(200))
    },5000)
```
