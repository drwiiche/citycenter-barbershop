import React from 'react';
import { MapPin, Clock, Navigation, Phone, MessageCircle, Train, Bus, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, HOURS_LIST } from '../data/barbershopData';
import { getShopStatus } from '../utils/timeHelper';

export const LocationHoursSection: React.FC = () => {
  const status = getShopStatus();

  // Highlight today's day in the hours table
  const currentDayIndex = new Date().getDay(); // 0 Sun, 1 Mon...
  // In HOURS_LIST, index 0 is Monday ... index 6 is Sunday
  const listIndexToday = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <section id="hours-map" className="py-16 md:py-24 bg-[#0F1115] relative border-t border-[#262B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DAA520]/10 border border-[#DAA520]/30 text-[#DAA520] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Us & Operating Hours</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            Centrally Located at Amsterdam Centraal
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Zero detour. Stepping out of Amsterdam Central Station puts you right in front of our door at Stationsplein 41M.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours & Address Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opening Hours Box */}
            <div className="p-6 rounded-2xl bg-[#16191E] border border-[#262B35] shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#262B35] mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#DAA520]/15 border border-[#DAA520]/30 flex items-center justify-center text-[#DAA520]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white uppercase">
                      Opening Hours
                    </h3>
                    <p className="text-xs text-neutral-400">Amsterdam Time (CET)</p>
                  </div>
                </div>

                <div className={`px-2.5 py-1 rounded-full text-xs font-bold border ${status.badgeColor}`}>
                  {status.statusText}
                </div>
              </div>

              {/* Day List */}
              <div className="space-y-2 text-xs sm:text-sm">
                {HOURS_LIST.map((h, i) => {
                  const isToday = i === listIndexToday;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between py-1.5 px-3 rounded-lg ${
                        isToday
                          ? 'bg-[#DAA520]/15 border border-[#DAA520]/40 text-[#DAA520] font-semibold'
                          : 'text-neutral-300 hover:bg-[#20252E]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520]"></span>}
                        <span>{h.day} {isToday && '(Today)'}</span>
                      </span>
                      <span className="font-medium text-neutral-200">{h.hours}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-[#262B35] text-[11px] text-neutral-400">
                ⚡ Walk-ins accommodated all day. WhatsApp bookings prioritized during rush hours.
              </div>
            </div>

            {/* Address & Transit Guide Card */}
            <div className="p-6 rounded-2xl bg-[#16191E] border border-[#262B35] shadow-xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase">
                    Location & Landmarks
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-200 font-medium mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Directly on Stationsplein, right in front of the central tram/metro loops and station entrance.
                  </p>
                </div>
              </div>

              {/* Transit Icons */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#262B35]">
                <div className="p-2 rounded-lg bg-[#0F1115]/70 border border-[#262B35] flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#DAA520] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Train & Metro</span>
                    <span className="text-[10px] text-neutral-400">Centraal Station (1 min walk)</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#0F1115]/70 border border-[#262B35] flex items-center gap-2">
                  <Bus className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Tram Lines</span>
                    <span className="text-[10px] text-neutral-400">2, 4, 12, 13, 14, 17, 24</span>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#DAA520] via-[#E5B83B] to-[#DAA520] hover:from-[#E5B83B] hover:to-[#DAA520] text-[#0F1115] font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-lg shadow-[#DAA520]/20 active:scale-[0.98] border border-[#DAA520]/40"
              >
                <Navigation className="w-4 h-4 fill-[#0F1115]" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-75" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map Container */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#262B35] bg-[#16191E] shadow-2xl h-[420px] sm:h-[500px] lg:h-[560px] flex flex-col">
              
              {/* Map Top Info Overlay */}
              <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-[#0F1115]/90 backdrop-blur-md border border-[#262B35] shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight">City Center Barbershop</span>
                    <span className="text-[10px] text-[#DAA520]">Stationsplein 41M • 1012 AB Amsterdam</span>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#DAA520] hover:bg-[#E5B83B] text-[#0F1115] font-bold text-xs flex items-center gap-1 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Navigate</span>
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <iframe
                title="City Center Barbershop Amsterdam Map Location"
                src={BUSINESS_INFO.mapsEmbedUrl}
                className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Bottom Map Footer Bar */}
              <div className="p-3 bg-[#0F1115] border-t border-[#262B35] flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Luggage storage friendly during cuts</span>
                </span>
                <span className="text-[#DAA520] font-semibold">
                  📞 {BUSINESS_INFO.phone}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
