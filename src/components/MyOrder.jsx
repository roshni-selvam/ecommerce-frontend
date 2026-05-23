import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MyOrder.css";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("tv_user") || "null");
    if (!user) {
      navigate("/login");
      return;
    }
    const key = `tv_orders_${user.email}`;
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    setOrders(saved);
  }, [navigate]);

  if (orders.length === 0) {
    return (
      <div className="orders-empty">
        <div className="orders-empty-icon">🛍️</div>
        <h2>No orders yet!</h2>
        <p>Looks like you haven't ordered anything. Start shopping!</p>
        <button onClick={() => navigate("/collections")}>Shop Now</button>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h2 className="orders-title">My Orders</h2>
        <p className="orders-count">{orders.length} order{orders.length > 1 ? "s" : ""} placed</p>
      </div>

      <div className="orders-list">
        {orders.map((o) => {
          let parsedItems = [];
          try {
            parsedItems = typeof o.items === "string" ? JSON.parse(o.items) : o.items || [];
          } catch {
            parsedItems = [];
          }

          return (
            <div key={o.id} className="order-card">
              <div className="order-card-header">
                <div className="order-meta">
                  <span className="order-number">#{o.orderNumber || o.id}</span>
                  {o.placedAt && <span className="order-date">🗓 {o.placedAt}</span>}
                </div>
                <span className="order-status confirmed">{o.status || "CONFIRMED"}</span>
              </div>

              <div className="order-items">
                {parsedItems.length > 0 ? (
                  parsedItems.map((item, i) => {
                    const fp = Math.round(
                      (item.price || 0) - ((item.price || 0) * (item.discount || 0)) / 100
                    );
                    return (
                      <div className="order-item-row" key={i}>
                        {item.image && (
                          <img src={item.image} alt={item.name} className="order-item-img" />
                        )}
                        <div className="order-item-info">
                          <p className="order-item-name">{item.name || "Product"}</p>
                          <p className="order-item-meta">
                            Size: {item.size || "M"} &nbsp;·&nbsp; Color: {item.color || "Original"}
                          </p>
                        </div>
                        <div className="order-item-right">
                          <p className="order-item-qty">Qty: {item.quantity || 1}</p>
                          {fp > 0 && (
                            <p className="order-item-price">₹{fp * (item.quantity || 1)}</p>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="no-items-text">Item details not available</p>
                )}
              </div>

              <div className="order-card-footer">
                <div className="order-delivery">
                  <span className="footer-label">📍 Delivery to</span>
                  <span className="footer-value">{o.address}</span>
                </div>
                <div className="order-payment-total">
                  <span className="footer-label">💳 {o.paymentMethod}</span>
                  <span className="order-total">₹{o.totalPrice}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}