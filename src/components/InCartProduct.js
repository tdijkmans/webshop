import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAmountOfFlower } from "../store/cart/selectors";
import AmountCalculator from "../components/AmountCalculator";

export default function InCartProduct(props) {
  const { name, id, price } = props.prop;

  const amount = useSelector(selectAmountOfFlower(id));
  const total = amount * price;

  return (
    <tr>
      <td>
        <Link to={`product/${id}`}>{name} </Link>
      </td>
      <td className="amount">
        <AmountCalculator id={id} />
      </td>
      <td>€{price}</td>
      <td>€{total}</td>
    </tr>
  );
}
