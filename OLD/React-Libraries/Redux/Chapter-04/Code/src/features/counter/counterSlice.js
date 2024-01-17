import { createSlice,createReducer, combineReducers, createAction } from "@reduxjs/toolkit";


const initialState = {
    value:0
}

const incrementBonus = createAction('reward/increment')
const decrementBonus = createAction('decrement')
const hello = createAction('decrement')

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value -=1
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementBonus,(state,action)=>{
            state.value++;
        })
        .addCase(decrementBonus,(state,action)=>{
            state.value--;
        })
    }
})


export const {increment,decrement} = counterSlice.actions

// export default counterSlice.reducer
export default counterSlice.reducer;