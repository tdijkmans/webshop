import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, NavLink } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Awesome Webshop
      </NavLink>

      <NavLink
        to="/cart"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        2 products in cart
      </NavLink>

      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
