import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from "./cartTypes";

export const addProduct1 = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
export const removeProduct1 = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
  };
};
export const clearCart1 = () => {
  return {
    type: CLEAR_CART,
  };
};
