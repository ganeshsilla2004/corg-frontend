// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/navbar.css";

// const Navbar: React.FC = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const hamburger = document.getElementById("hamburger");
//     const navLinks = document.getElementById("nav-links");

//     const toggleMenu = () => {
//       navLinks?.classList.toggle("show");
//     };

//     hamburger?.addEventListener("click", toggleMenu);
//     return () => hamburger?.removeEventListener("click", toggleMenu);
//   }, []);

//   return (
//     <>
//       <div className="menu-bar">
//         <div className="menu-left">
//           <Link to="/">
//             <img src="/assets/favicon.png" alt="Corgnetrix" />
//           </Link>
//           <ul>
//             <li><Link to="/domains">DOMAINS</Link></li>
//             <li><Link to="/hosting">HOSTING</Link></li>
//             <li><Link to="/onboarding">ONBOARDING</Link></li>
//             <li><Link to="/services">SOLUTIONS</Link></li>
//             <li><Link to="/cloud">CLOUD</Link></li>
//             <li><Link to="/contact">CONTACT</Link></li>
//             <button className="register-btn" onClick={() => navigate("/login")}>
//               LOGIN
//             </button>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <header>
//         <div className="hamburger" id="hamburger">
//           <div className="line"></div>
//           <div className="line"></div>
//           <div className="line"></div>
//         </div>
//         <nav className="nav-links" id="nav-links">
//           <ul>
//             <li><Link to="/domains">DOMAINS</Link></li>
//             <li><Link to="/hosting">HOSTING</Link></li>
//             <li><Link to="/onboarding">ONBOARDING</Link></li>
//             <li><Link to="/services">SOLUTIONS</Link></li>
//             <li><Link to="/cloud">CLOUD</Link></li>
//             <li><Link to="/contact">CONTACT</Link></li>
//             <button className="register-btn" onClick={() => navigate("/login")}>
//               LOGIN
//             </button>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    const toggleMenu = () => {
      navLinks?.classList.toggle("show");
    };

    hamburger?.addEventListener("click", toggleMenu);
    return () => hamburger?.removeEventListener("click", toggleMenu);
  }, []);

  return (
    <>
      <div className="menu-bar">
        <div className="menu-left">
          <Link to="/">
            <img src="/assets/favicon.png" alt="Corgnetrix" />
          </Link>
          <ul>
            <li><Link to="/domains">DOMAINS</Link></li>
            <li><Link to="/hosting">HOSTING</Link></li>
            <li><Link to="/onboarding">ONBOARDING</Link></li>
            <li><Link to="/services">SOLUTIONS</Link></li>
            <li><Link to="/cloud">CLOUD</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <button className="register-btn" onClick={() => navigate("/login")}>
              LOGIN
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <header>
        <div className="hamburger" id="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav-links" id="nav-links">
          <ul>
            <li><Link to="/domains">DOMAINS</Link></li>
            <li><Link to="/hosting">HOSTING</Link></li>
            <li><Link to="/onboarding">ONBOARDING</Link></li>
            <li><Link to="/services">SOLUTIONS</Link></li>
            <li><Link to="/cloud">CLOUD</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <button className="register-btn" onClick={() => navigate("/login")}>
              LOGIN
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;