

import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/assets/logobig.png" alt="Corgnetrix Logo" />
      </div>

      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>
            TF, Plot no: 404, Sampath Residency, Narasannapeta,
            <br />
            Srikakulam, 532421, Andhra Pradesh, India
          </p>
          <p>
            Email:{" "}
            <a href="mailto:corgnetrixglobalsolutions@gmail.com">
              corgnetrixglobalsolutions@gmail.com
            </a>
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section follow">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} Corgnetrix Global Solutions Pvt
          Ltd. All Rights Reserved. Designed & Developed by Corgnetrix.
        </p>
      </div>
    </footer>
  );
};

export default Footer;