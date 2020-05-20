import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAmountOfFlower } from "../store/cart/selectors";
import { doMinusOne, doPlusOne } from "../store/cart/actions";
import Button from "react-bootstrap/Button";

export default function InCartProduct(props) {
  const dispatch = useDispatch();
  const { name, id, price } = props.prop;

  const amount = useSelector(selectAmountOfFlower(id));
  const total = amount * price;

  const plusOne = (e) => {
    e.preventDefault();
    dispatch(doPlusOne(id));
  };

  const minusOne = (e) => {
    e.preventDefault();
    dispatch(doMinusOne(id));
  };

  return (
    <tr>
      <td>
        <Link to={`product/${id}`}>{name} </Link>
      </td>
      <td>
        <Button onClick={plusOne} variant="success">
          +
        </Button>
        {amount}
        <Button onClick={minusOne} variant="danger">
          -
        </Button>
      </td>
      <td>€{price}</td>
      <td>€{total}</td>
    </tr>
  );
}
