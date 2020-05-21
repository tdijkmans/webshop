import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export default function Product(props) {
  const tags = props.tags.map((t) => (
    <div key={t}>
      <Badge pill variant="primary">
        {t}
      </Badge>
    </div>
  ));

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />

        <Card.Body>
          <Link to={`product/${props.id}`}>
            <Card.Title>{props.name}</Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">
            Price: € {props.price} | Sold: {props.sold}
          </Card.Subtitle>
          {tags}

          <AddToCart id={props.id} />
        </Card.Body>
      </Card>
    </div>
  );
}
