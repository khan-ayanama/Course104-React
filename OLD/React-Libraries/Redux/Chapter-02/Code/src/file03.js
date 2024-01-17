// getState in Redux

// OPTIMIZING DIFFERENT TYPE OF ACTION BY CREATING ACTION CREATORS

import { createStore,applyMiddleware,combineReducers } from 'redux'
import logger from 'redux-logger'

const history = []

const rootReducers = combineReducers({
    amount:amountReducer,
    bonus:bonusReducer
})

const store = createStore(rootReducers,applyMiddleware(logger.default))

// Reducer Function
function amountReducer(state={amount:1},action){
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

function bonusReducer(state={bonus:0},action){
    if(action.type=='increase'){
        return{bonus:state.bonus+5}
    }else if(action.type=='decrease'){
        return{bonus:state.bonus+5}
    }else{
        return state;
    }
}


// Combine Reducer



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



// // Dispatching an action
// console.log('FIRST:01-->',store.getState())
store.dispatch(increment())
// console.log('TWO:02-->',store.getState())
console.log('bonus',store.dispatch({type:'increase'}))

// store.dispatch(decrement())
// console.log('THREE:03-->',store.getState())

// store.dispatch(incrementByAmount(400))
// store.dispatch(decrementByAmount(200))
