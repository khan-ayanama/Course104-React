import { createStore } from "redux";
import rootReducer from "./reducers/countReducer.js";

const store = createStore(rootReducer);
export default store;
