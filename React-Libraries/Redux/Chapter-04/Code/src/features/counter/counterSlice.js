import { createSlice,createReducer, combineReducers } from "@reduxjs/toolkit";


const initialState = {
    value:0
}

const additionalReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase('reset',(state)=>{
            state.value=0;
        })
        .addCase('incrementByAmount',(state,action)=>{
            state.value += action.payload
        })
        .addDefaultCase(state=>state||initialState)
})

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
        additionalReducer
        // incrementByAmount:(state,payload)=>{
        //     state.value=action.payload
        // }
    }
})



// const combinedReducer = counterSlice.reducer;

// const finalReducer = (state,action)=>{
//     combinedReducer(state,action);
//     additionalReducer(state,action)
// }

const rootReducer = combineReducers({
    counter:counterSlice.reducer,
    additional: additionalReducer
})

// console.log(rootReducer.state)

// counterSlice.reducer = finalReducer;

// export const {increment,decrement,incrementByAmount} = counterSlice.actions
export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions

// export default counterSlice.reducer
export default rootReducer;