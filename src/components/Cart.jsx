import "./Cart.css";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  //
  const { cartItems, removeFromCart, setCartItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <button onClick={() => navigate("/collections")}>Shop Now</button>
      </div>
    );
  }
  const handleQuantityChange = (id, size, color, newQty) => {
    if (newQty < 1) return; 
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };
  const delivery = 49;
  const grand    = totalPrice + delivery;

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-layout">

        {/* ITEMS */}
        <div className="cart-items">
          {cartItems.map((item) => {
            const finalPrice = Math.round(
              item.price - (item.price * item.discount) / 100
            );
            
           
  return (
    <div className="cart-card" key={`${item.id}-${item.size}-${item.color}`}>
       <img
         src={item.image}
         alt={item.name}
         className="cart-img"
         onError={(e) => {
         e.target.src = "https://via.placeholder.com/150";
    }}
    />
    <div className="cart-info">
     <h4>{item.name}</h4>
      <p className="cart-meta">Size: {item.size}</p>
       <p className="cart-meta">Color: <span style={{ fontWeight: "600", color: "#b48ec8" }}>{item.color || "Original"}</span></p>
        <p className="cart-meta">🧵 {item.cloth}</p>
        <div className="cart-price-row">
           <span className="cart-final">₹{finalPrice}</span>
           <span className="cart-original">₹{item.price}</span>
           <span className="cart-discount">{item.discount}% OFF</span>
    </div>                   
     <div className="cart-qty">
         <button onClick={() => handleQuantityChange(item.id, item.size, item.color, (item.quantity || 1) - 1)}>−</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.size, item.color, (item.quantity || 1) + 1)}>+</button>
                  </div>           
        <p className="cart-subtotal">
                    Subtotal: ₹{finalPrice * (item.quantity || 1)}
                  </p>
                </div>
         <button
                  className="cart-remove"
                  onClick={() => removeFromCart(item.id, item.size, item.color)}
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
         
    {/* ORDER SUMMARY */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Items Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-row total">
            <span>Grand Total</span>
            <span>₹{grand}</span>
          </div>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
          <button className="continue-btn" onClick={() => navigate("/collections")}>
            Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
}              
                  

                
                
        