import "./Ufo.css";

const Ufo = () => {
  return (
    <div className="ufo-container">
      <svg
        className="ufo-svg"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* UFO's Body */}
          <ellipse
            cx="256"
            cy="200"
            rx="180"
            ry="80"
            fill="#444"
            stroke="#222"
            strokeWidth="5"
          />
          
          {/* UFO's Dome */}
          <ellipse
            cx="256"
            cy="150"
            rx="120"
            ry="50"
            fill="#666"
            stroke="#333"
            strokeWidth="5"
          />
          
          {/* Lights underneath the UFO */}
          <circle cx="180" cy="300" r="20" fill="#00b2a6" />
          <circle cx="256" cy="300" r="20" fill="#00b2a6" />
          <circle cx="332" cy="300" r="20" fill="#00b2a6" />
          
          {/* UFO windows */}
          <circle cx="200" cy="130" r="10" fill="#fff" />
          <circle cx="250" cy="130" r="10" fill="#fff" />
          <circle cx="300" cy="130" r="10" fill="#fff" />
          
          {/* UFO antennas */}
          <line
            x1="156"
            y1="80"
            x2="156"
            y2="50"
            stroke="#222"
            strokeWidth="4"
          />
          <line
            x1="356"
            y1="80"
            x2="356"
            y2="50"
            stroke="#222"
            strokeWidth="4"
          />
          
          {/* UFO's Beam */}
          <path
            d="M180 300 Q256 400 332 300"
            stroke="#00b2a6"
            strokeWidth="6"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

export default Ufo;
