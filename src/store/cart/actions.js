export function addToCart(id, amount) {
  return {
    type: "ADD_TO_CART",
    payload: { productId: id, amount: parseInt(amount) },
  };
}

export function emptyCart() {
  return { type: "EMPTY_CART", payload: true };
}
