import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAmountOfFlower } from "../store/cart/selectors";

export default function InCartProduct(props) {
  console.log(`the prop`, props.prop);
  const { name, id, price } = props.prop;

  const amount = useSelector(selectAmountOfFlower(id));
  const total = amount * price;

  return (
    <tr>
      <td>
        <Link to={`product/${id}`}>{name} </Link>
      </td>
      <td>{amount}</td>
      <td>€{price}</td>
      <td>€{total}</td>
    </tr>
  );
}
