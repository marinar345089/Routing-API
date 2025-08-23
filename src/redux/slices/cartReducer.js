import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isProduct = state.cartProducts.find(
        (el) => el.id == action.payload.id
      );
      if (isProduct) {
        state.cartProducts = state.cartProducts.map((el) => {
          if (el.id == action.payload.id) {
            el.count++;
          }
          return el;
        });
      } else {
        state.cartProducts.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (el) => el.id !== action.payload.id
      );
    },
    minusFromCart: (state, action) => {
      const minusProduct = state.cartProducts.find(
        (el) => el.id == action.payload.id
      );
      minusProduct.count--;
    },
  },
});
export const { addToCart, removeFromCart, minusFromCart } = cartSlice.actions;
export default cartSlice.reducer;
