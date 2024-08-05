import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterSlice from "./counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
