import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="Success">
      <h1>Success!</h1>
      <h2>Thank you for your purchase.</h2>
      <Link to="/">
        <button>Return to home</button>
      </Link>
    </div>
  );
}

export default Success;
