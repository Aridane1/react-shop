import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import FormSale from "../../components/FormSale/FormSale";
import Header from "../../components/Header/Header";
import "./shoppingCart.css";
function ShoppingCart() {
  const [finalPrice, setFinalPrice] = useState(0);

  const addToFinalPrice = (quantity) => {
    setFinalPrice(finalPrice + quantity);
  };

  return (
    <>
      <Header />
      <div className="shopping-cart">
        <div className="title-shopping-cart">
          <h2> Tu Lista </h2>
        </div>
        <div className="shopping-cart-list">
          <FormSale
            addToFinalPrice={(q) => addToFinalPrice(q)}
            setInitialTotalPrice={(q) => setFinalPrice(q)}
          />
        </div>
        <div className="final-price">
          <div className="text-final-price">
            <p>
              <h3>Precio final</h3>
            </p>
          </div>
          <div className="number-final-price">
            <p>{finalPrice}€</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ShoppingCart;
