import { ADD_TO_CART, DECREMENT_CART, INCREMENT_CART } from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const incrementCart = (productName) => {
  return {
    type: INCREMENT_CART,
    payload: productName,
  };
};
export const decrementCart = (productName) => {
  return {
    type: DECREMENT_CART,
    payload: productName,
  };
};
