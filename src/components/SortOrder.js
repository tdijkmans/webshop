import React from "react";
import { useDispatch } from "react-redux";
import { setSortOrder } from "../store/products/actions";
import Dropdown from "react-bootstrap/Dropdown";

export default function SortOrder() {
  const dispatch = useDispatch();

  function handleSelect(e) {
    dispatch(setSortOrder(e));
  }

  return (
    <div>
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
    </div>
  );
}
