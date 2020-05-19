import { combineReducers } from "redux";
import flowersSliceReducer from "./user/reducer";
import cartSliceReducer from "./resources/reducer";

const reducer = combineReducers({
  flowers: flowersSliceReducer,
  cart: cartSliceReducer,
});

export default reducer;
