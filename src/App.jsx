import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider, useCart } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import { useState } from "react";
import { Button } from "@mui/material";
import Checkout from "./pages/Checkout";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems
    ? cartItems?.reduce((sum, item) => sum + item?.quantity, 0)
    : 0;

  return (
    <BrowserRouter>
      <Button
        onClick={() => setCartOpen(true)}
        sx={{ color: "#fff", letterSpacing: "0.2em" }}
      >
        {totalItems > 0 ? `CART (${totalItems})` : ""}
      </Button>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
