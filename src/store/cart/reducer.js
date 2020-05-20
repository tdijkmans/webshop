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

        let newCartState = [
          ...state.inCart.filter(
            (product) => product.productId !== action.payload.productId
          ),
        ];
        if (newCartState.length !== 0)
          return {
            nothingInCart: false,
            inCart: newCartState.concat({
              productId: action.payload.productId,
              amount: newAmount,
            }),
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
    case "PLUS_ONE": {
      let newAmount =
        state.inCart.find((product) => product.productId === action.payload)
          .amount + 1;

      let newCartState = [
        ...state.inCart.filter(
          (product) => product.productId !== action.payload
        ),
      ];
      if (newCartState.length !== 0)
        return {
          nothingInCart: false,
          inCart: newCartState.concat({
            productId: action.payload,
            amount: newAmount,
          }),
        };
      else
        return {
          nothingInCart: false,
          inCart: [{ productId: action.payload, amount: newAmount }],
        };
    }
    case "MINUS_ONE": {
      let newAmount =
        state.inCart.find((product) => product.productId === action.payload)
          .amount - 1;

      let newCartState = [
        ...state.inCart.filter(
          (product) => product.productId !== action.payload
        ),
      ];
      if (newAmount <= 0 && newCartState.length !== 0)
        return {
          nothingInCart: false,
          inCart: newCartState,
        };
      if (newAmount <= 0 && newCartState.length === 0)
        return { nothingInCart: true, inCart: [] };
      if (newAmount >= 0 && newCartState.length !== 0)
        return {
          nothingInCart: false,
          inCart: newCartState.concat({
            productId: action.payload,
            amount: newAmount,
          }),
        };
      else
        return {
          nothingInCart: false,
          inCart: [{ productId: action.payload, amount: newAmount }],
        };
    }
    default: {
      return state;
    }
  }
}
