// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // An array to hold cart items: { id, title, price, quantity, thumbnail }
  },
  // Reducers define how the state can be changed
  reducers: {
    // Action to add an item to the cart or increase its quantity
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find(item => item.id === itemToAdd.id);

      if (existingItem) {
        // If the item already exists, just increase its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item to the cart with a quantity of 1
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },
    // Action to completely remove an item from the cart
    removeItem: (state, action) => {
      const idToRemove = action.payload.id;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    // Action to increase an item's quantity by one
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    // Action to decrease an item's quantity by one
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      // If quantity is more than 1, decrease it. Otherwise, remove the item.
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload.id);
      }
    },
  },
});

// Export the actions to be used in components (e.g., dispatch(addItem({...})))
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// Create and export "selectors" to easily get data from the state in components
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

// Export the reducer to be included in the main store
export default cartSlice.reducer;