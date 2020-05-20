export const selectNumberOfProductsInCart = (state) => {
  return state.cart.inCart.length;
};

export const selectAmountOfFlower = (id) => (state) => {
  return state.cart.nothingInCart
    ? null
    : state.cart.inCart.find(
        (flower) => parseFloat(flower.productId) === parseFloat(id)
      ).amount;
};

export const selectNothingInCart = (state) => {
  return state.cart.nothingInCart;
};

export const flowerInCartCheck = (id) => (state) => {
  return state.cart.nothingInCart
    ? false
    : state.cart.inCart.find(
        (flower) => parseFloat(flower.productId) === parseFloat(id)
      );
};
