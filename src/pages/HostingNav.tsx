import React from "react";
import "../styles/hostingnav.css";
import "../styles/hostingnav-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HostingNav: React.FC = () => {
  return (
    <div>
      <div className="background"></div>

      <Navbar />

      <div className="heading">
        <h1>HOSTING</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>Empowering Your Digital Presence with Secure Hosting Solutions</h1>
        </div>
      </div>

      <div className="main">
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/shared-hosting")}
        >
          Shared Hosting
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/reseller-hosting")}
        >
          Reseller Hosting
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/services")}
        >
          Services
        </button>
      </div>

      <div className="img">
        <img src="/assets/hosting.png" alt="Hosting" />
      </div>

      <div className="mob1">
        <img src="/assets/hostingmob.png" alt="Mobile Hosting" />
      </div>

      <Footer />
    </div>
  );
};

export default HostingNav;