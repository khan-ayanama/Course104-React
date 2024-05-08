# RTK Query Advance

If we call same data from two components then in the second component API will not fetch data from server instead it will use the data cached from the first call of an api.

- If the data is not used in any component it will expire in 60s by default.
- Once component unmount the expire timer will start right away if no new subscription of same data.

`keepUnusedDataFor` to set the expire time of cache data

## Invalidating specific items

When we want to have more control on invalidation we use an object instead of single string for the whole list of item.

- Let's say we only want to refetch data for the specific product so then why refetch all data.

```js
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id })),
      ],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
  }),
});
```

## Managing Users Data

Each endpoint object contains

- query/mutation hook
- set of query hooks ex: "lazy queries"
- initiate thunk to trigger a request for the endpoint
- select function to creates memoized selectors

### Working with RTK query manually

`productSlice` object contains several field:-

1. `endpoints`: It consist of all endpoints defined in API.
   You can manually initialiaze the user call outside of the react component

```js
store.dispatch(apiSlice.endpoints.getUsers.initiate());
```
