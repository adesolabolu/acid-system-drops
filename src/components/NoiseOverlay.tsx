import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 w-full h-full mix-blend-overlay opacity-[0.03]"
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="brutalistNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#brutalistNoise)" />
      </svg>
    </div>
  );
};
