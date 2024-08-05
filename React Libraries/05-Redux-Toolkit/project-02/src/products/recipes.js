// features/users/usersSlice.js
import { createSelector } from "@reduxjs/toolkit";
import { productApi } from "./productApi";

export const extendedApiSlice = productApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => "/recipes",
    }),
  }),
});

// export const { useGetRecipesQuery } = extendedApiSlice;

export const selectRecipesResult =
  extendedApiSlice.endpoints.getRecipes.select();

const emptyRecipe = [];

export const selectAllRecipes = createSelector(
  selectRecipesResult,
  (recipes) => recipes?.data?.recipes ?? emptyRecipe
);
