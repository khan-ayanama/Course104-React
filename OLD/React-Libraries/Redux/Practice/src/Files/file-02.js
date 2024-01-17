import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger.default));

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

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "incrementByAmount", payload: 101 });
store.dispatch({ type: "decrementByAmount", payload: 11 });
