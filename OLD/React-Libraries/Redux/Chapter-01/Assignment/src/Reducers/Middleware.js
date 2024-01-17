import axios from "axios"
import { Initialize } from "./actionCreators.js"

const getUser = (id) => {
    return (disptach,getState)=>{
        disptach({type:'FETCHING'})
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                                .then(response => disptach(Initialize(response.data)))
                                .catch(error=>{
                                    disptach({type:'FETCH_ERROR',payload:error.message})
                                })
    }
}

export default getUser;


// axios.get('https://api.example.com/data')
//             .then(response => {
//                 dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
//             })
//             .catch(error => {
//                 dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
//             });