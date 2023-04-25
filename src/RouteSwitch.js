import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Nav from "./Nav";
import itemData from "./helper";

const RouteSwitch = () => {
  const [products, setProducts] = useState(itemData);
  const [totalInBag, setTotalInBag] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateInBag = async (productsToSum) => {
    let newTotal = await productsToSum.reduce((total, product) => {
      return product.quantity === "" ? total : total + product.quantity;
    }, 0);
    setTotalInBag(newTotal);
  };

  const getTotalPrice = async (productsToSum) => {
    let newTotal = await productsToSum.reduce((total, product) => {
      return product.quantity === ""
        ? total
        : total + product.quantity * product.price;
    }, 0);
    setTotalPrice(newTotal);
  };

  const handleIncrement = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const newQuan = product.quantity + 1 || 1;
        if (product.added) {
          return { ...product, quantity: newQuan };
        } else {
          return { ...product, quantity: newQuan, added: true };
        }
      } else {
        return product;
      }
    });
    setProducts(newProducts);
    updateInBag(newProducts);
    getTotalPrice(newProducts);
  };

  const handleDecrement = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        const newQuan = product.quantity - 1;
        if (newQuan > 0) {
          return { ...product, quantity: newQuan };
        } else {
          return { ...product, quantity: newQuan, added: false };
        }
      } else {
        return product;
      }
    });
    setProducts(newProducts);
    updateInBag(newProducts);
    getTotalPrice(newProducts);
  };

  const handleInput = (e, id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const newQuan = e.target.value || "";
        return { ...product, quantity: Number(newQuan) };
      } else {
        return product;
      }
    });
    console.log(newProducts);
    setProducts(newProducts);
    updateInBag(newProducts);
    getTotalPrice(newProducts);
  };

  const handleDelete = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const newQuan = 0;
        return { ...product, quantity: newQuan, added: false };
      } else {
        return product;
      }
    });
    console.log(newProducts);
    setProducts(newProducts);
    updateInBag(newProducts);
    getTotalPrice(newProducts);
  };

  return (
    <BrowserRouter>
      <Nav state={totalInBag} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/catalog"
          element={
            <Catalog state={[products, handleIncrement, handleDecrement]} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              state={[
                products,
                totalInBag,
                totalPrice,
                handleIncrement,
                handleDecrement,
                handleInput,
                handleDelete,
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
