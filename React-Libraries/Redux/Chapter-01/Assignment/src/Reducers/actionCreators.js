import { title } from "process"

const Increment = () => {
    return {type:'increment'}
}
const Decrement = () => {
    return {type:'decrement'}
}
const IncrementByAmount = (value) => {
    return {type:'incrementByAmount',payload:value}
}
const Initialize = ({title}) => {
    return {type:'INITIALIZE_SUCCESS',payload:title.slice(0,8)}
}

export {Increment,Decrement,IncrementByAmount,Initialize};