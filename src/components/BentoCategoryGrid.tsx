import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface BentoCategoryGridProps {
  onSelectCategory: (category: string) => void;
}

export const BentoCategoryGrid: React.FC<BentoCategoryGridProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 md:px-8 py-14 scroll-mt-20">
      <div className="flex items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-[#09090B]">
        <div>
          <p className="font-mono-code text-xs text-[#09090B]/70 font-semibold mb-1">
            02. Choose Your Setup
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#09090B] tracking-tight">
            Shop by Home Size
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large 2x2 Card: Duplex & Inverter AC */}
        <div
          onClick={() => onSelectCategory('Duplex & AC')}
          className="bento-card-interactive md:col-span-2 lg:col-span-2 lg:row-span-2 relative p-8 md:p-10 bg-[#09090B] text-[#F8F4E8] rounded-[20px] border-2 border-[#09090B] shadow-hard-lg flex flex-col justify-between overflow-hidden group cursor-pointer"
          data-cursor="pointer"
        >
          <div className="absolute right-6 bottom-6 w-52 h-52 md:w-64 md:h-64 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#D2E823]" fill="none" strokeWidth="1.5">
              <rect x="35" y="35" width="130" height="130" rx="12" />
              <line x1="35" y1="80" x2="165" y2="80" />
              <line x1="35" y1="120" x2="165" y2="120" />
              <line x1="80" y1="35" x2="80" y2="165" />
              <line x1="120" y1="35" x2="120" y2="165" />
            </svg>
          </div>

          <div className="relative z-10 flex items-start justify-between gap-4">
            <span className="font-mono-code text-xs text-[#D2E823] font-semibold">
              01 · Most Popular for Family Homes
            </span>
            <div className="w-10 h-10 rounded-full border-2 border-[#D2E823] text-[#D2E823] flex items-center justify-center group-hover:bg-[#D2E823] group-hover:text-[#09090B] transition-colors shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          <div className="relative z-10 mt-16 md:mt-24">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F4E8] mb-3 tracking-tight">
              3–4 Bed Duplex &amp; AC
            </h3>
            <p className="text-sm md:text-base text-[#F8F4E8]/80 max-w-md mb-6">
              Runs 1.5HP Inverter AC, deep freezer, pumping machine, TVs, and home office.
            </p>

            <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs text-[#F8F4E8]/75 pt-4 border-t border-[#F8F4E8]/15">
              <span className="text-[#D2E823] font-semibold">5kVA + 10kWh Lithium</span>
              <span aria-hidden="true">·</span>
              <span>8 Roof Panels</span>
              <span aria-hidden="true">·</span>
              <span>₦3,450,000</span>
            </div>
          </div>
        </div>

        {/* 1x1 Card #1: 1–2 Bed Flats */}
        <div
          onClick={() => onSelectCategory('1–2 Bed Flat')}
          className="bento-card-interactive relative p-6 sm:p-8 bg-[#F8F4E8] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard bg-radial-dots flex flex-col justify-between group cursor-pointer"
          data-cursor="pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono-code text-xs font-semibold text-[#09090B]/70">
              02 · Apartments
            </span>
            <div className="w-8 h-8 rounded-full border-2 border-[#09090B] text-[#09090B] flex items-center justify-center group-hover:bg-[#09090B] group-hover:text-[#D2E823] transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-2xl font-bold text-[#09090B] mb-2 tracking-tight">
              1–3 Bed Flats
            </h3>
            <p className="text-xs sm:text-sm text-[#09090B]/80 mb-4">
              Powers fridge, freezer, TV, fans, lights, and Wi-Fi.
            </p>
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#09090B]/75 pt-3 border-t border-[#09090B]/15">
              <span className="font-semibold text-[#09090B]">3.5kVA + 5kWh</span>
              <span aria-hidden="true">·</span>
              <span>₦1,850,000</span>
            </div>
          </div>
        </div>

        {/* 1x1 Card #2: Remote Work Cube */}
        <div
          onClick={() => onSelectCategory('Remote Work')}
          className="bento-card-interactive relative p-6 sm:p-8 bg-[#D2E823] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard bg-radial-dots flex flex-col justify-between group cursor-pointer"
          data-cursor="pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono-code text-xs font-semibold text-[#09090B]/80">
              03 · Plug &amp; Play
            </span>
            <div className="w-8 h-8 rounded-full border-2 border-[#09090B] text-[#09090B] flex items-center justify-center group-hover:bg-[#09090B] group-hover:text-[#D2E823] transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-2xl font-bold text-[#09090B] mb-2 tracking-tight">
              Starlink &amp; Work Cube
            </h3>
            <p className="text-xs sm:text-sm text-[#09090B]/85 mb-4">
              Zero wall drilling. Powers laptops, Starlink, monitor &amp; fan.
            </p>
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#09090B] pt-3 border-t border-[#09090B]/20">
              <span className="font-semibold">1.5kVA Portable</span>
              <span aria-hidden="true">·</span>
              <span>₦680,000</span>
            </div>
          </div>
        </div>

        {/* Full-Width 3-Column Card */}
        <div
          onClick={() => onSelectCategory('Heavy Duty')}
          className="bento-card-interactive md:col-span-2 lg:col-span-3 p-6 md:p-8 bg-[#F8F4E8] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group cursor-pointer"
          data-cursor="pointer"
        >
          <div>
            <div className="font-mono-code text-xs text-[#09090B]/70 font-semibold mb-1">
              04 · Full Diesel Replacement
            </div>
            <h3 className="font-display text-2xl font-bold text-[#09090B] tracking-tight">
              10kVA+ Estates, Multi-AC Homes &amp; Offices
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-3 bg-[#09090B] text-[#D2E823] rounded-[10px] font-bold text-xs sm:text-sm group-hover:bg-[#D2E823] group-hover:text-[#09090B] transition-colors border-2 border-[#09090B] whitespace-nowrap shrink-0">
            <span>View 10kVA System</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
