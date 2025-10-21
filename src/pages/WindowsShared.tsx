import React from "react";
import "../styles/windowshare.css";
import "../styles/windowshare-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WindowsShared: React.FC = () => {
  return (
    <div>
      <div className="background"></div>
      <Navbar />

      <div className="heading">
        <h1>Windows Shared Hosting</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>
            Affordable, reliable hosting for growing businesses — shared success
            starts here.
          </h1>
        </div>
      </div>

      <div className="head2">
        <h1>
          Check Our <span>Pricing</span>
        </h1>
      </div>

      <div id="cards-container">
        {[1, 2, 3].map((card) => (
          <div key={card} className="card" id={`card${card}`}>
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
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;Unmetered
              Disk Space
            </p>
            <p>
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;Unmetered
              Data Transfer
            </p>
            <p>
              <i className="fa-solid fa-caret-right" /> &nbsp;&nbsp;Unlimited
              Email Accounts
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
        <img src="/assets/sharedhosting.png" alt="Windows Shared Hosting" />
      </div>

      <div className="mob1">
        <img
          src="/assets/sharedhostingmob.png"
          alt="Windows Shared Hosting Mobile"
        />
      </div>

      <Footer />
    </div>
  );
};

export default WindowsShared;