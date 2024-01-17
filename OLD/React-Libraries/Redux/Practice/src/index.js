import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";

// Global Store
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

// Reducer Function
function reducer(state = { amount: 1, name: undefined }, action) {
  switch (action.type) {
    case "increment":
      return { amount: state.amount + 50 };
    case "decrement":
      return { amount: state.amount - 50 };
    case "incrementByAmount":
      return { amount: state.amount + action.payload };
    case "decrementByAmount":
      return { amount: state.amount - action.payload };
    case "INITIALIZE_SUCCESS":
      return { name: action.payload };
    case "FETCHING":
      console.log("Loading...");
      return state;
    case "FETCH_ERROR":
      console.log("ERROR MESSAGE");
      return state;
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
function initializeApp({ title }) {
  return { type: "INITIALIZE_SUCCESS", payload: title.slice(0, 8) };
}

const getUser = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCHING" });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => dispatch(initializeApp(response.data)))
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  };
};

store.dispatch(getUser(2));
store.dispatch(increment());
store.dispatch(decrement());
