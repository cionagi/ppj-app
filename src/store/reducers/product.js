import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINT, ROUTES } from '../../config/endpoints';
import { addPricesToProducts } from '../../utils/prices';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: [],
    isFetching: true,
  },
  reducers: {
    add: (state, action) => {
      state.list = [...action.payload];
      state.isFetching = false;
    },
  },
});

export const { add } = productSlice.actions;

export const addProducts = (products) => (dispatch) => {
  const pathProduct = `${ENDPOINT}/${ROUTES.GET_PRODUCTS}`;
  axios.get(pathProduct).then(function (response) {
    const { amiibo } = response.data;
    console.log(amiibo);

    dispatch(add(addPricesToProducts(amiibo)));
  });
};
export const productListState = (state) => state.product.list;
export const isFetchingState = (state) => state.product.isFetching;
export default productSlice.reducer;
