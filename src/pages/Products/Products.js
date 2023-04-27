import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./products.css";

function Products() {
  return (
    <>
      <Header />
      <div className="products">
        <div className="title-products">
          <h2>Productos</h2>
        </div>
        <Cards />
      </div>

      <Footer />
    </>
  );
}
export default Products;
