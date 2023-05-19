import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import AboutUs from "./pages/AboutUs/AboutUs";
import FindUsAt from "./pages/FindUsAt/FindUsAt";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import AuthProvider from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Comment from "./pages/Comment/Comment";
import News from "./pages/News/News";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/shopping-cart"
              element={
                <ProtectedRoute>
                  <ShoppingCart />
                </ProtectedRoute>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/find-us-at" element={<FindUsAt />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/comment"
              element={
                <ProtectedRoute>
                  <Comment />
                </ProtectedRoute>
              }
            />
            <Route path="/news/:id" element={<News />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
