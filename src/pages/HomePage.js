import React, { useEffect, useState } from "react";
import { fetchData } from "../store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFlowersHighLowPrice,
  selectFlowersLowHighPrice,
  selectFlowersHighLowPop,
  selectFlowersLowHighPop,
  selectFlowers,
  selectFlowersTags,
} from "../store/products/selectors";
import Product from "../components/Product";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import CardDeck from "react-bootstrap/CardDeck";

export default function HomePage() {
  const dispatch = useDispatch();
  const [priceAscending, setPriceAscending] = useState(true);
  const [soldAscending, setSoldAscending] = useState(true);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  const flowers = useSelector(selectFlowers);
  console.log(flowers);

  function sortPrice() {
    setPriceAscending(!priceAscending);
  }

  const sortedFlowersByPrice = useSelector(
    priceAscending ? selectFlowersLowHighPrice : selectFlowersHighLowPrice
  );

  function sortPopular() {
    setSoldAscending(!soldAscending);
  }

  const sortedFlowersByPop = useSelector(
    soldAscending ? selectFlowersLowHighPop : selectFlowersHighLowPop
  );

  function handleSort(event) {
    console.log("handelsort", event);
  }

  const flowerTags = useSelector(selectFlowersTags).map((t) => (
    <Badge key={t} pill variant="primary">
      {t}
    </Badge>
  ));

  const flowerList = sortedFlowersByPrice.map((flower) => (
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
      Buy yourself some happiness, why don't you?
      <button onClick={sortPrice}>Sort price</button>
      <button onClick={sortPopular}>Sort popular</button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={handleSort} href="#/action-1">
            Ascending Price
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Descending Price</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Ascending Popularity</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Decending Popularity</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <hr></hr>
      {flowerTags}
      <h3>TODO filter by tag | tag |tag </h3>
      <hr></hr>
      <CardDeck>{flowerList}</CardDeck>
    </div>
  );
}
