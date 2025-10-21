import React from "react";
import "../styles/style.css";
import "../styles/mediaqueries.css";
import "../styles/windowsresell.css";
import "../styles/windowaresell-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WindowsReseller: React.FC = () => {
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
            <li><a href="/domains">DOMAINS</a></li>
            <li><a href="/hosting">HOSTING</a></li>
            <li><a href="/onboarding">ONBOARDING</a></li>
            <li><a href="/services">SOLUTIONS</a></li>
            <li><a href="/cloud">CLOUD</a></li>
            <li><a href="/contact">CONTACT</a></li>
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
        <h1>Windows Reseller Hosting</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>Empower your business—resell hosting, build profits.</h1>
        </div>
      </div>

      <div className="head2">
        <h1>
          Check Our <span>Pricing</span>
        </h1>
      </div>

      <div id="cards-container">
        {[1, 2, 3].map((card) => (
          <div className="card" key={card}>
            <h1>Business</h1>
            <h2>
              Rs. <span>79.9</span>/month
            </h2>
            <hr
              style={{
                width: "90%",
                marginLeft: "20px",
                marginTop: "30px",
                backgroundColor: "#ffffff",
                height: "0.3px",
                border: "none",
              }}
            />
            <h3>99% uptime for rock-solid performance</h3>
            <p>
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;3 Domains
            </p>
            <p>
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;Unmetered Disk
              Space
            </p>
            <p>
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;Unmetered Data
              Transfer
            </p>
            <p>
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;Unlimited Email
              Accounts
            </p>
            <p>
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;Free SSL
              Certificate
            </p>
            <div className="butt">
              <button>Get Started Now</button>
            </div>
          </div>
        ))}
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

export default WindowsReseller;