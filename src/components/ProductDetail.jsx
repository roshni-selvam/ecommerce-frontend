import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import "./ProductDetail.css";
import products from "../data/Products";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const COLORS = [
  { name: "Original", hex: "#e8a4ae", filter: "none" },
  { name: "Blue",     hex: "#6b9bd2", filter: "hue-rotate(200deg) saturate(1.3)" },
  { name: "Green",    hex: "#7bc47f", filter: "hue-rotate(100deg) saturate(1.2)" },
  { name: "Purple",   hex: "#b48ec8", filter: "hue-rotate(270deg) saturate(1.4)" },
];

export default function ProductDetail() {
  const { id }       = useParams();
  const navigate     = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [selectedSize,  setSelectedSize]  = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [cartMsg,       setCartMsg]       = useState("");

  // Find product from static data
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "80px" }}>
        <p style={{ color: "#888" }}>Product not found!</p>
        <button onClick={() => navigate(-1)} style={{ marginTop: 16, color: "#b76e79", background: "none", border: "none", cursor: "pointer", fontSize: 15 }}>
          ← Go Back
        </button>
      </div>
    );
  }

  const finalPrice = Math.round(product.price - (product.price * product.discount) / 100);

  const handleCart = () => {
    if (!selectedSize) {
      setCartMsg("Please select a size!");
      setTimeout(() => setCartMsg(""), 2500);
      return;
    }
    addToCart({ ...product, size: selectedSize, color: selectedColor.name });
    setCartMsg(`Added to cart! (${selectedColor.name} - ${selectedSize}) 🛒`);
    setTimeout(() => setCartMsg(""), 2500);
  };

  return (
    <div className="pd-page">
      <button className="pd-back" onClick={() => navigate(-1)}>← Back</button>

      <div className="pd-layout">

        {/* LEFT: Image */}
        <div className="pd-images">
          <div className="pd-main-img">
            <img
              src={product.image}
              alt={product.name}
              style={{ filter: selectedColor.filter, transition: "0.4s ease" }}
            />
            <span className="pd-badge">{product.discount}% OFF</span>
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="pd-details">
          <p className="pd-category">{product.category}</p>
          <h1 className="pd-name">{product.name}</h1>
          <p className="pd-cloth">{product.cloth}</p>

          <div className="pd-price-row">
            <span className="pd-final">₹{finalPrice}</span>
            <span className="pd-original">₹{product.price}</span>
            <span className="pd-discount">{product.discount}% OFF</span>
          </div>

          {/* Colors */}
          <div className="pd-section">
            <p className="pd-label">Color: <span>{selectedColor.name}</span></p>
            <div className="pd-colors">
              {COLORS.map((color) => (
                <button
                  key={color.name}
                  className={`pd-color-btn ${selectedColor.name === color.name ? "active" : ""}`}
                  style={{ background: color.hex }}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="pd-section">
            <p className="pd-label">Size: <span>{selectedSize || "—"}</span></p>
            <div className="pd-sizes">
              {SIZES.map((size) => (
                <button
                  key={size}
                  className={`pd-size-btn ${selectedSize === size ? "active" : ""}`}
                  style={{
                    background: selectedSize === size ? "#b48ec8" : "",
                    color:      selectedSize === size ? "#fff"    : "",
                  }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {cartMsg && <p className="pd-toast">{cartMsg}</p>}

          <div className="pd-actions">
            <button className="pd-cart-btn" onClick={handleCart}>
              🛒 Add to Cart
            </button>
            <button
              className={`pd-wish-btn ${isWishlisted(product.id) ? "loved" : ""}`}
              onClick={() => {
                const savedUser = localStorage.getItem("tv_user");
                if (!savedUser) {
                  alert("Please login first to wishlist! ❤️");
                  navigate("/login", { state: { from: `/product/${product.id}` } });
                } else {
                  toggleWishlist(product);
                }
              }}
            >
              {isWishlisted(product.id) ? "♥ Wishlisted" : "♡ Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
