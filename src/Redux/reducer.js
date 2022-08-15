import { combineReducers } from "redux";
import { ADD_TO_CART, DECREMENT_CART, INCREMENT_CART } from "./actionTypes";

const initialProducts = [
  { name: "Asus Vivobook X515MA ", quantity: 20, price: 35000 },
  { name: "Dell E1916HV 18.5 Inch ", quantity: 35, price: 9300 },
  { name: "Canon Eos 4000D 18MP ", quantity: 72, price: 36500 },
];

const productReducer = (products = initialProducts, action) => {
  return products;
};

const cartReducer = (items = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exist = items.some((item) => item.name === action.payload.name);
      if (exist) {
        return items.map((item) => {
          if (
            item.name === action.payload.name &&
            item.quantity < action.payload.quantity
          ) {
            return { ...item, quantity: (item.quantity += 1) };
          } else {
            return item;
          }
        });
      } else {
        return [...items, { ...action.payload, quantity: 1 }];
      }
    case INCREMENT_CART:
      return items.map((item) => {
        if (item.name === action.payload) {
          return { ...item, quantity: (item.quantity += 1) };
        } else {
          return item;
        }
      });
    case DECREMENT_CART:
      return items.map((item) => {
        if (item.name === action.payload && item.quantity > 0) {
          return { ...item, quantity: (item.quantity -= 1) };
        } else {
          return item;
        }
      });
    default:
      return items;
  }
};

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default reducer;
