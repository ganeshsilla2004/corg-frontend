import React from "react";
import "../styles/style.css";
import "../styles/mediaqueries.css";
import "../styles/reseller.css";
import "../styles/reseller-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResellerHosting: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="background"></div>

      <header>
        <div className="hamburger" id="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav-links" id="nav-links">
          <ul>
            <li>
              <a href="/domains">DOMAINS</a>
            </li>
            <li>
              <a href="/hosting">HOSTING</a>
            </li>
            <li>
              <a href="/onboarding">ONBOARDING</a>
            </li>
            <li>
              <a href="/services">SOLUTIONS</a>
            </li>
            <li>
              <a href="/cloud">CLOUD</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
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

      <div className="heading">
        <h1>Reseller Hosting</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>
            Affordable, reliable hosting for growing businesses—shared success
            starts here.
          </h1>
        </div>
      </div>

      <div className="main">
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/hosting/linux-reseller")}
        >
          Linux Reseller Hosting
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/hosting/windows-reseller")}
        >
          Windows Reseller Hosting
        </button>
      </div>

      <div className="img">
        <img src="/assets/reseller.png" alt="Reseller Hosting" />
      </div>

      <div className="mob1">
        <img src="/assets/resellermob.png" alt="Reseller Hosting Mobile" />
      </div>

      <Footer />
    </>
  );
};

export default ResellerHosting;