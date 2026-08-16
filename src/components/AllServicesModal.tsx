import React, { useState } from 'react';
import { X, Scissors, Clock, Sparkles, Check, Phone, MessageCircle, Star } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/barbershopData';
import { ServiceItem } from '../types';

interface AllServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const AllServicesModal: React.FC<AllServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectService
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'barber' | 'beard' | 'combo' | 'salon'>('all');

  if (!isOpen) return null;

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#12151B] border border-[#262B35] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DAA520] via-[#F3E5AB] to-[#DAA520]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1D222B] hover:bg-[#2A313D] text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center sm:text-left pr-10">
          <span className="text-xs font-bold text-[#DAA520] uppercase tracking-[0.2em] block mb-1">
            FULL CRAFT CATALOG
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
            Complete Services & Transparent Pricing
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Choose any service to reserve your chair or request current wait time.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              { key: 'all', label: 'All Services' },
              { key: 'barber', label: 'Haircuts & Fades' },
              { key: 'beard', label: 'Beard & Shaves' },
              { key: 'combo', label: 'Signature Combos' },
              { key: 'salon', label: 'Scalp & Styling' }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-[#E5B83B] to-[#D4AF37] text-[#0A0C0E] shadow-md shadow-[#DAA520]/20'
                    : 'bg-[#181C24] text-neutral-300 hover:bg-[#202632] border border-[#262B35]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services List (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="p-4 rounded-xl bg-[#161920] border border-[#262B35] hover:border-[#DAA520]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-[#DAA520] transition-colors">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="px-2 py-0.5 rounded-full bg-[#DAA520]/20 border border-[#DAA520]/40 text-[#DAA520] text-[10px] font-extrabold uppercase">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#DAA520]" />
                  <span>Duration: ~{service.duration}</span>
                </div>
              </div>

              <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#262B35]">
                <span className="font-heading text-xl sm:text-2xl font-black text-[#DAA520]">
                  {service.price}
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onSelectService(service.name);
                  }}
                  className="bg-gradient-to-r from-[#E5B83B] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DAA520] text-[#0A0C0E] font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all"
                >
                  Select & Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-4 border-t border-[#262B35] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <span>⚡ Walk-ins always welcome. Reservations guarantee zero waiting.</span>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[#DAA520] font-bold hover:underline"
            >
              Call: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
