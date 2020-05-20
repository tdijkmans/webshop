import React from "react";
import { useSelector } from "react-redux";
import { selectItemsInCart, selectTotalPriceInCart } from "../store/selectors";
import { selectNothingInCart } from "../store/cart/selectors";
import InCartProduct from "../components/InCartProduct";
import Table from "react-bootstrap/Table";

export default function CartPage() {
  const nothingInCart = useSelector(selectNothingInCart);
  const flowersInCart = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPriceInCart);

  const cartList = flowersInCart.map((flower) => (
    <InCartProduct key={flower.id} prop={flower} />
  ));

  const renderCart = nothingInCart ? (
    <div className="nothing-in-cart">Your cart is empty</div>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartList}
        <tr>
          <td colSpan="3">
            <strong>Total price:</strong>
          </td>
          <td>€{totalPrice}</td>
        </tr>
      </tbody>
    </Table>
  );

  return <div className="cartpage">{renderCart}</div>;
}
