import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ProductVisual } from './ProductVisual';

interface HeroSectionProps {
  onExploreDrops: () => void;
  onOpenQuickView: (productId: string) => void;
  onOpenScopeBuilder?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDrops,
  onOpenQuickView,
  onOpenScopeBuilder,
}) => {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-14">
      {/* 12-Column Split-Screen Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: 7 Columns */}
        <div className="lg:col-span-7 flex flex-col justify-between py-2">
          <div>
            <p className="text-xs font-mono-code font-semibold text-[#09090B]/65 mb-4">
              Lagos · Abuja · Port Harcourt · 48hr Installation
            </p>

            <h1
              className="font-display font-extrabold text-[#09090B] tracking-tight leading-[1.05] mb-5 max-w-xl"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
            >
              24/7 power without generator noise.
            </h1>

            <p className="text-base sm:text-lg text-[#09090B]/80 max-w-md mb-8 leading-relaxed">
              Grade-A lithium solar and hybrid inverter bundles sized for Nigerian homes.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenScopeBuilder || onExploreDrops}
              className="btn-hard text-sm sm:text-base group"
              data-cursor="pointer"
            >
              <span className="flex items-center gap-2">
                <span>Calculate Your Load</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={onExploreDrops}
              className="px-6 py-3.5 text-sm sm:text-base font-bold bg-[#F8F4E8] text-[#09090B] border-2 border-[#09090B] rounded-[10px] shadow-hard hover:bg-[#D2E823] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm transition-all inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              data-cursor="pointer"
            >
              <span>Shop Bundles</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: 5 Columns Visual Showcase */}
        <div className="lg:col-span-5 flex">
          <div
            onClick={() => onOpenQuickView('solar-5kva-duplex')}
            className="relative w-full min-h-[320px] lg:h-full rounded-[20px] border-2 border-[#09090B] overflow-hidden shadow-hard-lg bg-[#121215] group cursor-pointer"
            data-cursor="pointer"
          >
            <ProductVisual
              type="hero"
              alt="Lagos duplex powered by VoltGrid rooftop solar and wall lithium battery"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 text-[#F8F4E8]">
              <span className="font-display text-base font-bold">
                Lekki Phase 1 · 5kVA Duplex Setup
              </span>
              <span className="font-mono-code text-xs font-semibold text-[#D2E823] whitespace-nowrap shrink-0">
                Inspect →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal 4-Column Proof Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t-2 border-[#09090B]">
        <div>
          <div className="font-mono-code text-2xl sm:text-3xl font-bold text-[#09090B] tabular-nums">
            ₦0
          </div>
          <div className="text-xs font-mono-code text-[#09090B]/70 mt-1">
            Monthly Fuel Spend
          </div>
        </div>

        <div>
          <div className="font-mono-code text-2xl sm:text-3xl font-bold text-[#09090B] tabular-nums">
            5 Years
          </div>
          <div className="text-xs font-mono-code text-[#09090B]/70 mt-1">
            LiFePO4 Battery Warranty
          </div>
        </div>

        <div>
          <div className="font-mono-code text-2xl sm:text-3xl font-bold text-[#09090B] tabular-nums">
            48 Hrs
          </div>
          <div className="text-xs font-mono-code text-[#09090B]/70 mt-1">
            Lagos &amp; Abuja Install
          </div>
        </div>

        <div>
          <div className="font-mono-code text-2xl sm:text-3xl font-bold text-[#09090B] tabular-nums">
            1,850+
          </div>
          <div className="text-xs font-mono-code text-[#09090B]/70 mt-1">
            Nigerian Homes Powered
          </div>
        </div>
      </div>
    </section>
  );
};
