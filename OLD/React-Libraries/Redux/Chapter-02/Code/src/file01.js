// OPTIMIZING DIFFERENT TYPE OF ACTION BY CREATING ACTION CREATORS

import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'

const history = []

const store = createStore(reducer,applyMiddleware(logger.default))

// Reducer Function
function reducer(state={amount:1},action){
    switch(action.type){
        case 'init-user':
            return {amount: state.amount}
        case 'increment':
            return{amount: state.amount+1}
        case 'decrement':
            return{amount: state.amount-1}
        case 'incrementByAmount':
            return{amount: state.amount+action.payload}
        case 'decrementByAmount':
            return{amount: state.amount-action.payload}
        default:
            return state;
    }
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



// Dispatching an action
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incrementByAmount(400))
store.dispatch(decrementByAmount(200))
