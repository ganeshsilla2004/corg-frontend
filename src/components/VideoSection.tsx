import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="video-container1">
      <video src="/assets/vid2.mp4" autoPlay muted loop></video>
      <div className="nums1">
        <img src="/assets/overlay.png" alt="Overlay" />
      </div>
    </div>
  );
};

export default VideoSection;