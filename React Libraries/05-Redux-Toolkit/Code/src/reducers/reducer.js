import { combineReducers } from "redux";
import { counterReducer } from "./countReducer.js";
import { todoReducer } from "./todoReducer.js";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});

export default rootReducer;
