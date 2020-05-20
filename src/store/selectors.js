export const selectItemsInCart = (state) => {
  return state.cart.inCart.map((item) =>
    state.flowers.products.find((product) => product.id === item.productId)
  );
};
