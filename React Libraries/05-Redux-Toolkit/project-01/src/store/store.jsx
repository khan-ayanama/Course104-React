import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { productApiSlice } from "../products/productSlice";

const store = configureStore({
  reducer: {
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApiSlice.middleware),
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

// Manually dispatching an action
const prData = store.dispatch(productApiSlice.endpoints.getProducts.initiate());
console.log(prData);
