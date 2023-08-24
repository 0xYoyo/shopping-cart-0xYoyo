import React from "react";
import AddedItem from "./AddedItem";

const Catalog = ({ state }) => {
  const [
    products,
    handleIncrement,
    handleDecrement,
    handleInput,
    handleDelete,
  ] = state;
  console.log(products);
  const catalogItems = products.map((item) => (
    <li key={item.id}>
      <AddedItem
        item={item}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleInput={handleInput}
        handleDelete={handleDelete}
      />
    </li>
  ));

  return <ul className="catalog">{catalogItems}</ul>;
};

export default Catalog;
