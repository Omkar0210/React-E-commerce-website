// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    // The 'cart' slice of the state is managed by cartReducer
    cart: cartReducer,
  },
});