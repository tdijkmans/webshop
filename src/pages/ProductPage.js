import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../components/AddToCart";
import { selectFlower, selectLoadStatus } from "../store/product/selectors";
import { fetchFlower } from "../store/product/actions";
import AmountCalculator from "../components/AmountCalculator";
import { flowerInCartCheck } from "../store/cart/selectors";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlower(id));
  }, [dispatch, id]);

  const flower = useSelector(selectFlower);
  const loading = useSelector(selectLoadStatus);
  const flowerInCart = useSelector(flowerInCartCheck(id));

  const cartContainer = !flowerInCart ? (
    <AddToCart id={id} />
  ) : (
    <>
      <Alert key={id} variant="success">
        Already in your cart!
      </Alert>
      <Table striped bordered hover className="in-cart">
        <thead>
          <tr>
            <th>{flower.name}(s) in your cart:</th>
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

  let flowerDetails;
  if (loading) {
    flowerDetails = "Loading";
  } else {
    const tags = flower.tags.map((t) => <div key={t}>{t}</div>);
    flowerDetails = (
      <div>
        <h1>{flower.name}</h1>
        <p>Price: {flower.price} euros only</p>
        {tags}
        <p>{flower.description}</p>

        <img
          src={flower.img}
          alt={flower.name}
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  }

  return (
    <div className="product-page">
      {flowerDetails}
      <div className="cart-container">{cartContainer}</div>
    </div>
  );
}
