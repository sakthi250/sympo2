import React from "react";
import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="retro-loading-overlay">
      <div className="retro-loading-container">
        <div className="retro-text">Erupta 2025</div>
        <div className="loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;