import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApiSlice = createApi({
  reducerPath: "products/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

console.log(productApiSlice);
export const { useGetProductsQuery } = productApiSlice;
