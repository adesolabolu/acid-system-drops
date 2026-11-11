import React from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <header className="sticky top-4 z-40 max-w-7xl w-full mx-auto px-4 md:px-8 mb-6">
      <div className="flex items-center justify-between gap-8 px-6 py-4 bg-[#F8F4E8]/95 backdrop-blur-md border-2 border-[#09090B] rounded-[12px] shadow-hard">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-[#09090B] whitespace-nowrap shrink-0 focus-visible:outline-none"
        >
          VoltGrid NG
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#09090B]/80">
          <a
            href="#categories"
            className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-colors whitespace-nowrap shrink-0"
          >
            By Home Size
          </a>
          <a
            href="#drops"
            className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-colors whitespace-nowrap shrink-0"
          >
            Solar Bundles
          </a>
          <a
            href="#laboratory"
            className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-colors whitespace-nowrap shrink-0"
          >
            Load Calculator
          </a>
          <a
            href="#editorial"
            className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-colors whitespace-nowrap shrink-0"
          >
            Install &amp; Warranty
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onOpenCart}
            className="px-4 py-2.5 text-xs sm:text-sm font-bold bg-[#09090B] text-[#D2E823] border-2 border-[#09090B] rounded-[8px] shadow-hard-sm hover:bg-[#D2E823] hover:text-[#09090B] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap shrink-0"
            data-cursor="pointer"
          >
            Your Quote ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
};
