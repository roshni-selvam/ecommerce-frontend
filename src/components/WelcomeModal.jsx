import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./WelcomeModal.css";

const WelcomeModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // 

  useEffect(() => {
    const hasVisited = localStorage.getItem("trendyvibe_visited");
    if (!hasVisited) {
      const timer = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("trendyvibe_visited", "true");
  };

  const handleShopNow = () => {
    handleClose();
    navigate("/shop/all"); 
  };

  if (!show) return null;

  return (
    <div className="wm-overlay" onClick={handleClose}>
      <div className="wm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="wm-close" onClick={handleClose}>&times;</button>
        <div className="wm-petal wm-petal-1">✿</div>
        <div className="wm-petal wm-petal-2">✿</div>
        <div className="wm-logo">Trendy<span>Vibe</span></div>
        <div className="wm-icon">🛍️</div>
        <h2 className="wm-heading">Welcome to TrendyVibe!</h2>
        <p className="wm-sub">Discover the latest women's fashion — curated just for you.</p>
        <div className="wm-divider" />
        <p className="wm-highlight">✨ New arrivals are here. Explore now!</p>
        <div className="wm-actions">
          <button className="wm-btn-primary" onClick={handleShopNow}>Shop Now</button>
          <button className="wm-btn-secondary" onClick={handleClose}>Maybe Later</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;