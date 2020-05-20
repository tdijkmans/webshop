import React, { useEffect } from "react";
import { fetchData } from "../store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFlowers } from "../store/products/selectors";
import Product from "../components/Product";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  const flowers = useSelector(selectFlowers);

  const flowerList = flowers.map((flower) => (
    <Product
      name={flower.name}
      key={flower.id}
      price={flower.price}
      img={flower.img}
      tags={flower.tags}
      id={flower.id}
    />
  ));

  console.log(flowers);

  return (
    <div>
      <h1>Hello from Home Page</h1>
      <h3>TODO filter by tag | tag |tag </h3>
      <h3>TODO sort by price | popularity</h3>
      {flowerList}
    </div>
  );
}
