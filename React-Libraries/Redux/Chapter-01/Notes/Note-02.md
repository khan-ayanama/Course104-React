# Chapter-01: Assignments

## Assignment-1

Using the concepts learnt in this chapter. Make a Async type of call from a new reducer to any online API like JSON Placeholder `Posts`. Also show proper loading messages in console. Like - `loading posts...`, `posts loaded` , `posts fetching failed.` Also add those posts to a state of reducer in a sorted manner (sort by title)

```js
    // Main file
    import {applyMiddleware, createStore} from'redux'
    import logger from'redux-logger'
    import thunk from 'redux-thunk'

    import { Increment,Decrement,IncrementByAmount } from "./Reducers/actionCreators.js";
    import getUser from './Reducers/Middleware.js';
    import Reducers from './Reducers/reducers.js';

    const store = createStore(Reducers,applyMiddleware(logger.default,thunk.default))

    // store.dispatch(Increment())
    store.dispatch(getUser(1))


    // REDUCERS
    // reducers.js 
    const Reducers = (state={amount:50,name:'Undefined'},action) => {
        switch(action.type){
            case 'INITIALIZE_SUCCESS':
                return {name:action.payload}
            case 'FETCHING':
                console.log('Loading...')
                return state;
            case 'FETCH_ERROR':
                console.log("ERROR MESSAGE")
                return state;
            case 'increment':
                return {amount:state.amount+50};
            case 'decrement':
                return {amount:state.amount-1};
            case 'incrementByAmount':
                return {amount:state.amount+action.payload};
            default:
                return state;
        }
    }

    export default Reducers;


    // ACTION CREATORS
    // actionCreator.js

    const Increment = () => {
        return {type:'increment'}
    }
    const Decrement = () => {
        return {type:'decrement'}
    }
    const IncrementByAmount = (value) => {
        return {type:'incrementByAmount',payload:value}
    }
    const Initialize = ({title}) => {
        return {type:'INITIALIZE_SUCCESS',payload:title.slice(0,8)}
    }

    export {Increment,Decrement,IncrementByAmount,Initialize};

    
    // THUNK-MIDDLEWARE FUNCTION
    import axios from "axios"
    import { Initialize } from "./actionCreators.js"

    const getUser = (id) => {
        return (disptach,getState)=>{
            disptach({type:'FETCHING'})
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                                    .then(response => disptach(Initialize(response.data)))
                                    .catch(error=>{
                                        disptach({type:'FETCH_ERROR',payload:error.message})
                                    })
        }
    }

    export default getUser;
```

## Assignment 2

Check out IMMER library and run some example and see how you can make mutating updates like `state.amount++` inside reducer logic. And still it work perfectly in redux.

```js
    // WITH IMMER LIBRARY
    import produce from 'immer';

    const Reducers = (state = { amount: 50, name: 'Undefined' }, action) => {
        switch (action.type) {
            case 'INITIALIZE_SUCCESS':
                return produce(state, (draftState) => {
                    draftState.name = action.payload;
                });
            case 'FETCHING':
                console.log('Loading...');
                return state;
            case 'FETCH_ERROR':
                console.log('ERROR MESSAGE');
                return state;
            case 'increment':
                return produce(state, (draftState) => {
                    draftState.amount += 50;
                });
            case 'decrement':
                return produce(state, (draftState) => {
                    draftState.amount -= 1;
                });
            case 'incrementByAmount':
                return produce(state, (draftState) => {
                    draftState.amount += action.payload;
                });
            default:
                return state;
        }
    };

    export default Reducers;
```
