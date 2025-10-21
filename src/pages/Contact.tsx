import React from "react";
import "../styles/contact.css";
import "../styles/contact-m.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="background"></div>

      <Navbar />

      <div className="heading">
        <h1>Let's Work Together!</h1>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>
              <span>Email:</span>
              <br />
              corgnetrixglobalsolutions@gmail.com
            </p>
          </div>

          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <span>Office Address:</span>
              <br />
              Plot no: 404, <br />
              Sampath Residency, Narasannapeta, <br />
              Srikakulam, 532421
            </p>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>
              <span>Phone Numbers:</span>
              <br />
              +91 9959277565
              <br />
              +91 7799243337
              <br />
              +91 9553254014
            </p>
          </div>
        </div>
      </div>

      <div className="button">
        <button
          className="btn"
          onClick={() =>
            (window.location.href =
              "https://u3l99szzag2.typeform.com/to/bfjP2TOi")
          }
        >
          Tell us something!
        </button>
      </div>

      <p className="note">
        Note: Feel free to reach out to us using the contact details above. We’ll
        get back to you as soon as possible.
      </p>

      <Footer />
    </div>
  );
};

export default Contact;