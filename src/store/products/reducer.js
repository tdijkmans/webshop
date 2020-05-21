const initialState = {
  loading: true,
  products: [],
  sortOrder: "Ascending Price",
};

export default function flowersSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "LOAD_COMPLETE": {
      return { ...state, loading: false, products: action.payload };
    }

    case "SET_PRODUCTS_SORT": {
      return { ...state, sortOrder: action.payload };
    }

    default: {
      return state;
    }
  }
}
