import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function Product(props) {
  const tags = props.tags.map((t) => <div key={t}>{t}</div>);

  return (
    <div>
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
      <AddToCart id={props.id} />
    </div>
  );
}
