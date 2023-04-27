import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Shopmap from "../../components/ShopMaps/ShopMaps";
import shopList from "../../services/location.services";

function FindUsAt() {
  const currentShopList = shopList();
  return (
    <div>
      <Header />
      <div>
        <div>
          <h2>Location Shops</h2>
        </div>
        <div>
          <Shopmap
            shops={currentShopList}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FindUsAt;
