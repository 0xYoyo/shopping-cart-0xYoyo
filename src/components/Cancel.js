import React from "react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div className="Cancel">
      <h1>Cancelled</h1>
      <h2>Your payment was cancelled.</h2>
      <Link to="/shopping-cart-0xYoyo">
        <button>Return to home</button>
      </Link>
    </div>
  );
}

export default Cancel;
