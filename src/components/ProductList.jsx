import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductList.css";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import products from "../data/Products";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductList({ search }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { category } = useParams();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [selectedSize, setSelectedSize] = useState({});
  const [cartMsg,      setCartMsg]      = useState(null);

  const filtered = products.filter(
    (p) =>
      p.category === category &&
      p.name.toLowerCase().includes((search || "").toLowerCase())
  );

  const handleCart = (item) => {
    // Sarees-ku size no
    if (category !== "sarees" && !selectedSize[item.id]) {
      setCartMsg(`Please select a size — "${item.name}"`);
      setTimeout(() => setCartMsg(null), 2500);
      return;
    }
    addToCart({
      ...item,
      size:  category === "sarees" ? "Free Size" : selectedSize[item.id],
      color: "Original",
    });
    setCartMsg(`"${item.name}" added to cart! 🛒`);
    setTimeout(() => setCartMsg(null), 2500);
  };

  return (
    <div className="shop">
      <div className="shop-header">
        <p className="shop-sub">✦ TrendyVibe Collection</p>
        <h2 className="shop-title" style={{ textTransform: "capitalize" }}>
          {category} Wear
        </h2>
        
      </div>

      {cartMsg && <div className="pl-toast">{cartMsg}</div>}

      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none", border: "none", color: "#b76e79",
          fontSize: 14, cursor: "pointer", fontWeight: 600,
          marginBottom: 16, display: "block",
        }}
      >
        ← Back
      </button>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px" }}>
          <p style={{ color: "#888", fontSize: "16px" }}>No products found!</p>
        </div>
      )}

      <div className="grid">
        {filtered.map((p) => {
          const finalPrice = Math.round(p.price - (p.price * p.discount) / 100);
          return (
            <div className="card" key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
              style={{ cursor: "pointer" }}>

              <div className="card-img-wrap">
                <img src={p.image} alt={p.name} loading="lazy" />
                <span className="card-badge">{p.discount}% OFF</span>
                <button
                  className={`card-heart ${isWishlisted(p.id) ? "loved" : ""}`}
                  onClick={(e) => { e.stopPropagation(); toggleWishlist(p); }}
                >
                  {isWishlisted(p.id) ? "♥" : "♡"}
                </button>
              </div>

              <div className="info">
                <h4 className="card-name">{p.name}</h4>
                <p className="card-cloth">{p.cloth}</p>
                <div className="card-price-row">
                  <span className="card-final">₹{finalPrice}</span>
                  <span className="card-original">₹{p.price}</span>
                </div>

                {/* SIZE — sarees-ku hide */}
                {category !== "sarees" && (
                  <div className="size-wrap">
                    <p className="size-label">
                      Size: <span className="size-chosen">{selectedSize[p.id] || "—"}</span>
                    </p>
                    <div className="sizes">
                      {SIZES.map((s) => (
                        <button key={s}
                          className={`size-btn ${selectedSize[p.id] === s ? "active" : ""}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSize((prev) => ({ ...prev, [p.id]: s }));
                          }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button className="cart-btn"
                  onClick={(e) => { e.stopPropagation(); handleCart(p); }}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}