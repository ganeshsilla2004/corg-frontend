import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div>
      <div className="line2">
        <h1>What our clients say?</h1>
      </div>
      <div id="test-container">
        {[1, 2, 3, 4].map((i) => (
          <div className="test" key={i}>
            <img src="/assets/coat.png" alt="Quote" />
            <p>
              "Corgnetrix helped our business scale with stunning digital solutions and seamless
              onboarding!"
            </p>
            <h3>Our Client</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;