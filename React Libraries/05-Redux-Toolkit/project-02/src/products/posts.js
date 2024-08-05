// features/users/usersSlice.js
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { productApi } from "./productApi";

// Create an entity adapter for posts
const postsAdapter = createEntityAdapter();

// Get the initial state from the adapter
const initialState = postsAdapter.getInitialState();

// Inject the getPosts endpoint and transform the response
export const extendedApiSlice = productApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (responseData) => {
        return postsAdapter.setAll(initialState, responseData.posts);
      },
    }),
  }),
});

export const { useGetPostsQuery } = extendedApiSlice;

// Select the query result object for a query with those parameters
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// Extract the posts data from the query result
const selectPostsData = createSelector(
  selectPostsResult,
  (postsResult) => postsResult.data
);

// Generate normalized selectors
export const { selectAll: selectAllPosts, selectById: selectPostById } =
  postsAdapter.getSelectors((state) => selectPostsData(state) ?? initialState);
