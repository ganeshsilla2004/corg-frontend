import React from "react";
import "../styles/profcloud.css";
import "../styles/profcloud-m.css";
import { useCursor } from "../hooks/useCursor";
import { useAnimations } from "../hooks/useAnimations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfCloud: React.FC = () => {
  useCursor();
  useAnimations();

  const plans = [
    {
      name: "Business",
      price: "79.9",
      features: [
        "3 Domains",
        "Unmetered Disk Space",
        "Unmetered Data Transfer",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
      ],
    },
    {
      name: "Business",
      price: "79.9",
      features: [
        "3 Domains",
        "Unmetered Disk Space",
        "Unmetered Data Transfer",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
      ],
    },
    {
      name: "Business",
      price: "79.9",
      features: [
        "3 Domains",
        "Unmetered Disk Space",
        "Unmetered Data Transfer",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
      ],
    },
  ];

  return (
    <>
      <div className="background"></div>
      <Navbar />

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
        <h1>Professional Cloud</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>
            Empower your business—resell hosting, build profits.
          </h1>
        </div>
      </div>

      <div className="head2">
        <h1>
          Check Our <span>Pricing</span>
        </h1>
      </div>

      <div id="cards-container">
        {plans.map((plan, idx) => (
          <div className="card" key={idx}>
            <h1>{plan.name}</h1>
            <h2>
              Rs. <span>{plan.price}</span>/month
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
            {plan.features.map((feature, i) => (
              <p key={i}>
                <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;
                {feature}
              </p>
            ))}
            <div className="butt">
              <button>Get Started Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="img">
        <img src="/assets/cloud.png" alt="Cloud" />
      </div>

      <div className="mob1">
        <img src="/assets/cloudmob.png" alt="Mobile cloud" />
      </div>

      <Footer />
    </>
  );
};

export default ProfCloud;