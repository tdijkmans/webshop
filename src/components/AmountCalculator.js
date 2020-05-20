import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { doMinusOne, doPlusOne } from "../store/cart/actions";
import Button from "react-bootstrap/Button";
import { selectAmountOfFlower } from "../store/cart/selectors";

export default function AmountCalculator(props) {
  const { id } = props;

  const plusOne = (e) => {
    e.preventDefault();
    dispatch(doPlusOne(id));
  };

  const minusOne = (e) => {
    e.preventDefault();
    dispatch(doMinusOne(id));
  };

  const dispatch = useDispatch();
  const amount = useSelector(selectAmountOfFlower(id));
  return (
    <>
      <Button onClick={plusOne} variant="success">
        +
      </Button>
      {amount}
      <Button onClick={minusOne} variant="danger">
        -
      </Button>
    </>
  );
}
