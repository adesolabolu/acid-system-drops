import React, { useState } from 'react';
import { BentoCategoryGrid } from './components/BentoCategoryGrid';
import { CartDrawer } from './components/CartDrawer';
import { CustomCursor } from './components/CustomCursor';
import { DropsSection } from './components/DropsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { ManifestoSection } from './components/ManifestoSection';
import { Navbar } from './components/Navbar';
import { NoiseOverlay } from './components/NoiseOverlay';
import { ProductModal } from './components/ProductModal';
import { SpecificationLaboratory } from './components/SpecificationLaboratory';
import { initialProducts } from './data/products';
import { CartItem, PaymentPlan, Product } from './types';

export default function App() {
  const [products] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: initialProducts[0],
      quantity: 1,
      size: 'Outright Payment',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (
    product: Product,
    size: PaymentPlan = 'Outright Payment'
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [...prev, { product, quantity: 1, size }];
    });
    showToast(`Added ${product.name} (${size}) to Quote`);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenQuickViewById = (productId: string) => {
    const found = products.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
      setIsProductModalOpen(true);
    }
  };

  const handleOpenQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleScrollToDrops = () => {
    const el = document.getElementById('drops');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToConfigurator = () => {
    const el = document.getElementById('laboratory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromBento = (category: string) => {
    setSelectedCategory(category);
    handleScrollToDrops();
  };

  return (
    <div className="min-h-screen bg-[#F8F4E8] text-[#09090B] flex flex-col relative selection:bg-[#D2E823] selection:text-[#09090B]">
      <NoiseOverlay />
      <CustomCursor />

      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          onExploreDrops={handleScrollToDrops}
          onOpenQuickView={handleOpenQuickViewById}
          onOpenScopeBuilder={handleScrollToConfigurator}
        />

        <MarqueeBanner theme="acid" />

        <BentoCategoryGrid onSelectCategory={handleSelectCategoryFromBento} />

        <DropsSection
          products={products}
          onAddToCart={handleAddToCart}
          onOpenQuickView={handleOpenQuickView}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <SpecificationLaboratory onAddCustomScope={handleAddToCart} />

        <ManifestoSection />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#09090B] text-[#D2E823] font-mono-code text-xs font-semibold border-2 border-[#09090B] rounded-[10px] shadow-hard flex items-center gap-2.5">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
