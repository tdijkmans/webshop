import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItemsInCart, selectTotalPriceInCart } from "../store/selectors";
import { selectNothingInCart } from "../store/cart/selectors";
import { emptyCart } from "../store/cart/actions";
import InCartProduct from "../components/InCartProduct";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function CartPage() {
  const dispatch = useDispatch();
  const nothingInCart = useSelector(selectNothingInCart);
  const flowersInCart = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPriceInCart);

  const cartList = flowersInCart.map((flower) => (
    <InCartProduct key={flower.id} prop={flower} />
  ));

  const handleEmpty = (e) => {
    e.preventDefault();
    dispatch(emptyCart());
  };

  const renderCart = nothingInCart ? (
    <Alert variant="success" className="nothing-in-cart">
      Your cart is empty!
    </Alert>
  ) : (
    <>
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

      <Button variant="outline-primary" onClick={handleEmpty}>
        Empty your cart
      </Button>
    </>
  );

  return <div className="cartpage">{renderCart}</div>;
}
