import Footer from "../../components/Footer/Footer";
import FormSale from "../../components/FormSale/FormSale";
import Header from "../../components/Header/Header";
import "./shoppingCart.css";
function ShoppingCart(props) {
  return (
    <>
      <Header />
      <div className="shopping-cart">
        <div className="title-shopping-cart">
          <h2> Tu Lista </h2>
        </div>
        <div className="shopping-cart-list">
          <FormSale />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ShoppingCart;
