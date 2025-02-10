import "./Cam.css";

const Cam = () => {
  return (
    <div className="camera-container">
      <svg
        className="camera-svg"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            cx="150"
            cy="100"
            r="50"
            fill="#ccc"
            stroke="#555"
            strokeWidth="5"
          />
          <circle
            cx="350"
            cy="100"
            r="50"
            fill="#ccc"
            stroke="#555"
            strokeWidth="5"
          />

          <circle cx="150" cy="100" r="10" fill="#555" />
          <circle cx="350" cy="100" r="10" fill="#555" />

          <rect
            x="120"
            y="150"
            width="260"
            height="160"
            rx="20"
            fill="#333"
            stroke="#222"
            strokeWidth="5"
          />
          <rect x="140" y="160" width="40" height="20" fill="#00b2a6" />

          <rect
            x="80"
            y="170"
            width="50"
            height="50"
            rx="10"
            fill="#555"
            stroke="#222"
            strokeWidth="5"
          />

          <line
            x1="150"
            y1="100"
            x2="240"
            y2="150"
            stroke="#444"
            strokeWidth="4"
          />
          <line
            x1="350"
            y1="100"
            x2="270"
            y2="150"
            stroke="#444"
            strokeWidth="4"
          />

          <circle cx="220" cy="200" r="10" fill="#fff" />
          <circle cx="300" cy="200" r="10" fill="#fff" />
          <path
            d="M220 230 Q260 250 300 230"
            stroke="#fff"
            strokeWidth="5"
            fill="none"
          />

          <path
            d="M110 250 Q80 270 90 300"
            stroke="#00b2a6"
            strokeWidth="10"
            fill="none"
          />
          <path
            d="M370 250 Q400 270 390 300"
            stroke="#00b2a6"
            strokeWidth="10"
            fill="none"
          />

          <line
            x1="200"
            y1="310"
            x2="190"
            y2="370"
            stroke="#00b2a6"
            strokeWidth="10"
          />
          <line
            x1="320"
            y1="310"
            x2="330"
            y2="370"
            stroke="#00b2a6"
            strokeWidth="10"
          />

          <rect x="180" y="370" width="40" height="20" fill="red" />
          <rect x="310" y="370" width="40" height="20" fill="red" />
        </g>
      </svg>
    </div>
  );
};

export default Cam;