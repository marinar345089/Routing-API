import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsReducer";
import cartReducer from "./slices/cartReducer";
import filterReducer from "./slices/filterReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
});
