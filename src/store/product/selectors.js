export const selectFlower = (state) => {
  return state.flower.product;
};

export const selectLoadStatus = (state) => {
  return state.flower.loading;
};
