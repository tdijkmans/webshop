import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const tags = props.tags.map((t) => <div>{t}</div>);

  return (
    <div>
      <Link to="product/${props.id}">
        {/* LINK NOT YET WORKING */}
        <h3>{props.name}</h3>
      </Link>
      {tags}
      <h4>Price: € {props.price}</h4>
      <img
        src={props.img}
        alt={props.name}
        style={{ width: 200, height: 200 }}
      />
      TO DO : ADD TO CART
    </div>
  );
}
