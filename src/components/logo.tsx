import React from "react";

const Logo: React.FC = () => {
  return (
    <>
      

      {/* Logo + Parts */}
      <div className="logo">
        <img src="/assets/logodes.png" alt="Corgnetrix Logo" />
      </div>

      <div className="parts">
        <img src="/assets/parts.png" alt="Parts Design" />
      </div>

      {/* Background section with Know More button */}
      <div className="bg1">
        <img src="/assets/bg1.png" alt="Background Art" />
        <button
          className="register-btn"
          onClick={() => (window.location.href = "/onboarding")}
        >
          Know more
        </button>
      </div>
    </>
  );
};

export default Logo;