import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartProvider }     from "./components/CartContext";
import { WishlistProvider } from "./components/WishlistContext";

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Collection    from "./components/Collection";
import ProductList   from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart          from "./components/Cart";
import Wishlist      from "./components/Wishlist";
import Checkout      from "./components/Checkout";
import MyOrder       from "./components/MyOrder";
import Login         from "./components/Login";
import Register      from "./components/Register";
import About         from "./components/About";
import Contact       from "./components/Contact";
import WelcomeModal  from "./components/WelcomeModal";

// Home page — எல்லா sections ஒரே page-ல
function HomePage() {
  return (
    <>
      <section id="home">    <Hero />       </section>
      <section id="about">   <About />      </section>
      <section id="collections"><Collection /></section>
      <section id="contact"> <Contact />    </section>
    </>
  );
}

function App() {
  const [search, setSearch] = useState("");

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Navbar search={search} setSearch={setSearch} />
          <WelcomeModal />
          <Routes>
            {/* Home — single page scroll */}
            <Route path="/"            element={<HomePage />} />

            {/* Shop — separate pages */}
            <Route path="/shop/:category" element={<ProductList search={search} />} />
            <Route path="/product/:id"    element={<ProductDetail />} />

            {/* Cart & Orders */}
            <Route path="/cart"        element={<Cart />} />
            <Route path="/wishlist"    element={<Wishlist />} />
            <Route path="/checkout"    element={<Checkout />} />
            <Route path="/my-orders"   element={<MyOrder />} />

            {/* Auth */}
            <Route path="/login"       element={<Login />} />
            <Route path="/register"    element={<Register />} />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;