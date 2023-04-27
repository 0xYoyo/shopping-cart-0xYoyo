import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ state }) => {
  return (
    <nav>
      <Link to="/0xyoyo.github.io/shopping-cart-0xYoyo">
        <h2>Lumière</h2>
      </Link>
      <ul>
        <Link to="/0xyoyo.github.io/shopping-cart-0xYoyo">
          <li>Home</li>
        </Link>
        <Link to="/0xyoyo.github.io/shopping-cart-0xYoyo/catalog">
          <li>Catalog</li>
        </Link>
        <Link to="/0xyoyo.github.io/shopping-cart-0xYoyo/cart">
          <li>
            Cart (<span style={{ color: "red" }}>{state}</span>)
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
