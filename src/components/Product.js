import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import Table from "react-bootstrap/Table";
import { flowerInCartCheck } from "../store/cart/selectors";
import { useSelector } from "react-redux";
import AmountCalculator from "../components/AmountCalculator";

export default function Product(props) {
  const tags = props.tags.map((t) => <div key={t}>{t}</div>);
  const id = props.id;
  const flowerInCart = useSelector(flowerInCartCheck(id));

  const cartContainer = !flowerInCart ? (
    <AddToCart id={id} />
  ) : (
    <>
      <AddToCart id={id} />
      <Table striped bordered hover className="in-cart">
        <thead>
          <tr>
            <th>{props.name}(s) in your cart:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="amount">
              <AmountCalculator id={id} />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );

  return (
    <div className="product-card">
      <Link to={`product/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      {tags}
      <h4>Price: € {props.price}</h4>
      <h4>Sold: {props.sold}</h4>
      <img
        src={props.img}
        alt={props.name}
        style={{ width: 200, height: 200 }}
      />
      <div className="cart-container">{cartContainer}</div>
    </div>
  );
}
