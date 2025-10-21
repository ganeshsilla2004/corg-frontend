import React from "react";

const Works: React.FC = () => {
  return (
    <div>
      <div className="head1">
        <h1>Our recent works</h1>
      </div>

      <div id="cards-container">
        <div className="card">
          <img src="/assets/P1.png" alt="Project 1" />
          <h1>SkillShare hub App</h1>
          <button className="register-btn">Visit now</button>
        </div>
        <div className="card">
          <img src="/assets/p2.png" alt="Project 2" />
          <h1>Cassini Green Energies</h1>
          <button className="register-btn">Visit now</button>
        </div>
        <div className="card">
          <img src="/assets/p3.png" alt="Project 3" />
          <h1>Old Gods brand</h1>
          <button className="register-btn">Visit now</button>
        </div>
      </div>
    </div>
  );
};

export default Works;