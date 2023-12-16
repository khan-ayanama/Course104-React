import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import {thunk}  from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";

// Creating Store
const store = createStore(
  reducers,
  applyMiddleware(logger.default,thunk)
);

// Creating Reducers
function reducers(state = { amount: 50, name: "Undefined" }, action) {
  switch (action.type) {
    case "INITIALIZE_SUCCESS":
      return { name: action.payload };
    case "FETCHING":
      console.log("Loading...");
      return state;
    case "FETCH_ERROR":
      console.log("ERROR MESSAGE");
      return state;
    case "increment":
      return { amount: state.amount + 50 };
    case "decrement":
      return { amount: state.amount - 1 };
    case "incrementByAmount":
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// Action Creators
const Increment = () => {
  return { type: "increment" };
};
const Decrement = () => {
  return { type: "decrement" };
};
const IncrementByAmount = (value) => {
  return { type: "incrementByAmount", payload: value };
};
function Initialize({ title }) {
  return { type: "INITIALIZE_SUCCESS", payload: title.slice(0, 8) };
};

function getUser(id){
  return (disptach, getState) => {
    disptach({ type: "FETCHING" });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => disptach(Initialize(response.data)))
      .catch((error) => {
        disptach({ type: "FETCH_ERROR", payload: error.message });
      });
  };
};

store.dispatch(getUser(1))