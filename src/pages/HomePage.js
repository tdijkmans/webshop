import React, { useEffect } from "react";
import { fetchData } from "../store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFlowers } from "../store/products/selectors";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  const flowers = useSelector(selectFlowers);

  console.log(flowers);

  return (
    <div>
      <h1>Hello from Home Page</h1>
      <h3>TODO filter by tag | tag |tag </h3>
      <h3>TODO sort by price | popularity</h3>
      MAP OVER 10x SOMEPRODUCTCOMPOENT
    </div>
  );
}
