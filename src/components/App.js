import "../styles/App.css";
import bgi from "../images/background.jpg";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgi})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "3500px",
        margin: "0 auto",
      }}
    >
      <h1>Enhance your wardrobe</h1>
      <Link to="/catalog">
        <button>Shop now</button>
      </Link>
    </div>
  );
};

export default App;
