import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import Table from "react-bootstrap/Table";
import { flowerInCartCheck } from "../store/cart/selectors";
import { useSelector } from "react-redux";
import AmountCalculator from "../components/AmountCalculator";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export default function Product(props) {
  const tags = props.tags.map((t) => (
    <Badge pill variant="primary" key={t}>
      {t}
    </Badge>
  ));
  const id = props.id;
  const flowerInCart = useSelector(flowerInCartCheck(id));

  const cartContainer = !flowerInCart ? (
    <AddToCart id={id} />
  ) : (
    <>
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
    <Card className="product-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} alt={props.name} />
      <Card.Body>
        <Link to={`product/${props.id}`}>
          <Card.Title>{props.name}</Card.Title>
        </Link>
        <Card.Text>Price: € {props.price}</Card.Text>
        <Card.Text>Times sold: {props.sold}</Card.Text>
      </Card.Body>
      <Card.Body>{tags}</Card.Body>
      <Card.Body className="cart-container">{cartContainer}</Card.Body>
    </Card>
  );
}
