import React from "react";

const Works: React.FC = () => {
  return (
    <>
      <div className="head1">
        <h1>Our recent works</h1>
      </div>

      <div id="cards-container">
        <div className="card">
          <img src="/assets/P1.png" alt="SkillShare hub App" />
          <h1>SkillShare hub App</h1>
          <button
            className="register-btn"
            onClick={() => (window.location.href = "/onboarding")}
          >
            Visit now
          </button>
        </div>
        <div className="card">
          <img src="/assets/p2.png" alt="Cassini Green Energies" />
          <h1>Cassini Green Energies</h1>
          <button
            className="register-btn"
            onClick={() =>
              window.open("https://www.cassinigreenenergy.com", "_blank")
            }
          >
            Visit now
          </button>
        </div>
        <div className="card">
          <img src="/assets/p3.png" alt="Old Gods brand" />
          <h1>Old Gods brand</h1>
          <button
            className="register-btn"
            onClick={() => window.open("https://www.oldgods.in", "_blank")}
          >
            Visit now
          </button>
        </div>
      </div>
    </>
  );
};

export default Works;