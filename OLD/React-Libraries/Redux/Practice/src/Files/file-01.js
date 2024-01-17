import { createStore } from "redux";

const storeHistory = [];

const store = createStore(reducer);

function reducer(state = { amount: 1 }, action) {
  if (action.type == "increment") {
    return { amount: state.amount + 50 };
  }
  if (action.type == "decrement") {
    return { amount: state.amount - 50 };
  }

  return state;
}

store.subscribe(() => {
  storeHistory.push(store.getState());
  console.log(storeHistory);
});

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
