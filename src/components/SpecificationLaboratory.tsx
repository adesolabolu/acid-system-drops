import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { PaymentPlan, Product } from '../types';
import { initialProducts } from '../data/products';

interface SpecificationLaboratoryProps {
  onAddCustomScope: (product: Product, tier: PaymentPlan) => void;
}

interface ApplianceLoad {
  id: string;
  title: string;
  watts: number;
  summary: string;
}

const APPLIANCES: ApplianceLoad[] = [
  {
    id: 'app-work',
    title: '01. Laptops (x2), Starlink & LED Lights',
    watts: 220,
    summary: 'Home office essentials & room lighting.',
  },
  {
    id: 'app-fans-tv',
    title: '02. 65" Smart TV, DStv & 3 Standing Fans',
    watts: 380,
    summary: 'Living room entertainment & airflow.',
  },
  {
    id: 'app-fridge',
    title: '03. Fridge + Chest Freezer',
    watts: 450,
    summary: '24/7 kitchen food preservation.',
  },
  {
    id: 'app-ac-pump',
    title: '04. 1.5HP Inverter AC + Borehole Pump',
    watts: 1850,
    summary: 'Bedroom cooling & water pumping.',
  },
];

export const SpecificationLaboratory: React.FC<SpecificationLaboratoryProps> = ({
  onAddCustomScope,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['app-work', 'app-fans-tv', 'app-fridge']);
  const [selectedPlan, setSelectedPlan] = useState<PaymentPlan>('Outright Payment');
  const [justAdded, setJustAdded] = useState<boolean>(false);

  const toggleAppliance = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id]
    );
  };

  const activeAppliances = APPLIANCES.filter((a) => selectedIds.includes(a.id));
  const totalWatts = activeAppliances.reduce((sum, a) => sum + a.watts, 0);

  // Recommend exact VoltGrid bundle based on total wattage
  const recommendedBundle: Product =
    totalWatts <= 450
      ? initialProducts[2] // 1.5kVA Portable (₦680,000)
      : totalWatts <= 1200
      ? initialProducts[0] // 3.5kVA Flat (₦1,850,000)
      : totalWatts <= 3000
      ? initialProducts[1] // 5kVA Duplex (₦3,450,000)
      : initialProducts[3]; // 10kVA Estate (₦6,200,000)

  const handleAddRecommended = () => {
    onAddCustomScope(recommendedBundle, selectedPlan);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <section id="laboratory" className="max-w-7xl mx-auto px-4 md:px-8 py-14 scroll-mt-20">
      <div className="mb-8 pb-4 border-b-2 border-[#09090B]">
        <p className="font-mono-code text-xs text-[#09090B]/70 font-semibold mb-1">
          04. Interactive Sizing Tool
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#09090B] tracking-tight">
          Appliance Load Calculator
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Columns: Select Appliances */}
        <div className="lg:col-span-7 space-y-3">
          {APPLIANCES.map((app) => {
            const isSelected = selectedIds.includes(app.id);
            return (
              <div
                key={app.id}
                onClick={() => toggleAppliance(app.id)}
                className={`p-4 rounded-[14px] border-2 border-[#09090B] transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#FFFFFF] shadow-hard'
                    : 'bg-[#F8F4E8] opacity-75 hover:opacity-100'
                }`}
                data-cursor="pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-[5px] border-2 border-[#09090B] flex items-center justify-center transition-colors shrink-0 ${
                      isSelected ? 'bg-[#D2E823]' : 'bg-transparent'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#09090B]" />}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#09090B]">
                      {app.title}
                    </h3>
                    <p className="text-xs text-[#09090B]/70">
                      {app.summary}
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono-code shrink-0">
                  <div className="text-sm font-bold text-[#09090B] tabular-nums">
                    {app.watts}W
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 5 Columns: Recommended Bundle */}
        <div className="lg:col-span-5 p-6 bg-[#FFFFFF] border-2 border-[#09090B] rounded-[18px] shadow-hard-lg space-y-5">
          <div>
            <div className="font-mono-code text-xs font-semibold text-[#09090B]/70 mb-2">
              Payment Option
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['Outright Payment', '3-Month Plan', '6-Month Plan'] as const).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`py-2 px-2 text-xs font-bold border-2 border-[#09090B] rounded-[8px] transition-colors whitespace-nowrap shrink-0 truncate ${
                    selectedPlan === plan
                      ? 'bg-[#09090B] text-[#D2E823]'
                      : 'bg-[#F8F4E8] text-[#09090B] hover:bg-[#D2E823]/50'
                  }`}
                  data-cursor="pointer"
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t-2 border-[#09090B] space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono-code text-[#09090B]/75">
              <span>Your Total Load</span>
              <span className="font-bold text-[#09090B] tabular-nums">{totalWatts.toLocaleString()} Watts</span>
            </div>

            <div className="p-3 bg-[#F8F4E8] border border-[#09090B] rounded-[10px]">
              <div className="font-mono-code text-[11px] text-[#09090B]/70">
                Recommended System
              </div>
              <div className="font-display text-base font-bold text-[#09090B]">
                {recommendedBundle.name}
              </div>
              <div className="font-mono-code text-xs text-[#09090B]/80 mt-0.5">
                {recommendedBundle.edition}
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-2">
              <span className="font-display text-base font-bold text-[#09090B]">
                {selectedPlan === 'Outright Payment'
                  ? 'Total Price'
                  : selectedPlan === '3-Month Plan'
                  ? 'Monthly (x3)'
                  : 'Monthly (x6)'}
              </span>
              <span className="font-mono-code text-2xl sm:text-3xl font-bold text-[#09090B] tabular-nums">
                ₦
                {selectedPlan === 'Outright Payment'
                  ? recommendedBundle.price.toLocaleString()
                  : selectedPlan === '3-Month Plan'
                  ? Math.round((recommendedBundle.price * 1.05) / 3).toLocaleString()
                  : Math.round((recommendedBundle.price * 1.08) / 6).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={handleAddRecommended}
            className="w-full btn-hard py-3 text-sm flex items-center justify-center gap-2"
            data-cursor="pointer"
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Quote</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add Recommended System</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
