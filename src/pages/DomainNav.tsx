import React from "react";
import "../styles/domiannav.css";
import "../styles/domainnav-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DomainNav: React.FC = () => {
  return (
    <div>
      <div className="background"></div>

      <Navbar />

      <div className="heading">
        <h1>DOMAINS</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>Your Digital Identity Starts with the Perfect Domain</h1>
        </div>
      </div>

      <div className="main">
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/domain-register")}
        >
          Register a Domain
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/domain-transfer")}
        >
          Transfer a Domain
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/check-domain")}
        >
          Check Availability
        </button>
      </div>

      <div className="img">
        <img src="/assets/domain.png" alt="Domain" />
      </div>

      <div className="mob1">
        <img src="/assets/domianmob.png" alt="Mobile" />
      </div>

      <Footer />
    </div>
  );
};

export default DomainNav;