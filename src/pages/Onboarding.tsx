import React from "react";
import "../styles/development.css";
import "../styles/development-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Onboarding: React.FC = () => {
  return (
    <div>
      <div className="background"></div>

      <Navbar />

      <div className="heading">
        <h1>Onboarding</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>From Concept to Launch: Your Startup Journey Simplified</h1>
        </div>
      </div>

      <div className="img">
        <img src="/assets/map.png" alt="Onboarding Map" />
      </div>

      <div className="para">
        <p>
          Corgnetrix offers a comprehensive suite of services to take your
          startup from concept to successful launch. From validating your idea
          and designing your brand identity, to managing legal registrations,
          logo creation, and securing necessary certifications, we cover every
          step. Our expert team handles UI/UX design, app development, hosting,
          and deployment, ensuring your product is market-ready. With
          Corgnetrix, you can focus on your vision while we streamline the
          technical, legal, and branding processes to bring your online
          application to life. We’re your partner in turning ideas into thriving
          startups.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Onboarding;