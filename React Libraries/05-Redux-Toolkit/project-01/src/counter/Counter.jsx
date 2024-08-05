import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  fetchProducts,
  increment,
  incrementByAmount,
} from "./counterSlice";
import { useEffect } from "react";

const getProducts = (state) => state.counter.products;

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const products = useSelector(getProducts);
  console.log(products);
  const dispatch = useDispatch();
  console.log(count);

  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increase: 10
      </button>
      <button onClick={() => dispatch(decrementByAmount(10))}>
        Decrease: 7
      </button>
      {/* <button onClick={() => dispatch(fetchProducts())}>Fetch Products</button> */}
    </>
  );
}
