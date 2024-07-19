import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./product/productReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
