// USING MIDDLEWARE IN STORE

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