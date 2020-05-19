import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../components/AddToCart";
import { selectFlowerById } from "../store/products/selectors";

export default function ProductPage() {
  const { id } = useParams();

  const flower = useSelector(selectFlowerById(id));
  console.log(`flower:`, flower);

  return (
    <div>
      <h1>{flower.name}</h1>
      <h2>{flower.price}</h2>
      <h2>{flower.tags}</h2>
      <h2>{flower.description}</h2>
      <img
        src={flower.img}
        alt={flower.name}
        style={{ width: 200, height: 200 }}
      />

      <AddToCart id={id} />
    </div>
  );
}
