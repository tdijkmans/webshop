import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Hello from Product Page</h1>
      <h2>This page is about product {id}</h2>
    </div>
  );
}
