import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
    emptyCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, emptyCart } = cartSlice.actions;

export const cartState = (state) => state.cart;
export default cartSlice.reducer;
