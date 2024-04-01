import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/reducer.js";

const returnHello = (storeAPI) => (next) => (action) => {
  setInterval(() => {
    console.log("insie middlewar");
  }, 1000);

  return next(action);
};

const middlewareEnhancer = applyMiddleware(returnHello);
const store = createStore(rootReducer, middlewareEnhancer);

store.subscribe(() => {
  console.log("After change: ", store.getState());
});

const dispatchResult = store.dispatch({ type: "todo/incremented" });
console.log(dispatchResult);
