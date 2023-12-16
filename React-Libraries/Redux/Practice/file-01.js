import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from 'redux-logger'

const reducer = (state={amount:100},action) => {
    // console.log("STATE",state)
    if(action.type=='increment'){
        return {amount: state.amount + 50}
    }
    return state;
}

const store = createStore(reducer,applyMiddleware(logger.default))


store.dispatch({type:'in2crement'})
// console.log(store.getState())
store.dispatch({type:'increment'})
// console.log(store.getState())
store.dispatch({type:'increment'})
// console.log(store.getState())
