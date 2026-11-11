import React, { useState } from 'react';
import { HERO_SHOWCASE_IMAGE } from '../data/products';

interface ProductVisualProps {
  type: 'hero' | 'flat3kva' | 'duplex5kva' | 'estate10kva' | 'portable1kva';
  imageUrl?: string;
  alt?: string;
  className?: string;
  isSoldOut?: boolean;
}

const DEFAULT_IMAGES: Record<ProductVisualProps['type'], string> = {
  hero: HERO_SHOWCASE_IMAGE,
  flat3kva: '/src/assets/images/solar_bundle_3kva_flat_1794234688739.jpg',
  duplex5kva: '/src/assets/images/solar_bundle_5kva_duplex_1794234690693.jpg',
  estate10kva: '/src/assets/images/solar_bundle_10kva_estate_1794234691432.jpg',
  portable1kva: '/src/assets/images/solar_portable_workstation_1794234691654.jpg',
};

export const ProductVisual: React.FC<ProductVisualProps> = ({
  type,
  imageUrl,
  alt = 'VoltGrid Solar System',
  className = '',
  isSoldOut = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const resolvedSrc = imageUrl || DEFAULT_IMAGES[type] || HERO_SHOWCASE_IMAGE;

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-[#121215] select-none ${
        isSoldOut ? 'grayscale opacity-75' : ''
      } ${className}`}
    >
      {!imgError ? (
        <img
          src={resolvedSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#141418] text-[#F8F4E8] relative">
          <div className="absolute inset-0 bg-radial-dots-acid opacity-20 pointer-events-none" />
          <svg viewBox="0 0 240 160" className="w-36 h-24 stroke-[#D2E823] mb-3" fill="none" strokeWidth="2">
            <rect x="30" y="20" width="80" height="120" rx="6" stroke="#D2E823" />
            <rect x="125" y="40" width="85" height="100" rx="6" stroke="#F8F4E8" strokeOpacity="0.6" />
            <line x1="50" y1="50" x2="90" y2="50" stroke="#D2E823" />
            <line x1="145" y1="75" x2="190" y2="75" stroke="#F8F4E8" strokeOpacity="0.5" />
          </svg>
          <span className="font-display text-sm text-[#F8F4E8]/90 text-center">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};
