import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalScroll: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hori2 h1", {
      xPercent: -185,
      scrollTrigger: {
        trigger: ".hori2",
        scroller: "body",
        start: "top 70%",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="hori2">
      <h1>NAVIGATE YOUR DESTINY</h1>
    </div>
  );
};

export default HorizontalScroll;