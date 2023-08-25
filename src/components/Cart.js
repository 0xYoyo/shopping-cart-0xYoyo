import React, { useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

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

  const [isLoading, setLoading] = useState(false);

  const redirectToCheckout = async () => {
    setLoading(true);
    const items = await products
      .map((item) => {
        if (item.added) {
          return { price: item.priceAPI, quantity: item.quantity };
        }
      })
      .filter((item) => item !== undefined);
    console.log(items);
    const checkoutOptions = {
      lineItems: items,
      mode: "payment",
      customerEmail: "test@test.com",
      successUrl: `${window.location.origin}/shopping-cart-0xYoyo/success`,
      cancelUrl: `${window.location.origin}/shopping-cart-0xYoyo/cancel`,
    };
    console.log("redirect to checkout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    if (error) alert(error.message);
    setLoading(false);
  };

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
            <p>
              <em>Use CC number 4242 4242 4242 4242 for testing</em>
            </p>
            <button onClick={redirectToCheckout} disabled={isLoading}>
              {isLoading ? "Loading..." : "Check out"}
            </button>
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
        <Link to="/shopping-cart-0xYoyo/catalog">
          <button>Products</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
