import axios from 'axios'
import {
  ADD_PRODUCT,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productType";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await axios.get("https://dummyjson.com/products");
      dispatch(fetchProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

