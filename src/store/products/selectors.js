export const selectFlowers = (state) => {
  return state.flowers.products;
};

export const selectFlowerById = (id) => (state) => {
  return state.flowers.products.find(
    (flower) => parseInt(flower.id) === parseInt(id)
  );
};

export const selectFlowersLowHighPrice = (state) => {
  function flowersLowHigh(a, b) {
    return a.price - b.price;
  }
  return state.flowers.products.sort(flowersLowHigh);
};

export const selectFlowersHighLowPrice = (state) => {
  function flowersHighLow(a, b) {
    return b.price - a.price;
  }
  return state.flowers.products.sort(flowersHighLow);
};

export const selectFlowersLowHighPop = (state) => {
  function flowersLowHigh(a, b) {
    return a.sold - b.sold;
  }
  return state.flowers.products.sort(flowersLowHigh);
};

export const selectFlowersHighLowPop = (state) => {
  function flowersHighLow(a, b) {
    return b.sold - a.sold;
  }
  return state.flowers.products.sort(flowersHighLow);
};

export const selectLoadStatus = (state) => {
  return state.flowers.loading;
};
