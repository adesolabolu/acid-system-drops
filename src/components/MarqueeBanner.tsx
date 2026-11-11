import React from 'react';

interface MarqueeBannerProps {
  items?: string[];
  theme?: 'acid' | 'dark';
  className?: string;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = [
    'Zero Generator Noise',
    'Grade-A LiFePO4 Lithium Batteries',
    '5-Year Replacement Warranty',
    'Pay-Small-Small 3 & 6 Month Plans',
    '48-Hour Lagos & Abuja Installation',
  ],
  theme = 'acid',
  className = '',
}) => {
  const isAcid = theme === 'acid';

  return (
    <div
      className={`relative w-full overflow-hidden border-y-2 border-[#09090B] py-3 select-none ${
        isAcid ? 'bg-[#D2E823] text-[#09090B]' : 'bg-[#09090B] text-[#F8F4E8]'
      } ${className}`}
    >
      <div className="animate-marquee flex items-center gap-10 font-display text-sm font-bold tracking-tight">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-10 whitespace-nowrap">
            <span>{item}</span>
            <span aria-hidden="true" className="opacity-50 font-mono-code">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
