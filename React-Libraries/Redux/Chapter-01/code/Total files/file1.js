// CREATING A STORE

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
store.subscribe(()=>{
    history.push(store.getState())
    console.log(history)
})


// Changing the state in every 2 second
setInterval(()=>{
    // Dispatchin an action
    store.dispatch({type:'increment'})
},2000)