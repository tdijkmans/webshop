import { combineReducers } from "redux";
import flowersSliceReducer from "./products/reducer";
import cartSliceReducer from "./cart/reducer";

const reducer = combineReducers({
  flowers: flowersSliceReducer,
  cart: cartSliceReducer,
});

export default reducer;
