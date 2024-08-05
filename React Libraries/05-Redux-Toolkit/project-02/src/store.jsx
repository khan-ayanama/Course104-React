import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { productApi } from "./products/productApi";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

console.log(productApi);
store.dispatch(productApi.endpoints.getUsers.initiate());
// store.dispatch(productApi.endpoints.getRecipes.initiate());
store.dispatch(productApi.endpoints.getPosts.initiate());
