import React from "react";
import AddedItem from "./AddedItem";

const Catalog = ({ state }) => {
  const [products, handleIncrement] = state;
  const catalogItems = products.map((item) => (
    <li key={item.id}>
      <AddedItem item={item} handleIncrement={handleIncrement} />
    </li>
  ));

  return <ul className="catalog">{catalogItems}</ul>;
};

export default Catalog;
