import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "posts/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  }
);

const productsAdapter = createEntityAdapter({
  //   sortComparer: (a, b) => b.id - a.id,
});

const initialState = productsAdapter.getInitialState({
  count: 0,
  status: "idle",
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 5;
    },
    decrement: (state) => {
      state.count -= 5;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      productsAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
