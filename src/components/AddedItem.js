import Item from "./Item";

const AddedItem = ({
  item,
  handleIncrement,
  handleDecrement,
  handleInput,
  handleDelete,
}) => {
  //const [item, setItem] = useState(item);
  const { id, pic, name, price, quantity } = item;
  const increment = () => {
    handleIncrement(id);
  };

  if (quantity > 0) {
    return (
      <Item
        item={item}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleInput={handleInput}
        handleDelete={handleDelete}
      />
    );
  } else {
    return (
      <div className="item">
        <img src={pic} alt={name} />
        <p>
          {name} - {price}$
        </p>
        <div className="addTo">
          <button onClick={increment}>Add to cart</button>
        </div>
      </div>
    );
  }
};

export default AddedItem;
