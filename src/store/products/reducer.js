const initialState = { loading: true, products: [] };

export default function flowersSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "LOAD_COMPLETE": {
      return { loading: false, products: action.payload };
    }
    default: {
      return state;
    }
  }
}
