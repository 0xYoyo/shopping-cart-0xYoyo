const Item = ({
  item,
  handleIncrement,
  handleDecrement,
  handleInput,
  handleDelete,
}) => {
  const { id, pic, name, price, quantity } = item;

  const removeItem = () => {
    handleDelete(id);
  };

  const changeInput = (e) => {
    handleInput(e, id);
  };

  const increment = () => {
    handleIncrement(id);
  };
  const decrement = () => {
    handleDecrement(id);
  };
  return (
    <div className="item">
      <img src={pic} alt={name} />
      <p>
        {name} - {price}$
      </p>
      <div className="quantity">
        <button className="remove" onClick={removeItem}>
          X
        </button>
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => changeInput(e)}
        ></input>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Item;
