import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink
        to="/"
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

      <Switch></Switch>
    </div>
  );
}

export default App;
