const initialState = { nothingInCart: true, inCart: [] };

export default function cartSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        nothingInCart: false,
        inCart: [...state.inCart, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
