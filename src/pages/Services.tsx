import React from "react";
import "../styles/services.css";
import "../styles/services-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  return (
    <div>
      <div className="background"></div>

      <Navbar />

      <div className="heading">
        <h1>What we provide?</h1>
      </div>

      <div className="container">
        <div className="tagline">
          <h1>
            Empowering Your Vision with Exceptional Design, Development, and
            Digital Marketing Solutions.
          </h1>
        </div>
      </div>

      {/* Desktop Images */}
      <div className="imgs">
        <div className="img1">
          <img src="/assets/s5.png" alt="Service 1" />
        </div>
        <div className="img2">
          <img src="/assets/s1.png" alt="Service 2" />
        </div>
        <div className="img3">
          <img src="/assets/s2.png" alt="Service 3" />
        </div>
        <div className="img4">
          <img src="/assets/s3.png" alt="Service 4" />
        </div>
        <div className="img5">
          <img src="/assets/s4.png" alt="Service 5" />
        </div>
      </div>

      {/* Mobile Images */}
      <div className="imgsmob">
        <div className="img11">
          <img src="/assets/c1.png" alt="Service Mobile 1" />
        </div>
        <div className="img12">
          <img src="/assets/c2.png" alt="Service Mobile 2" />
        </div>
        <div className="img13">
          <img src="/assets/c3.png" alt="Service Mobile 3" />
        </div>
        <div className="img14">
          <img src="/assets/c4.png" alt="Service Mobile 4" />
        </div>
        <div className="img15">
          <img src="/assets/c5.png" alt="Service Mobile 5" />
        </div>
      </div>

      <div className="button">
        <button
          className="btn"
          onClick={() => (window.location.href = "/onboarding")}
        >
          See our Onboarding
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Services;