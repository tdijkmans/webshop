export function addToCart(id, amount) {
  return {
    type: "ADD_TO_CART",
    payload: { productId: parseInt(id), amount: parseInt(amount) },
  };
}

export function emptyCart() {
  return { type: "EMPTY_CART", payload: true };
}

export function doPlusOne(id) {
  return { type: "PLUS_ONE", payload: parseInt(id) };
}

export function doMinusOne(id) {
  return { type: "MINUS_ONE", payload: parseInt(id) };
}
