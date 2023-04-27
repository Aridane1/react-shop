import ProductsService from "../../services/products.services";
import { useEffect, useState, useRef } from "react";
import "./card-style.css";

function Cards() {
  const selectedProducts = useRef([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  

  const getProducts = () => {
    const allProducts = ProductsService.getProducts();
    setProducts(allProducts);
  };

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
  };

  const handleClick = (p) => {
    selectedProducts.current.push(p);

    localStorage.setItem("products", JSON.stringify(selectedProducts.current));

    const auxProducts = localStorage.getItem("products");
    console.log("resultado");
    console.log(JSON.parse(auxProducts));
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
                  <img src={`/assents/products/${p.img}`} alt="productos" />
                </div>
                <div className="card-body">
                  <p>
                    {p.name} - {p.price}€
                  </p>
                  <p>{p.type}</p>
                  <p>
                    <button
                      className="card-input"
                      onClick={() => handleClick(p)}
                    >
                      Enviar al carrito
                    </button>
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
