import React from 'react';

const Roll = () => {
  const size = 400;
  const center = size / 2;
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        {/* Radial gradient to simulate the film's dark texture */}
        <radialGradient id="filmGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#222" />
        </radialGradient>
      </defs>
      <g>
        {/* Outer film roll circle */}
        <circle
          cx={center}
          cy={center}
          r="180"
          fill="url(#filmGradient)"
          stroke="#000"
          strokeWidth="4"
        />
        {/* Inner core representing the spool */}
        <circle
          cx={center}
          cy={center}
          r="50"
          fill="#000"
          stroke="#444"
          strokeWidth="4"
        />
        {/* Concentric dashed circles to mimic film layers */}
        {[80, 110, 140, 170].map((r, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke="#666"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
        {/* Perforation marks arranged around the outer edge */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 360 / 36) * (Math.PI / 180);
          const x = center + 180 * Math.cos(angle);
          const y = center + 180 * Math.sin(angle);
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="5"
              ry="3"
              fill="#ddd"
            />
          );
        })}
        {/* Continuous rotation animation */}
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${center} ${center}`}
          to={`360 ${center} ${center}`}
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default Roll;
