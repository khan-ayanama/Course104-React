import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["products"],
      pollingInterval: 2000,
    }),
    getProduct: builder.query({
      query: (productId) => `product/${productId}`,
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products/add",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["products"],
    }),
    getUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useGetUsersQuery,
} = productApi;
