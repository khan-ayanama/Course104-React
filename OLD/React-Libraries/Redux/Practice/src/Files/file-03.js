import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Global Store
const store = createStore(reducer, applyMiddleware(logger.default));

// Reducer Function
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case "increment":
      return { amount: state.amount + 50 };
    case "decrement":
      return { amount: state.amount - 50 };
    case "incrementByAmount":
      return { amount: state.amount + action.payload };
    case "decrementByAmount":
      return { amount: state.amount - action.payload };
    default:
      return state;
  }
}

// Action Creators
function increment() {
  return { type: "increment" };
}
function decrement() {
  return { type: "decrement" };
}
function incrementByAmount(value) {
  return { type: "incrementByAmount", payload: value };
}
function decrementByAmount(value) {
  return { type: "incrementByAmount", payload: value };
}

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(22));
store.dispatch(decrementByAmount(15));
