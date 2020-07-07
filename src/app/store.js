import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/reducers/product';
import cartReducer from '../store/reducers/cart';

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
