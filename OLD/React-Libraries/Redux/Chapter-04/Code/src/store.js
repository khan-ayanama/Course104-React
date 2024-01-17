import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import rewardReducer from './reducers/rewards';

const store = configureStore({
    reducer:{
        counter:counterReducer,
        rewards:rewardReducer,
    }
})

export default store;