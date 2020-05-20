import React, { useEffect, useState } from "react";
import { fetchData } from "../store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFlowersHighLowPrice,
  selectFlowersLowHighPrice,
  selectFlowersHighLowPop,
  selectFlowersLowHighPop,
} from "../store/products/selectors";
import Product from "../components/Product";
import CardDeck from "react-bootstrap/CardDeck";

export default function HomePage() {
  const dispatch = useDispatch();
  const [priceAscending, setPriceAscending] = useState(true);
  const [soldAscending, setSoldAscending] = useState(true);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  function sortPrice() {
    setPriceAscending(!priceAscending);
  }

  const sortedFlowersByPrice = useSelector(
    priceAscending ? selectFlowersLowHighPrice : selectFlowersHighLowPrice
  );

  function sortPopular() {
    setSoldAscending(!soldAscending);
    console.log("sort popul");
  }

  const sortedFlowersByPop = useSelector(
    soldAscending ? selectFlowersLowHighPop : selectFlowersHighLowPop
  );

  const flowerList = sortedFlowersByPop.map((flower) => (
    <Product
      name={flower.name}
      key={flower.id}
      price={flower.price}
      img={flower.img}
      tags={flower.tags}
      id={flower.id}
      sold={flower.sold}
    />
  ));

  return (
    <div>
      <h1>Hello from Home Page</h1>
      <h3>TODO filter by tag | tag |tag </h3>
      <h3>TODO sort by price | popularity</h3>
      <button onClick={sortPrice}>Sort price</button>
      <button onClick={sortPopular}>Sort popular</button>
      <CardDeck>{flowerList}</CardDeck>
    </div>
  );
}
