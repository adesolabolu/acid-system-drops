import React from 'react';

export const ManifestoSection: React.FC = () => {
  const steps = [
    {
      num: '01 · Day 1',
      title: 'Load Check',
      desc: 'Pick a bundle online or request a free Lagos/Abuja roof audit.',
    },
    {
      num: '02 · Day 1',
      title: 'Dispatch',
      desc: 'Lithium battery, hybrid inverter & panels delivered to your gate.',
    },
    {
      num: '03 · Day 2',
      title: '6-Hour Install',
      desc: 'Clean trunking, surge protection & DB changeover by COREN engineers.',
    },
    {
      num: '04 · 5 Years',
      title: 'Warranty Care',
      desc: '5-year lithium battery replacement warranty & mobile app monitoring.',
    },
  ];

  const testimonials = [
    {
      quote:
        'We used to spend ₦180,000 monthly on petrol in Lekki Phase 1. Our 5kVA VoltGrid setup runs our bedroom AC, freezer, and Starlink silently 24/7.',
      author: 'Tunde Bakare',
      role: 'Homeowner, Lekki Phase 1, Lagos',
    },
    {
      quote:
        'Cleanest trunking and wiring I have seen in Abuja. Installed in 5 hours and our clinic has not touched the diesel generator in 4 months.',
      author: 'Dr. Amina Bello',
      role: 'Medical Director, Wuse II, Abuja',
    },
  ];

  return (
    <section id="editorial" className="max-w-7xl mx-auto px-4 md:px-8 py-14 scroll-mt-20">
      <div className="mb-8 pb-4 border-b-2 border-[#09090B]">
        <p className="font-mono-code text-xs text-[#09090B]/70 font-semibold mb-1">
          05. Installation &amp; Warranty
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#09090B] tracking-tight">
          Installed in 48 Hours
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-5 bg-[#FFFFFF] border-2 border-[#09090B] rounded-[14px] shadow-hard"
          >
            <div className="font-mono-code text-xs font-semibold text-[#09090B]/65 mb-1.5">
              {step.num}
            </div>
            <h3 className="font-display text-lg font-bold text-[#09090B] mb-1.5">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#09090B]/75 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="p-6 sm:p-7 bg-[#09090B] text-[#F8F4E8] border-2 border-[#09090B] rounded-[16px] shadow-hard flex flex-col justify-between"
          >
            <p className="text-sm sm:text-base text-[#F8F4E8]/90 leading-relaxed mb-4">
              “{t.quote}”
            </p>
            <footer className="text-xs font-mono-code text-[#F8F4E8]/75">
              <span className="font-bold text-[#D2E823]">{t.author}</span>
              <span aria-hidden="true" className="mx-1.5">·</span>
              <span>{t.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};
