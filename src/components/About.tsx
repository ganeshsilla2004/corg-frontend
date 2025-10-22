import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section>
        <p className="reveal-type" data-bg-color="gray" data-fg-color="#ffffff">
          Corgnetrix is a service-driven company that turns ideas into innovative realities.
          Focusing on cutting-edge branding, we seamlessly transition businesses from offline
          to fully digital, revolutionizing their operations and presence in the digital world.
        </p>
      </section>

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

export default About;