import React from "react";
import "../styles/style.css";
import "../styles/mediaqueries.css";
import "../styles/domainreg.css";
import "../styles/domainreg-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DomainReg: React.FC = () => {
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
        <h1>Register a Domain</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>
            Your domain helps people find you online and makes a first
            impression. Find one that represents you perfectly.
          </h1>
        </div>
      </div>

      <div className="search-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Domain registration feature coming soon!");
          }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Search a domain..."
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      <div id="domains">
        <div className="block" id="block1">
          <h1>.in</h1>
        </div>
        <div className="block" id="block2">
          <h1>.net</h1>
        </div>
        <div className="block" id="block3">
          <h1>.com</h1>
        </div>
        <div className="block" id="block4">
          <h1>.info</h1>
        </div>
        <div className="block" id="block5">
          <h1>.org</h1>
        </div>
      </div>

      <div className="img">
        <img src="/assets/domain.png" alt="domain" />
      </div>

      <div className="mob1">
        <img src="/assets/domianmob.png" alt="domain mobile" />
      </div>

      <Footer />
    </>
  );
};

export default DomainReg;