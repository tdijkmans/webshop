const initialState = { loading: true, product: {} };

export default function flowerSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING_FLOWER": {
      return { ...state, loading: action.payload };
    }
    case "LOAD_FLOWER_COMPLETE": {
      return { loading: false, product: action.payload };
    }
    default: {
      return state;
    }
  }
}
