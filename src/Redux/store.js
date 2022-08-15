import { applyMiddleware, createStore } from "redux";
import { INCREMENT_CART } from "./actionTypes";
import reducer from "./reducer";

const validation = (store) => (next) => (action) => {
  const { products, cart } = store.getState();

  switch (action.type) {
    case INCREMENT_CART:
      let productQuantity;
      let cartQuantity;
      products.forEach((product) => {
        if (product.name === action.payload) {
          productQuantity = product.quantity;
        }
      });

      if (productQuantity) {
        cart.forEach((item) => {
          if (item.name === action.payload) {
            cartQuantity = item.quantity;
          }
        });
      }
      if (productQuantity > cartQuantity) {
        return next(action);
      } else {
        console.log("maximum stock reached");
      }
      break;

    default:
      return next(action);
  }
};

const store = createStore(reducer, applyMiddleware(validation));

export default store;
