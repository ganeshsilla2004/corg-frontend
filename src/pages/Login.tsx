import React, { useState } from "react";
import "../styles/login.css";
import "../styles/login-m.css";
import { useLenis } from "../hooks/useLenis";

const Login: React.FC = () => {
  useLenis(); // Enables smooth scroll with Lenis

  // Controlled form state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Future-ready: integrate AWS Cognito Auth here
    console.log("Logging in with:", formData);
    alert("Login functionality coming soon with AWS Cognito!");
  };

  const handleGoogleLogin = () => {
    // Placeholder for future Google Auth integration
    alert("Google Login coming soon!");
  };

  return (
    <>
      <div className="background"></div>

      <div className="logo">
        <a href="/">
          <img src="/assets/favicon.png" alt="Logo" />
        </a>
      </div>

      <div className="big">
        <div className="login-container">
          <h2>Login</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input type="submit" value="Login" />
          </form>

          <div className="google-login">
            <button type="button" className="google-btn" onClick={handleGoogleLogin}>
              <img
                src="/assets/google-icon.png"
                alt="Google Icon"
                className="google-icon"
              />
              Login with Google
            </button>
          </div>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;