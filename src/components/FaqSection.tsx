import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/barbershopData';

interface FaqSectionProps {
  onOpenBookingModal?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBookingModal }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0B0D11] border-t border-[#262B35]/60 relative">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#DAA520]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#DAA520]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DAA520] uppercase font-sans">
              GOT QUESTIONS?
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-[#DAA520]">QUESTIONS</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about visiting City Center Barbershop at Amsterdam Central Station.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14171E] border-[#DAA520]/50 shadow-lg shadow-[#DAA520]/5'
                    : 'bg-[#12151B] border-[#262B35] hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-wide">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#DAA520] text-[#0F1115] rotate-180'
                        : 'bg-[#1F242D] text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-[#262B35]/40 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Assistance Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#14171E] to-[#181C25] border border-[#262B35] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#DAA520]/15 border border-[#DAA520]/30 flex items-center justify-center text-[#DAA520] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-white">Have another question or need a quick cut?</h4>
              <p className="text-xs text-neutral-400">Call our chair line or visit us directly at Stationsplein 41M.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1F242D] hover:bg-[#262C38] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-[#3A404D]"
            >
              <Phone className="w-3.5 h-3.5 text-[#DAA520]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            {onOpenBookingModal && (
              <button
                onClick={onOpenBookingModal}
                className="px-4 py-2.5 rounded-lg bg-[#DAA520] hover:bg-[#F3E5AB] text-[#0A0C0E] text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#DAA520]/20"
              >
                Book Chair
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
