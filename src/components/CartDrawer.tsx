import React, { useState } from 'react';
import { ArrowRight, Check, Minus, Plus, Trash2, X } from 'lucide-react';
import { CartItem } from '../types';
import { ProductVisual } from './ProductVisual';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locationArea, setLocationArea] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (phoneNumber.trim().length < 8) {
      setFormError('Please enter a valid Nigerian phone / WhatsApp number.');
      return;
    }
    if (!locationArea.trim()) {
      setFormError('Please enter your area (e.g., Lekki Phase 1, Ikeja, Wuse II).');
      return;
    }
    setFormError(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
    }, 800);
  };

  const handleCloseAll = () => {
    setOrderConfirmed(false);
    setShowBookingForm(false);
    setClientName('');
    setPhoneNumber('');
    setLocationArea('');
    onClearCart();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#09090B]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#F8F4E8] border-l-2 border-[#09090B] h-full shadow-hard-xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#09090B] bg-[#F8F4E8]">
          <div>
            <h2 className="font-display text-lg md:text-xl font-bold text-[#09090B]">
              Your Solar Quote
            </h2>
            <p className="font-mono-code text-xs text-[#09090B]/70">
              {items.length} System{items.length === 1 ? '' : 's'} Selected
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border-2 border-[#09090B] rounded-[8px] bg-transparent hover:bg-[#D2E823] transition-colors"
            aria-label="Close solar quote drawer"
            data-cursor="pointer"
          >
            <X className="w-5 h-5 text-[#09090B]" />
          </button>
        </div>

        {/* Free Installation Banner */}
        <div className="px-6 py-2.5 bg-[#D2E823] border-b-2 border-[#09090B] font-mono-code text-xs font-bold text-[#09090B]">
          Includes Free Standard Installation in Lagos, Abuja &amp; PH
        </div>

        {/* Drawer Content */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {orderConfirmed ? (
            <div className="p-6 bg-white border-2 border-[#09090B] rounded-[16px] shadow-hard">
              <div className="w-11 h-11 bg-[#D2E823] border-2 border-[#09090B] rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-[#09090B]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#09090B] mb-2">
                Quote &amp; Site Audit Booked
              </h3>
              <p className="text-xs sm:text-sm text-[#09090B]/80 mb-4 leading-relaxed">
                Thank you, <span className="font-semibold text-[#09090B]">{clientName}</span>. Our lead engineer for <span className="font-semibold text-[#09090B]">{locationArea}</span> will message your WhatsApp (<span className="font-mono-code font-semibold text-[#09090B]">{phoneNumber}</span>) within 30 minutes.
              </p>
              <div className="p-3.5 bg-[#F8F4E8] border border-[#09090B] rounded-[8px] font-mono-code text-xs space-y-1.5 mb-5">
                <div className="flex justify-between">
                  <span className="text-[#09090B]/70">Quote ID:</span>
                  <span className="font-bold text-[#09090B]">VG-NG-9042</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#09090B]/70">Location:</span>
                  <span className="font-bold text-[#09090B]">{locationArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#09090B]/70">Total Value:</span>
                  <span className="font-bold text-[#09090B] tabular-nums">₦{subtotal.toLocaleString()}</span>
                </div>
              </div>
              <button
                onClick={handleCloseAll}
                className="w-full btn-hard py-3 text-xs"
                data-cursor="pointer"
              >
                Done
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-14">
              <h3 className="font-display text-lg font-bold text-[#09090B] mb-2">
                Your Quote is Empty
              </h3>
              <p className="text-xs sm:text-sm text-[#09090B]/75 max-w-xs mx-auto mb-6">
                Pick a solar bundle or use the Load Calculator to size your system.
              </p>
              <button
                onClick={onClose}
                className="btn-hard py-2.5 px-6 text-xs"
                data-cursor="pointer"
              >
                Browse Bundles
              </button>
            </div>
          ) : showBookingForm ? (
            <form onSubmit={handleSubmitBooking} className="space-y-4 bg-white p-5 border-2 border-[#09090B] rounded-[14px] shadow-hard-sm">
              <div className="flex items-center justify-between pb-2 border-b border-[#09090B]/15">
                <h3 className="font-display text-base font-bold text-[#09090B]">
                  Book Installation / Invoice
                </h3>
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="text-xs font-mono-code font-semibold text-[#09090B]/70 hover:text-[#09090B] underline"
                >
                  Back
                </button>
              </div>

              {formError && (
                <div className="p-2.5 bg-red-50 border border-red-600 rounded-[6px] text-xs text-red-700 font-medium">
                  {formError}
                </div>
              )}

              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#09090B] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Chidi Okafor"
                  required
                  className="w-full px-3 py-2 text-sm bg-[#F8F4E8] border-2 border-[#09090B] rounded-[8px] focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#09090B] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="0803 000 0000"
                  required
                  className="w-full px-3 py-2 text-sm bg-[#F8F4E8] border-2 border-[#09090B] rounded-[8px] focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs font-semibold text-[#09090B] mb-1">
                  City &amp; Area *
                </label>
                <input
                  type="text"
                  value={locationArea}
                  onChange={(e) => setLocationArea(e.target.value)}
                  placeholder="Lekki Phase 1, Lagos / Wuse II, Abuja"
                  required
                  className="w-full px-3 py-2 text-sm bg-[#F8F4E8] border-2 border-[#09090B] rounded-[8px] focus:outline-none focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hard py-3 text-xs flex items-center justify-center gap-2"
                data-cursor="pointer"
              >
                {isSubmitting ? (
                  <span>Generating Quote...</span>
                ) : (
                  <>
                    <span>Confirm &amp; Get Invoice</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="p-4 bg-white border-2 border-[#09090B] rounded-[12px] shadow-hard-sm flex gap-4"
              >
                <div className="w-20 h-20 border-2 border-[#09090B] rounded-[8px] overflow-hidden bg-[#121215] shrink-0">
                  <ProductVisual
                    type={item.product.visualType}
                    imageUrl={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display text-sm font-bold text-[#09090B] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="font-mono-code text-xs text-[#09090B]/70">
                        {item.size}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.size)}
                      className="text-[#09090B]/50 hover:text-red-600 transition-colors p-1"
                      title="Remove system"
                      data-cursor="pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#09090B]/15">
                    <div className="flex items-center border-2 border-[#09090B] rounded-[6px] overflow-hidden bg-[#F8F4E8]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                        className="px-2 py-1 hover:bg-[#D2E823] transition-colors"
                        aria-label="Decrease quantity"
                        data-cursor="pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 font-mono-code text-xs font-bold text-[#09090B] tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                        className="px-2 py-1 hover:bg-[#D2E823] transition-colors"
                        aria-label="Increase quantity"
                        data-cursor="pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-mono-code text-xs font-bold text-[#09090B] tabular-nums">
                      ₦{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {!orderConfirmed && items.length > 0 && !showBookingForm && (
          <div className="p-6 border-t-2 border-[#09090B] bg-white space-y-4">
            <div className="space-y-1.5 font-mono-code text-xs">
              <div className="flex justify-between text-[#09090B]/70">
                <span>Standard Installation:</span>
                <span className="font-bold text-[#09090B]">FREE</span>
              </div>
              <div className="flex justify-between text-[#09090B] font-bold text-sm pt-2 border-t border-[#09090B]/20">
                <span>Total Estimate:</span>
                <span className="tabular-nums">₦{subtotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => setShowBookingForm(true)}
              className="w-full btn-hard py-3.5 text-xs flex items-center justify-center gap-2"
              data-cursor="pointer"
            >
              <span>Proceed to Book Installation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
