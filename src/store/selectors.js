export const selectItemsInCart = (state) => {
  return state.cart.inCart.map((item) =>
    state.flowers.products.find((product) => product.id === item.productId)
  );
};

export const selectTotalPriceInCart = (state) => {
  if (state.cart.nothingInCart) return null;
  else {
    let calculate = (accumulator, current) => accumulator + current;
    let allPrices = state.cart.inCart.map((item) => {
      let price = state.flowers.products.find(
        (product) => product.id === item.productId
      ).price;
      return price * item.amount;
    });
    let totalPrice = allPrices.reduce(calculate);
    return parseFloat(totalPrice.toFixed(2));
  }
};
