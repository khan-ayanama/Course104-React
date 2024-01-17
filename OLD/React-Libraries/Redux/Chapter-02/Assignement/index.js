import { log } from 'console'
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(logger.default,thunk.default))

function reducers(state={amount:1,name:'Initial'},action){
    if(action.type=='init-user'){
        return {name:action.payload}
    }else if(action.type=='increment'){
        return {amount:state.amount + 1}
    }else{
        return state;
    }
}

// Action Creator
function incrementAmount(){
    return {type:'increment'}
}

function getUser(id){
    return (dispatch,getState) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            // Handle the successful response here
            dispatch(initUser(response.data))
            console.log(response.data);
        })
        .catch(error => {
            // Handle errors here
            console.error('Error fetching data:', error);
        })
    }
}

function initUser(value){
    return {type:'init-user',payload:value}
}

// store.dispatch(incrementAmount())
store.dispatch(getUser(1))