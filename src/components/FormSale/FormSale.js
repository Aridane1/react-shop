import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";

function FormSale({addToFinalPrice, setInitialTotalPrice}) {
  const [products, setProducts] = useState([]);

  const getData = () => {
    const auxProduct = localStorage.getItem("products");
    return JSON.parse(auxProduct);
  };

  const addCounterToProduct = (quantity, unitPrice) => {
    addToFinalPrice(quantity * unitPrice);
  }

  const getInitialTotalPrice = () => {
    let auxInitialTotalPrice = 0;
    products.forEach((p) => {
      auxInitialTotalPrice += p.price;
    })
    return auxInitialTotalPrice;
  }

  useEffect(() => {
    setProducts(getData());
  }, []);

  useEffect(() => {
    setInitialTotalPrice(getInitialTotalPrice());
  }, [products]);

  const listProduct = () => {
    return products.map((p) => {
      return (
        <>
          <li key={p.id}>
            <div className="card">
              <div className="card-content">
                <div className="card-img">
                  <img src={`/assents/products/${p.img}`} alt="products" />
                </div>
                <div className="card-body">
                  <p>
                    {p.name} - {p.price}€ por kg
                  </p>
                  <Counter addCounterToProduct={(q) => addCounterToProduct(q, p.price)}/>
                </div>
              </div>
            </div>
          </li>
        </>
      );
    });
  };
  return (
    <>
      <div className="main-container">
        <div className="card-container">{listProduct()}</div>
      </div>

    </>
  );
}

export default FormSale;
