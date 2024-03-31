import { createStore } from "redux";

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// State of a Store
const state = store.getState();
console.log("State:", state);

// Whenever state changes
store.subscribe(() => {
  console.log("New State: ", store.getState());
});

store.dispatch({ type: "counter/incremented" });
store.dispatch({ type: "counter/decremented" });
