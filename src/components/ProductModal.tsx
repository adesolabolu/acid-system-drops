import React, { useEffect, useState } from 'react';
import { Check, Plus, X } from 'lucide-react';
import { PaymentPlan, Product } from '../types';
import { ProductVisual } from './ProductVisual';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: PaymentPlan) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<PaymentPlan>('Outright Payment');
  const [justAdded, setJustAdded] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const plans: PaymentPlan[] = ['Outright Payment', '3-Month Plan', '6-Month Plan'];

  const handleAdd = () => {
    onAddToCart(product, selectedPlan);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090B]/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F8F4E8] border-2 border-[#09090B] rounded-[20px] shadow-hard-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#09090B] bg-[#F8F4E8]">
          <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs text-[#09090B]/80">
            <span className="font-bold text-[#09090B]">{product.client}</span>
            <span aria-hidden="true">·</span>
            <span>{product.edition}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border-2 border-[#09090B] rounded-[8px] bg-transparent hover:bg-[#D2E823] transition-colors"
            aria-label="Close bundle specs modal"
            data-cursor="pointer"
          >
            <X className="w-5 h-5 text-[#09090B]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="relative w-full aspect-[4/3] border-2 border-[#09090B] rounded-[14px] overflow-hidden bg-[#121215] shadow-hard">
              <ProductVisual
                type={product.visualType}
                imageUrl={product.imageUrl}
                alt={product.name}
                isSoldOut={product.isSoldOut}
                className="w-full h-full"
              />
            </div>

            <div className="space-y-3 pt-1">
              <p className="text-xs sm:text-sm text-[#09090B]/85 leading-relaxed">
                {product.description}
              </p>
              <div>
                <div className="font-mono-code text-xs font-bold text-[#09090B] mb-1.5">
                  Included in Bundle
                </div>
                <ul className="space-y-1 text-xs text-[#09090B]/85 font-medium">
                  {product.materials.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span aria-hidden="true" className="font-mono-code font-bold text-[#09090B]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-[#09090B] mb-2 leading-tight">
                {product.name}
              </h2>

              <p className="text-xs font-mono-code font-semibold text-[#09090B] bg-[#D2E823] px-3 py-1.5 rounded-[6px] border border-[#09090B] inline-block mb-4">
                {product.impactHeadline}
              </p>

              {/* Specs Table */}
              <div className="border-2 border-[#09090B] rounded-[12px] overflow-hidden mb-5 bg-white">
                <div className="bg-[#09090B] text-[#D2E823] px-3.5 py-2 font-mono-code text-xs font-semibold">
                  Hardware Specifications
                </div>
                <div className="divide-y divide-[#09090B]/15 font-mono-code text-xs">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between px-3.5 py-2.5">
                      <span className="text-[#09090B]/70">{item.label}</span>
                      <span className="text-[#09090B] font-bold text-right tabular-nums">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Plan Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between font-mono-code text-xs text-[#09090B]/75 mb-2">
                  <span className="font-bold text-[#09090B]">Payment Plan</span>
                  <span>Free Lagos &amp; Abuja Install</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {plans.map((p) => (
                    <button
                      key={p}
                      onClick={() => setSelectedPlan(p)}
                      className={`py-2 px-2 font-mono-code text-xs font-bold border-2 border-[#09090B] rounded-[8px] transition-all whitespace-nowrap shrink-0 truncate ${
                        selectedPlan === p
                          ? 'bg-[#09090B] text-[#D2E823] shadow-hard-sm'
                          : 'bg-white text-[#09090B] hover:bg-[#D2E823]/60'
                      }`}
                      data-cursor="pointer"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full btn-hard py-3.5 text-sm flex items-center justify-center gap-2"
              data-cursor="pointer"
            >
              {justAdded ? (
                <>
                  <Check className="w-5 h-5 text-[#D2E823]" />
                  <span>Added to Quote ({selectedPlan})</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5 text-[#D2E823]" />
                  <span>
                    Add to Quote — ₦{product.price.toLocaleString()}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
