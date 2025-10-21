import React from "react";
import "../styles/cloudnav.css";
import "../styles/cloudnav-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CloudNav: React.FC = () => {
  return (
    <div>
      <div className="background"></div>

      <Navbar />

      <div className="heading">
        <h1>Cloud Services</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>Seamless Cloud Solutions for a Smarter, Scalable Future.</h1>
        </div>
      </div>

      <div className="main">
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/cloud-services")}
        >
          Cloud
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/cloud/profcloud")}
        >
          Professional Cloud
        </button>
      </div>

      <div className="img">
        <img src="/assets/cloud.png" alt="Cloud Services" />
      </div>

      <div className="mob1">
        <img src="/assets/cloudmob.png" alt="Cloud Mobile" />
      </div>

      <Footer />
    </div>
  );
};

export default CloudNav;