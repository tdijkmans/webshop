import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import { useSelector } from "react-redux";
import { selectNumberOfProductsInCart } from "../store/cart/selectors";

export default function Navigation() {
  const numberItemsInCart = useSelector(selectNumberOfProductsInCart);
  console.log(`#items in cart`, numberItemsInCart);

  return (
    <NavBar bg="light" className="navbar" expand="lg">
      <NavBar.Brand>
        <NavLink className="brand" to="/home">
          Thomas and Martijn's Happy Flowers
        </NavLink>
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="nav">
          <div className="links">
            <div className="link">
              <NavLink
                className="navlink"
                exact={true}
                to="/home"
                activeStyle={{ color: "#004fff" }}
              >
                Home
              </NavLink>
            </div>
          </div>
          <NavLink
            className="cart"
            exact={true}
            to="/cart"
            activeClassName="active-cart"
          >
            <Button variant="outline-primary">
              Cart <Badge variant="light">{numberItemsInCart}</Badge>
              <span className="sr-only">items in cart</span>
            </Button>
          </NavLink>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
}
