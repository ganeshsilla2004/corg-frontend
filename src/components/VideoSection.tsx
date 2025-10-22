import React from "react";

const VideoSection: React.FC = () => {
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

      {/* Second video */}
      <div className="video-container1">
        <video src="/assets/vid2.mp4" autoPlay muted loop></video>
        <div className="nums1">
          <img src="/assets/overlay.png" alt="Overlay" />
        </div>
      </div>
    </>
  );
};

export default VideoSection;