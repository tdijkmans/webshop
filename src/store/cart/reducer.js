const initialState = { nothingInCart: true, inCart: [] };

export default function cartSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (
        state.inCart.find(
          (product) => product.productId === action.payload.productId
        )
      ) {
        let newAmount =
          action.payload.amount +
          state.inCart.find(
            (product) => product.productId === action.payload.productId
          ).amount;
        console.log(`got a newamount:`, newAmount);

        let newCartState = [
          ...state.inCart.filter(
            (product) => product.productId !== action.payload.productId
          ),
        ];
        if (newCartState.length !== 0)
          return {
            nothingInCart: false,
            inCart: [
              newCartState,
              { productId: action.payload.productId, amount: newAmount },
            ],
          };
        else
          return {
            nothingInCart: false,
            inCart: [
              { productId: action.payload.productId, amount: newAmount },
            ],
          };
      } else
        return {
          nothingInCart: false,
          inCart: [...state.inCart, action.payload],
        };
    }
    case "EMPTY_CART": {
      return { nothingInCart: true, inCart: [] };
    }
    default: {
      return state;
    }
  }
}
