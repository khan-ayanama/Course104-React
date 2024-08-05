// features/users/usersSlice.js
import { createSelector } from "@reduxjs/toolkit";
import { productApi } from "../products/productApi";

// Selector to get the result of the getUsers query from the RTK Query cache
export const selectUsersResult = productApi.endpoints.getUsers.select();

// An empty array to use as a fallback in case there are no users
const emptyUsers = [];

// Selector to get all users from the cache
export const selectAllUsers = createSelector(
  selectUsersResult,
  (usersResult) => usersResult?.data?.users ?? emptyUsers
);

// Selector to get a user by ID from the cache
export const selectUserById = createSelector(
  selectAllUsers,
  (state, userId) => userId,
  (users, userId) => users.find((user) => user.id === userId)
);
