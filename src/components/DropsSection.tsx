import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, Check } from 'lucide-react';
import { PaymentPlan, Product } from '../types';
import { ProductVisual } from './ProductVisual';

interface DropsSectionProps {
  products: Product[];
  onAddToCart: (product: Product, size?: PaymentPlan) => void;
  onOpenQuickView: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const DropsSection: React.FC<DropsSectionProps> = ({
  products,
  onAddToCart,
  onOpenQuickView,
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (product.isSoldOut) return;
    onAddToCart(product, 'Outright Payment');
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  const filteredProducts =
    selectedCategory === 'ALL'
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const categories = [
    { id: 'ALL', label: 'All Bundles' },
    { id: '1–2 Bed Flat', label: '1–3 Bed Flats' },
    { id: 'Duplex & AC', label: 'Duplex & AC' },
    { id: 'Remote Work', label: 'Plug & Play' },
    { id: 'Heavy Duty', label: '10kVA+ Heavy Duty' },
  ];

  return (
    <section id="drops" className="max-w-7xl mx-auto px-4 md:px-8 py-14 scroll-mt-20">
      {/* Header */}
      <div className="flex items-end justify-between gap-6 mb-6 pb-4 border-b-2 border-[#09090B]">
        <div>
          <p className="font-mono-code text-xs text-[#09090B]/70 font-semibold mb-1">
            03. Complete Packages
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#09090B] tracking-tight">
            Solar &amp; Inverter Bundles
          </h2>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scroll('left')}
            className="p-3 bg-[#F8F4E8] text-[#09090B] border-2 border-[#09090B] rounded-[8px] shadow-hard-sm hover:bg-[#D2E823] transition-all"
            aria-label="Scroll bundles left"
            data-cursor="pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 bg-[#09090B] text-[#D2E823] border-2 border-[#09090B] rounded-[8px] shadow-hard-sm hover:bg-[#D2E823] hover:text-[#09090B] transition-all"
            aria-label="Scroll bundles right"
            data-cursor="pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-[8px] border-2 border-[#09090B] whitespace-nowrap shrink-0 transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#09090B] text-[#D2E823] shadow-hard-sm'
                : 'bg-[#F8F4E8] text-[#09090B] hover:bg-[#D2E823]/60'
            }`}
            data-cursor="pointer"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bundles Cards */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2 px-1"
      >
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            onClick={() => onOpenQuickView(product)}
            className="w-[340px] sm:w-[370px] shrink-0 bg-[#F8F4E8] border-2 border-[#09090B] rounded-[16px] shadow-hard-lg flex flex-col justify-between overflow-hidden transition-transform duration-150 hover:-translate-y-1 cursor-pointer group"
            data-cursor="pointer"
          >
            <div className="relative w-full aspect-[4/3] border-b-2 border-[#09090B] bg-[#121215] overflow-hidden">
              <ProductVisual
                type={product.visualType}
                imageUrl={product.imageUrl}
                alt={`${product.name} — ${product.client}`}
                isSoldOut={product.isSoldOut}
                className="w-full h-full"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono-code text-[#09090B]/65 mb-1.5">
                  <span>{product.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.edition}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#09090B] mb-2 leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs font-mono-code font-semibold text-[#09090B] bg-[#D2E823]/55 px-2.5 py-1.5 rounded-[6px] mb-4">
                  {product.impactHeadline}
                </p>
              </div>

              <div className="pt-3.5 border-t-2 border-[#09090B] flex items-center justify-between gap-3">
                <span className="font-mono-code text-base font-bold text-[#09090B] tabular-nums">
                  ₦{product.price.toLocaleString()}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuickView(product);
                    }}
                    className="px-3 py-1.5 bg-[#F8F4E8] text-[#09090B] border-2 border-[#09090B] rounded-[8px] text-xs font-bold hover:bg-[#D2E823] transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                    data-cursor="pointer"
                  >
                    <span>Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => handleAdd(e, product)}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 border-2 border-[#09090B] rounded-[8px] text-xs font-bold whitespace-nowrap shrink-0 transition-all shadow-hard-sm ${
                      addedProductId === product.id
                        ? 'bg-[#D2E823] text-[#09090B]'
                        : 'bg-[#09090B] text-[#D2E823] hover:bg-[#D2E823] hover:text-[#09090B]'
                    }`}
                    data-cursor="pointer"
                  >
                    {addedProductId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
