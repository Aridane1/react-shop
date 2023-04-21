import ProductsService from "../../services/products.services";
import { useEffect, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./card-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";

function Cards() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [buttonValue, setButtonValue] = useState([{}]);
  const getProducts = () => {
    const allProducts = ProductsService.getProducts();
    setProducts(allProducts);
  };

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
  };

  const handleButtonChange = (e) => {
    const productValue = e.target.value;
    setButtonValue(productValue);
    console.log(setButtonValue);
  };

  const showProducts = () => {
    return products
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .map((p) => {
        return (
          <li key={p.id}>
            <div className="card">
              <div className="card-content">
                <div className="card-img">
                  <img src={`/assents/productos/${p.img}`} alt="productos" />
                </div>
                <div className="card-body">
                  <p>
                    {p.name} - {p.price}€
                  </p>
                  <p>{p.type}</p>
                  <p>
                    <input
                      type="submit"
                      className="card-input"
                      onClick={handleButtonChange}
                      value={"Añdir al carrito"}
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="box">
        <input
          type="search"
          name="search"
          placeholder=" Buscar producto"
          className="src"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="main-container">
        <div className="card-container">{showProducts()}</div>
      </div>
    </>
  );
}

export default Cards;
