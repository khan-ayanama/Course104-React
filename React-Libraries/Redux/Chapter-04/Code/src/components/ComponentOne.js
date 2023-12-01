import {  useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "../features/counter/counterSlice";

const ComponentOne = () => {
    const count = useSelector(state=>state.counter.value)
    const reset = useSelector(state=>state.counter.reset)
    const test = useSelector(state=>state)
    console.log(test)
    const dispatch = useDispatch()
  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <div>Total Count:{count}</div>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button onClick={()=>dispatch(reset())}>RESET</button>
        </div>
      </div>
    </>
  );
};

export default ComponentOne;
