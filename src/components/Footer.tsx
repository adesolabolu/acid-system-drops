import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 8) return;
    setSubmitted(true);
    setTimeout(() => {
      setPhone('');
      setSubmitted(false);
    }, 4500);
  };

  return (
    <footer className="w-full bg-[#09090B] text-[#F8F4E8] border-t-2 border-[#09090B] pt-14 pb-10 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Callback Strip */}
        <div className="pb-12 mb-12 border-b border-[#F8F4E8]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="font-mono-code text-xs text-[#D2E823] font-semibold mb-1">
              Free Engineer Callback
            </div>
            <h3 className="font-display text-2xl font-bold text-[#F8F4E8] tracking-tight">
              Need Help Sizing Your Home?
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:max-w-md">
            {submitted ? (
              <div className="p-3.5 bg-[#D2E823] text-[#09090B] border-2 border-[#09090B] rounded-[10px] font-mono-code text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Our Lagos/Abuja engineer will call {phone}</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter WhatsApp / Phone Number"
                  required
                  className="flex-1 px-4 py-3 bg-transparent border-2 border-[#F8F4E8]/60 text-[#F8F4E8] placeholder-[#F8F4E8]/45 font-mono-code text-xs rounded-[10px] focus:outline-none focus:border-[#D2E823] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#D2E823] text-[#09090B] border-2 border-[#D2E823] font-bold text-xs rounded-[10px] hover:bg-white hover:border-white transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  data-cursor="pointer"
                >
                  <span>Request Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* 3-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-[#F8F4E8]/15 text-sm">
          <div>
            <div className="font-mono-code text-xs text-[#D2E823] font-semibold mb-3">
              01. Solar Bundles
            </div>
            <ul className="space-y-2 text-[#F8F4E8]/80">
              <li><a href="#drops" className="hover:text-[#D2E823]">1.5kVA Portable Cube</a></li>
              <li><a href="#drops" className="hover:text-[#D2E823]">3.5kVA Flat Bundle</a></li>
              <li><a href="#drops" className="hover:text-[#D2E823]">5kVA Duplex + AC</a></li>
              <li><a href="#drops" className="hover:text-[#D2E823]">10kVA Heavy Duty</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono-code text-xs text-[#D2E823] font-semibold mb-3">
              02. Support
            </div>
            <ul className="space-y-2 text-[#F8F4E8]/80">
              <li><a href="#laboratory" className="hover:text-[#D2E823]">Load Calculator</a></li>
              <li><a href="#editorial" className="hover:text-[#D2E823]">5-Year Lithium Warranty</a></li>
              <li><a href="#editorial" className="hover:text-[#D2E823]">Pay-Small-Small Plans</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono-code text-xs text-[#D2E823] font-semibold mb-3">
              03. Showrooms
            </div>
            <ul className="space-y-2 text-[#F8F4E8]/80">
              <li>Lagos · Admiralty Way, Lekki Phase 1</li>
              <li>Abuja · Aminu Kano Cres, Wuse II</li>
              <li className="font-mono-code text-xs text-[#D2E823] pt-1">
                hello@voltgrid.ng
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[#F8F4E8]/55">
          <span>© 2026 VoltGrid Energy Nigeria Ltd.</span>
          <span>COREN Certified · 5-Year LiFePO4 Warranty</span>
        </div>
      </div>
    </footer>
  );
};
