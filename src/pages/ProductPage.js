import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../components/AddToCart";
import { selectFlower, selectLoadStatus } from "../store/product/selectors";
import { fetchFlower } from "../store/product/actions";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlower(id));
  }, [dispatch, id]);

  const flower = useSelector(selectFlower);
  const loading = useSelector(selectLoadStatus);

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
    <div>
      {flowerDetails}
      <AddToCart id={id} />
    </div>
  );
}
