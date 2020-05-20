import { combineReducers } from "redux";
import flowersSliceReducer from "./products/reducer";
import cartSliceReducer from "./cart/reducer";
import flowerSliceReducer from "./product/reducer";

const reducer = combineReducers({
  flowers: flowersSliceReducer,
  flower: flowerSliceReducer,
  cart: cartSliceReducer,
});

export default reducer;
