import React from "react";
import "../styles/linuxshared.css";
import "../styles/linuxshare-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LinuxShared: React.FC = () => {
  return (
    <div>
      <div className="background"></div>
      <Navbar />

      <div className="heading">
        <h1>Linux Shared Hosting</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>
            Affordable, reliable hosting for growing businesses — shared success
            starts here.
          </h1>
        </div>
      </div>

      <div className="main">
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/hosting/shared")}
        >
          Back to Shared Hosting
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/hosting/windows-shared")}
        >
          Windows Shared Hosting
        </button>
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/hosting/wordpress-shared")}
        >
          Wordpress Shared Hosting
        </button>
      </div>

      <div className="auto">
        <img src="/assets/auto.png" alt="Automation" />
      </div>

      <div className="mob2">
        <img src="/assets/automob.png" alt="Automation Mobile" />
      </div>

      <div className="img">
        <img src="/assets/sharedhosting.png" alt="Linux Shared Hosting" />
      </div>

      <div className="mob1">
        <img src="/assets/sharedhostingmob.png" alt="Linux Shared Hosting Mobile" />
      </div>

      <Footer />
    </div>
  );
};

export default LinuxShared;