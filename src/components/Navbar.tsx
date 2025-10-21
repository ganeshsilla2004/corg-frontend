import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useEffect } from "react";


const Navbar: React.FC = () => {
  useEffect(() => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  return () => {
    if (hamburger && navLinks) {
      hamburger.removeEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
  };
}, []);
  return (
    <>
      <div className="menu-bar">
        <div className="menu-left">
          <Link to="/">
            <img src="/assets/favicon.png" alt="Corgnetrix" />
          </Link>
          <ul>
            <li>
              <Link to="/domains">DOMAINS</Link>
            </li>
            <li>
              <Link to="/hosting/shared">HOSTING</Link>
            </li>
            <li>
              <Link to="/onboarding">ONBOARDING</Link>
            </li>
            <li>
              <Link to="/services">SOLUTIONS</Link>
            </li>
            <li>
              <Link to="/cloud">CLOUD</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <button
              className="register-btn"
              onClick={() => (window.location.href = "/login")}
            >
              LOGIN
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <header>
        <div className="hamburger" id="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav-links" id="nav-links">
          <ul>
            <li>
              <Link to="/domains">DOMAINS</Link>
            </li>
            <li>
              <Link to="/hosting/shared">HOSTING</Link>
            </li>
            <li>
              <Link to="/onboarding">ONBOARDING</Link>
            </li>
            <li>
              <Link to="/solutions">SOLUTIONS</Link>
            </li>
            <li>
              <Link to="/cloud">CLOUD</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <button
              className="register-btn"
              onClick={() => (window.location.href = "/login")}
            >
              LOGIN
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;