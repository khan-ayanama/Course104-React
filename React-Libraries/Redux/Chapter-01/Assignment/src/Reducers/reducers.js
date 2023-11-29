import {produce} from 'immer'

// WITHOUT IMMER LIBRARY
// const Reducers = (state={amount:50,name:'Undefined'},action) => {
//     switch(action.type){
//         case 'INITIALIZE_SUCCESS':
//             return {name:action.payload}
//         case 'FETCHING':
//             console.log('Loading...')
//             return state;
//         case 'FETCH_ERROR':
//             console.log("ERROR MESSAGE")
//             return state;
//         case 'increment':
//             return {amount:state.amount+50};
//         case 'decrement':
//             return {amount:state.amount-1};
//         case 'incrementByAmount':
//             return {amount:state.amount+action.payload};
//         default:
//             return state;
//     }
// }


// WITH IMMER LIBRARY
import produce from 'immer';

const Reducers = (state = { amount: 50, name: 'Undefined' }, action) => {
    switch (action.type) {
        case 'INITIALIZE_SUCCESS':
            return produce(state, (draftState) => {
                draftState.name = action.payload;
            });
        case 'FETCHING':
            console.log('Loading...');
            return state;
        case 'FETCH_ERROR':
            console.log('ERROR MESSAGE');
            return state;
        case 'increment':
            return produce(state, (draftState) => {
                draftState.amount += 50;
            });
        case 'decrement':
            return produce(state, (draftState) => {
                draftState.amount -= 1;
            });
        case 'incrementByAmount':
            return produce(state, (draftState) => {
                draftState.amount += action.payload;
            });
        default:
            return state;
    }
};



export default Reducers;