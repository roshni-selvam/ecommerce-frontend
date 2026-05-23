import "./Login.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message,  setMessage]  = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      setMessage({ text: "Please fill all fields!", type: "error" });
      return;
    }

    // Read registered users from localStorage
    const users = JSON.parse(localStorage.getItem("tv_users") || "[]");
    const found = users.find(
      (u) =>
        u.email    === formData.email.trim().toLowerCase() &&
        u.password === formData.password.trim()
    );

    if (!found) {
      setMessage({ text: "Invalid email or password!", type: "error" });
      return;
    }

    // Save logged-in user
    const loggedUser = { name: found.name, email: found.email, role: found.role || "USER", id: found.id };
    localStorage.setItem("tv_token", `mock_token_${found.id}`);
    localStorage.setItem("tv_user",  JSON.stringify(loggedUser));
    window.dispatchEvent(new Event("local-login"));

    setMessage({ text: "Login Successful! 🎉", type: "success" });

    setTimeout(() => {
      const redirectUrl = location.state?.from || "/";
      navigate(redirectUrl);
    }, 1200);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">Trendy<span>Vibe</span></div>
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Login to continue shopping 🛍️</p>

        {message.text && (
          <div className={`alert-message ${message.type}`}>{message.text}</div>
        )}

        <div className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="login-submit-btn" onClick={handleLogin}>
            Login
          </button>

          <p className="register-link">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
