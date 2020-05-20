import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/actions";
import Alert from "react-bootstrap/Alert";

export default function AddToCart(props) {
  const id = parseInt(props.id);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToCart(id, amount));
    setAddedToCart(true);
  };

  const renderAddToCart = !addedToCart ? (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Add To Cart
        </Button>
      </Form.Row>
    </Form>
  ) : (
    <Alert key={id} variant="success">
      Added to your Cart!
    </Alert>
  );

  return <>{renderAddToCart}</>;
}
