import React from "react";

const Team: React.FC = () => {
  return (
    <div>
      <div className="us-heading">
        <h1>Our Crew<span> !</span></h1>
      </div>
      <div id="us-container">
        <div className="us">
          <img src="/assets/pp.jpg" alt="Yaswanth Boina" />
          <div className="overlay">
            <p>Yaswanth Boina</p>
          </div>
        </div>
        <div className="us">
          <img src="/assets/GP.jpg" alt="Ganesh Silla" />
          <div className="overlay">
            <p>Ganesh Silla</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Team;