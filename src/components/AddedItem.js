const AddedItem = ({ item, handleIncrement }) => {
  //const [item, setItem] = useState(item);
  const { id, pic, name, price } = item;

  const increment = () => {
    handleIncrement(id);
  };

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
};

export default AddedItem;
