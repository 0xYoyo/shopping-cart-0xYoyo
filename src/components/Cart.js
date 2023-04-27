import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const Cart = ({ state }) => {
  const [
    products,
    total,
    totalPrice,
    handleIncrement,
    handleDecrement,
    handleInput,
    handleDelete,
  ] = state;

  const catalogItems = products.map((item) => {
    if (item.added) {
      return (
        <li key={item.id}>
          <Item
            item={item}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleInput={handleInput}
            handleDelete={handleDelete}
          />
        </li>
      );
    }
  });

  if (total > 0) {
    return (
      <div className="cart">
        <ul className="catalog">
          {catalogItems}
          <li className="checkout">
            <h2>
              Total price: <span className="green">{totalPrice}$</span>
            </h2>
            <button>Check out</button>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="cartEmpty">
        <h1>
          Uh oh... <br /> Your cart is empty
        </h1>
        <h2>Explore products</h2>
        <Link to="/0xyoyo.github.io/shopping-cart-0xYoyo/catalog">
          <button>Products</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
