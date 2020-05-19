export const selectNumberOfProductsInCart = (state) => {
  return state.cart.inCart.length;
};
