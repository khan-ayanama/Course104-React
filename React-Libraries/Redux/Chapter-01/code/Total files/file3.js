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