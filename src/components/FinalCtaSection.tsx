import React from 'react';
import { Phone, MessageCircle, Star, MapPin, Scissors, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface FinalCtaSectionProps {
  onOpenBookingModal?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0F1115] via-[#16191E] to-[#0F1115] relative overflow-hidden border-t border-[#262B35]">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-[#DAA520]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16191E] border border-[#DAA520]/30 text-[#DAA520] text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
          <Star className="w-4 h-4 fill-[#DAA520]" />
          <span>4.9★ Rated from 1,343 Google Reviews</span>
        </div>

        {/* Main Closing Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-4">
          Skip The Wait. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] via-[#F3E5AB] to-[#DAA520]">
            Call or WhatsApp Now.
          </span>
        </h2>

        {/* Subhead */}
        <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal">
          Whether you are stepping off the train or living in the heart of Amsterdam, your master barber is ready at <strong className="text-[#DAA520] font-semibold">Stationsplein 41M</strong>.
        </p>

        {/* Big Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-8">
          
          {/* WhatsApp CTA */}
          <a
            id="final-cta-whatsapp"
            href={`${BUSINESS_INFO.whatsAppUrl}?text=${encodeURIComponent("Hi City Center Barbershop! I'm coming to Stationsplein 41M and want to get a cut/trim today.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/30"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span>WhatsApp Us Now</span>
          </a>

          {/* Call CTA */}
          <a
            id="final-cta-call"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#DAA520] via-[#E5B83B] to-[#DAA520] hover:from-[#E5B83B] hover:to-[#DAA520] text-[#0F1115] font-bold text-lg py-4 px-6 rounded-2xl shadow-xl shadow-[#DAA520]/20 transition-all hover:scale-[1.02] active:scale-[0.98] border border-[#DAA520]/40"
          >
            <Phone className="w-5 h-5 fill-[#0F1115] text-[#0F1115]" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

        </div>

        {/* Address and Walk-in Note */}
        <div className="p-4 rounded-2xl bg-[#16191E] border border-[#262B35] max-w-lg mx-auto text-xs text-neutral-300 space-y-1.5 shadow-inner">
          <div className="flex items-center justify-center gap-2 text-white font-semibold">
            <MapPin className="w-4 h-4 text-[#DAA520]" />
            <span>{BUSINESS_INFO.address}</span>
          </div>
          <p className="text-neutral-400">
            Walk-ins welcome all day • Open 7 Days (Mon–Sat 09:00–20:00, Sun 10:00–18:00)
          </p>
        </div>

      </div>
    </section>
  );
};
