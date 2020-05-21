export const selectLoadStatus = (state) => {
  return state.flowers.loading;
};

export const selectSortOrder = (state) => {
  return state.flowers.sortOrder;
};

export const selectFlowers = (state) => {
  const sortOrder = state.flowers.sortOrder;
  switch (sortOrder) {
    case "Ascending Price":
      return state.flowers.products.sort((a, b) => {
        return a.price - b.price;
      });
    case "Descending Price":
      return state.flowers.products.sort((a, b) => {
        return b.price - a.price;
      });
    case "Ascending Popularity":
      return state.flowers.products.sort((a, b) => {
        return a.sold - b.sold;
      });
    case "Descending Popularity":
      return state.flowers.products.sort((a, b) => {
        return b.sold - a.sold;
      });
    default:
      return state.flowers.products;
  }
};

export const selectFlowerById = (id) => (state) => {
  return state.flowers.products.find(
    (flower) => parseInt(flower.id) === parseInt(id)
  );
};

export const selectFlowersTags = (state) => {
  let tags = [];
  state.flowers.products.map((p) => p.tags.map((t) => tags.push(t)));
  return tags;
};
