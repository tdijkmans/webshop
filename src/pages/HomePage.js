import React, { useEffect } from "react";
import { fetchData, setSortOrder } from "../store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFlowers, selectFlowersTags } from "../store/products/selectors";
import Product from "../components/Product";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import CardDeck from "react-bootstrap/CardDeck";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  const flowers = useSelector(selectFlowers);

  function handleSelect(e) {
    dispatch(setSortOrder(e));
  }

  const flowerTags = useSelector(selectFlowersTags).map((t) => (
    <Badge key={t} pill variant="primary">
      {t}
    </Badge>
  ));

  const flowerList = flowers.map((flower) => (
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
      <h4>Buy yourself some happiness, why don't you?</h4>

      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Change Sort Order
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="Ascending Price">
            Ascending Price
          </Dropdown.Item>
          <Dropdown.Item eventKey="Descending Price">
            Descending Price
          </Dropdown.Item>
          <Dropdown.Item eventKey="Ascending Popularity">
            Ascending Popularity
          </Dropdown.Item>
          <Dropdown.Item eventKey="Descending Popularity">
            Descending Popularity
          </Dropdown.Item>
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
