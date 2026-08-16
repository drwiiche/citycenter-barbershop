import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface HeroProps {
  onOpenBookingModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-[#0F1115]">
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DAA520]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#DAA520]/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Copy, Buttons, Rating */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* 1. Gold Eyebrow Tag */}
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DAA520] uppercase font-sans">
                {BUSINESS_INFO.eyebrow}
              </span>
            </div>

            {/* 2. Main Large Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-5">
              MORE THAN A CUT.<br />
              IT'S A <span className="text-[#DAA520]">LIFESTYLE.</span>
            </h1>

            {/* 3. Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 mb-8 leading-relaxed max-w-xl font-normal">
              {BUSINESS_INFO.subheading}
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                id="hero-book-appointment-btn"
                onClick={() => onOpenBookingModal ? onOpenBookingModal() : null}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#E5B83B] via-[#D4AF37] to-[#C59B27] hover:from-[#F3E5AB] hover:to-[#DAA520] text-[#0A0C0E] font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-lg shadow-[#DAA520]/25 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider border border-[#DAA520]"
              >
                <span>BOOK APPOINTMENT</span>
                <Calendar className="w-4 h-4 text-[#0A0C0E] stroke-[2.5]" />
              </button>

              <a
                id="hero-view-services-btn"
                href="#services"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all border border-[#3A404D] hover:border-neutral-400 uppercase tracking-wider"
              >
                VIEW SERVICES
              </a>
            </div>

            {/* 5. Client Social Proof Rating (Avatars + 5 Stars + 4.9 Rating) */}
            <div className="flex items-center gap-4 pt-2">
              {/* Stacked Avatars with real client photos */}
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0F1115] object-cover"
                  src="/images/tevreden-klant-herenkapper-amsterdam.webp"
                  alt="Customer avatar"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0F1115] object-cover"
                  src="/images/kapper-advies-herenkapsel-amsterdam-centrum.webp"
                  alt="Customer avatar"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0F1115] object-cover"
                  src="/images/nek-schoonmaken-nekborstel-barber-amsterdam.webp"
                  alt="Customer avatar"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0F1115] object-cover"
                  src="/images/jeugd-kapper-low-fade-amsterdam.webp"
                  alt="Customer avatar"
                />
              </div>

              {/* Star Rating & Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#DAA520] text-[#DAA520]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  4.9 <span className="font-normal text-neutral-400">({BUSINESS_INFO.reviewCount.toLocaleString()}+ Google Reviews)</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Model Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Subtle gold glow behind image */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#DAA520]/20 via-[#262B35] to-transparent blur-lg opacity-70"></div>
              
              {/* Sharp Barber Portrait */}
              <div className="relative rounded-2xl overflow-hidden border border-[#262B35] bg-[#14171E] shadow-2xl group">
                <img
                  src="/images/herenkapper-ervaring-amsterdam-centrum.webp"
                  alt="City Center Barbershop Amsterdam - Precision Haircut and Beard Styling"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle soft vignette overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/90 via-[#0F1115]/20 to-transparent pointer-events-none"></div>

                {/* Floating badge inside image */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#0F1115]/95 backdrop-blur-md border border-[#DAA520]/30 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#DAA520] tracking-wider uppercase block">Amsterdam Centraal</span>
                    <span className="text-xs font-semibold text-white">Stationsplein 41M • Walk-ins Always Welcome</span>
                  </div>
                  <span className="text-xs font-bold text-[#DAA520] px-2.5 py-1 rounded bg-[#DAA520]/15 border border-[#DAA520]/30 whitespace-nowrap">
                    ★ 4.9 (1.3K+)
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

