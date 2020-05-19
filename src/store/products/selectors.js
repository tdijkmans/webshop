export const selectFlowers = (state) => {
  return state.flowers.products;
};

export const selectFlowerById = (id) => (state) => {
  return state.flowers.products.find(
    (flower) => parseInt(flower.id) === parseInt(id)
  );
};
