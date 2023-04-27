import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Contact from "./pages/Conctact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import FindUsAt from "./pages/FindUsAt/FindUsAt";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shopping-cat" element={<ShoppingCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/find-us-at" element={<FindUsAt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
