import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Nav = ({ state }) => {
  return (
    <nav>
      <Link to="/">
        <h2>Lumière</h2>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/catalog">
          <li>Catalog</li>
        </Link>
        <Link to="/cart">
          <li>
            Cart (<span style={{ color: "red" }}>{state}</span>)
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
