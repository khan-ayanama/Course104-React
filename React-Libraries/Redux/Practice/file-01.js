import { createStore } from "redux";

const reducer = (state={amount:100},action) => {
    // console.log("STATE",state)
    if(action.type=='increment'){
        return {amount: state.amount + 50}
    }
    return state;
}

const store = createStore(reducer)


store.dispatch({type:'in2crement'})
console.log(store.getState())
store.dispatch({type:'increment'})
console.log(store.getState())
store.dispatch({type:'increment'})
console.log(store.getState())
