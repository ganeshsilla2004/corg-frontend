import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/style.css";
import "../styles/mediaqueries.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatWeDo: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade + slight slide animation
    gsap.from(".steps img", {
      opacity: 0,
      y: 80,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".steps",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="what-we-do">
      <div className="line">
        <h1>What do we do?</h1>
      </div>

      <div className="steps">
        <img src="/assets/steps.png" alt="Our Workflow" />
      </div>
    </div>
  );
};

export default WhatWeDo;