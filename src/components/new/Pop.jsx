import "./pop.css";

const Pop = () => {
  return (
    <div className="popcorn-container">
      <svg
        className="popcorn-svg"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <rect
            x="180"
            y="150"
            width="150"
            height="280"
            rx="20"
            ry="20"
            fill="#ff3333"
          />
          <rect x="200" y="150" width="30" height="280" fill="#fff" />
          <rect x="250" y="150" width="30" height="280" fill="#fff" />
          <rect x="300" y="150" width="30" height="280" fill="#fff" />

          <circle cx="205" cy="140" r="20" fill="#f9e79f" />
          <circle cx="235" cy="130" r="20" fill="#f7dc6f" />
          <circle cx="265" cy="140" r="20" fill="#f9e79f" />
          <circle cx="295" cy="130" r="20" fill="#f7dc6f" />
          <circle cx="325" cy="140" r="20" fill="#f9e79f" />

          <rect x="200" y="200" width="40" height="20" fill="#ff0033" />
          <rect x="280" y="200" width="40" height="20" fill="#33ccff" />
          <line
            x1="240"
            y1="210"
            x2="280"
            y2="210"
            stroke="#000"
            strokeWidth="5"
          />

          <path
            d="M180 300 Q150 330 180 360"
            stroke="#ff3333"
            strokeWidth="10"
            fill="none"
          />
          <path
            d="M330 300 Q360 330 330 360"
            stroke="#ff3333"
            strokeWidth="10"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

export default Pop;