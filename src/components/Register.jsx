import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage({ text: "Please fill all fields!", type: "error" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match!", type: "error" });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ text: "Password must be at least 6 characters!", type: "error" });
      return;
    }

    // Check if email already registered
    const users = JSON.parse(localStorage.getItem("tv_users") || "[]");
    const emailExists = users.find(
      (u) => u.email === formData.email.trim().toLowerCase()
    );

    if (emailExists) {
      setMessage({ text: "Email already registered! Please login.", type: "error" });
      return;
    }

    // Save new user
    const newUser = {
      id:       Date.now(),
      name:     formData.name.trim(),
      email:    formData.email.trim().toLowerCase(),
      password: formData.password.trim(),
      role:     "USER",
    };

    users.push(newUser);
    localStorage.setItem("tv_users", JSON.stringify(users));

    setMessage({ text: "Registration Successful! 🎉", type: "success" });

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Join TrendyVibe and start shopping!</p>

        {message.text && (
          <div className={`alert-message ${message.type}`}>{message.text}</div>
        )}

        <div className="register-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button className="register-submit-btn" onClick={handleRegister}>
            Register
          </button>

          <p className="login-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
