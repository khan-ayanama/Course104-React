// Using Redux Thunk

import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'

const history = []

const store = createStore(reducer,applyMiddleware(logger.default,thunk.default))

// Reducer Function
function reducer(state={amount:1},action){
    switch(action.type){
        case 'init-user':
            return {amount: action.payload}
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

function getUser(id){
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch(initUser(data.amount))
    }
}

function initUser(value){
    return {type:'init-user',payload:value}
}

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
store.dispatch(getUser(1))
