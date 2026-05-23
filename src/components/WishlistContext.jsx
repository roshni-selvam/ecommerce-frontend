import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("tv_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [wishlistItems, setWishlistItems] = useState([]);

  // Watch login/logout events
  useEffect(() => {
    const handleLogin = () => {
      const saved = localStorage.getItem("tv_user");
      setUser(saved ? JSON.parse(saved) : null);
    };
    window.addEventListener("local-login", handleLogin);
    return () => window.removeEventListener("local-login", handleLogin);
  }, []);

  // Load wishlist when user changes
  useEffect(() => {
    if (user && user.email) {
      const key   = `tv_wish_${user.email}`;
      const saved = localStorage.getItem(key);
      setWishlistItems(saved ? JSON.parse(saved) : []);
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  // Save wishlist to localStorage on change
  useEffect(() => {
    if (user && user.email) {
      const key = `tv_wish_${user.email}`;
      localStorage.setItem(key, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, user]);

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });
  };

  const isWishlisted = (productId) => {
    return wishlistItems.some((p) => p.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
