/* eslint-disable array-callback-return */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  isLoading: false,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});
// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearChart: (state) => {
      // state.cartItems = [];
      return { cartItems: [] };
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseAmount: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
        }
      });
    },
    decreaseAmount: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.amount -= 1;
        }
        if (item.amount <= 0) {
          item.amount = 1;
        }
      });
    },
    // increaseAmount: (state, { payload }) => {
    //   const cartItem = state.cartItems.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount + 1;
    // },
    // decreaseAmount: (state, { payload }) => {
    //   const cartItem = state.cartItems.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount - 1;
    // },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      console.log(action);
      state.cartItems = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;
export const {
  clearChart,
  deleteItem,
  increaseAmount,
  decreaseAmount,
  calculateTotals,
} = cartSlice.actions;
