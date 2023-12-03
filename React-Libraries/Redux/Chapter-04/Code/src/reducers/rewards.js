import { createAction,createReducer } from "@reduxjs/toolkit";

const initialState = {
    reward:11
}

export const increment = createAction('reward/increment')
export const decrement = createAction('decrement')

const rewardReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(increment,(state,action)=>{
            console.log("STATE",state)
            state.reward+=1;
        })
        .addCase(decrement,(state,action)=>{
            state.reward--;
        })
})

export default rewardReducer;