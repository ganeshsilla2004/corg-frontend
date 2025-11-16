import React from "react";

const VideoSection1: React.FC = () => {
  return (
    <>
      {/* Hand + Scaling section */}
      <div className="hand">
        <img src="/assets/hand.png" alt="Hand Illustration" />
      </div>

      <div className="scaling">
        <img src="/assets/scaling.png" alt="Scaling Graphic" />
      </div>

      {/* First video */}
      <div className="video-container">
        <video src="/assets/vid.mp4" autoPlay muted loop></video>
        <div className="nums">
          <img src="/assets/nums.png" alt="Numbers Overlay" />
        </div>
      </div>

    
    </>
  );
};

export default VideoSection1;