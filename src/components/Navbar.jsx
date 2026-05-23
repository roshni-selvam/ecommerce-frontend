import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";       
import { useWishlist } from "./WishlistContext";
import { useState, useEffect } from "react";

const allProducts = [
  { id: 1,  category: "western",     name: "Floral Midi Dress" },
  { id: 2,  category: "western",     name: "Black Maxi Dress" },
  { id: 3,  category: "western",     name: "Yellow Sundress" },
  { id: 4,  category: "western",     name: "Denim Shirt Dress" },
  { id: 5,  category: "western",     name: "Red Bodycon Dress" },
  { id: 6,  category: "western",     name: "White Wrap Dress" },
  { id: 7,  category: "western",     name: "Lavender Tier Dress" },
  { id: 8,  category: "western",     name: "Green Printed Dress" },
  { id: 13, category: "party",       name: "Sequin Gown" },
  { id: 14, category: "party",       name: "Velvet Bodycon" },
  { id: 15, category: "party",       name: "Shimmer Co-ord Set" },
  { id: 25, category: "traditional", name: "Kanjivaram Silk Saree" },
  { id: 26, category: "traditional", name: "Anarkali Suit" },
  { id: 37, category: "sarees",      name: "Kanjivaram Gold Saree" },
  { id: 38, category: "sarees",      name: "Banarasi Silk Saree" },
  { id: 45, category: "casual",      name: "Oversized Graphic Tee" },
  { id: 46, category: "casual",      name: "Jogger Co-ord Set" },
];

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("tv_user");
    if (saved) setUser(JSON.parse(saved));

    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("tv_user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-login", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-login", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("tv_token");
    localStorage.removeItem("tv_user");
    setUser(null);
    window.dispatchEvent(new Event("local-login"));
    navigate("/");
  };

  const results = search.trim()
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handleSelect = (product) => {
    setSearch(product.name);
    navigate(`/shop/${product.category}`);
  };

  return (
    <nav className="nav">
      <div className="logo" onClick={() => navigate("/")}>
        Trendy<span>Vibe</span>
      </div>

      <ul className="nav-links">
  <li>
    <span onClick={() => {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }}>Home</span>
  </li>
  <li>
    <span onClick={() => {
      navigate("/");
      setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 150);
    }}>About Us</span>
  </li>
  <li>
    <span onClick={() => {
      navigate("/");
      setTimeout(() => document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" }), 150);
    }}>Collections</span>
  </li>
  <li>
    <span onClick={() => {
      navigate("/");
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 150);
    }}>Contact</span>
  </li>
  {user && user.role !== "ADMIN" && (
    <li><span onClick={() => navigate("/my-orders")}>Your Purchases</span></li>
  )}
</ul>

      <div className="nav-icons">
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search dresses..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && search.trim()) {
                navigate(`/search?q=${search}`);
              }
            }}
          />
          {results.length > 0 && (
            <ul className="search-dropdown">
              {results.map((p) => (
                <li key={p.id} className="search-item" onClick={() => handleSelect(p)}>
                  <span className="search-name">{p.name}</span>
                  <span className="search-cat">{p.category}</span>
                </li>
              ))}
            </ul>
          )}
          {search.trim() && results.length === 0 && (
            <ul className="search-dropdown">
              <li className="search-empty">No results found</li>
            </ul>
          )}
        </div>

        <button className="icon-btn" onClick={() => navigate("/wishlist")}>
          ❤️ {wishlistItems.length > 0 && <span className="cart-count">{wishlistItems.length}</span>}
        </button>

        <button className="icon-btn" onClick={() => navigate("/cart")}>
          🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>

        {user ? (
          <>
            <span
              className="nav-username"
              onClick={() => navigate("/my-orders")}
              style={{ cursor: "pointer" }}
            >
              Hi, {user.name}! 🛍️
            </span>
            <button className="login-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="register-btn" onClick={() => navigate("/register")}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;