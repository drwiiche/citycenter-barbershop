import React, { useState } from 'react';
import { Play, Calendar, Users, Scissors, Star, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface AboutSectionProps {
  onOpenBookingModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0F1115] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Cinematic Rounded Card */}
        <div className="bg-[#121419] border border-[#20252E] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Side: Cinematic Photo with Gold Play Button */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#262B35] group shadow-xl">
                <img
                  src="/images/herenkapper-aan-het-werk-amsterdam.webp"
                  alt="City Center Barbershop Amsterdam - Master Barbers at Work"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Neon Sign Text Overlay */}
                <div className="absolute top-6 left-6 right-6 text-center">
                  <span className="font-heading text-xs sm:text-sm tracking-[0.2em] text-[#DAA520] uppercase font-bold drop-shadow-[0_0_8px_rgba(218,165,32,0.8)]">
                    LEGENDS ARE NOT BORN THEY ARE CUT
                  </span>
                </div>

                {/* Center Gold Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#C59B27] via-[#DAA520] to-[#F3E5AB] flex items-center justify-center text-[#0F1115] shadow-2xl shadow-[#DAA520]/40 group-hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/40 cursor-pointer"
                    aria-label="Play virtual shop tour video"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#0F1115] text-[#0F1115] ml-1" />
                  </button>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[11px] sm:text-xs text-neutral-300 font-medium tracking-wider uppercase">
                    Watch Shop Video • City Center Barbershop Amsterdam
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Copy & 4 Statistics */}
            <div className="lg:col-span-6 flex flex-col text-left">
              
              {/* Gold Eyebrow */}
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DAA520] uppercase font-sans">
                  ABOUT CITY CENTER BARBERSHOP
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight mb-5 leading-tight">
                Precision. Style. Confidence.
              </h2>

              {/* Description */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Located right at Amsterdam Centraal (Stationsplein 41M), City Center Barbershop & Hair Salon brings precision craft grooming to residents, professionals, and international visitors. Over 1,300+ five-star Google reviews praise our master barbers, welcoming vibe, and immaculate attention to detail.
              </p>

              {/* 4 Statistics Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                
                {/* Stat 1 */}
                <div className="p-4 rounded-xl bg-[#181C24] border border-[#262B35] flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#DAA520]/15 flex items-center justify-center shrink-0 border border-[#DAA520]/30">
                    <Calendar className="w-5 h-5 text-[#DAA520]" />
                  </div>
                  <div>
                    <span className="font-heading text-xl sm:text-2xl font-black text-white block leading-tight">
                      10+
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">Years in Amsterdam</span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="p-4 rounded-xl bg-[#181C24] border border-[#262B35] flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#DAA520]/15 flex items-center justify-center shrink-0 border border-[#DAA520]/30">
                    <Users className="w-5 h-5 text-[#DAA520]" />
                  </div>
                  <div>
                    <span className="font-heading text-xl sm:text-2xl font-black text-white block leading-tight">
                      50K+
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">Happy Clients</span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="p-4 rounded-xl bg-[#181C24] border border-[#262B35] flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#DAA520]/15 flex items-center justify-center shrink-0 border border-[#DAA520]/30">
                    <Scissors className="w-5 h-5 text-[#DAA520]" />
                  </div>
                  <div>
                    <span className="font-heading text-xl sm:text-2xl font-black text-white block leading-tight">
                      1,340+
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">5-Star Reviews</span>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="p-4 rounded-xl bg-[#181C24] border border-[#262B35] flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#DAA520]/15 flex items-center justify-center shrink-0 border border-[#DAA520]/30">
                    <Star className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
                  </div>
                  <div>
                    <span className="font-heading text-xl sm:text-2xl font-black text-white block leading-tight">
                      4.9
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">Google Rating</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div>
                <button
                  id="more-about-us-btn"
                  onClick={() => setShowStoryModal(true)}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#E5B83B] via-[#D4AF37] to-[#C59B27] hover:from-[#F3E5AB] hover:to-[#DAA520] text-[#0A0C0E] font-bold text-xs sm:text-sm px-7 py-3 rounded-lg shadow-md shadow-[#DAA520]/20 uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] border border-[#DAA520]"
                >
                  MORE ABOUT US
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Interactive Video Modal with real shop video */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#161920] border border-[#262B35] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-[#262B35]">
              <div className="flex items-center gap-2">
                <span className="font-brand font-bold text-sm text-white uppercase tracking-wider">City Center Barbershop Amsterdam — Live Experience</span>
              </div>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-[#20252E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 text-center space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-black flex items-center justify-center border border-[#262B35]">
                <video
                  src="/images/hair-cutting-at-city-center-barbershop-amsterdam.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="text-left text-xs text-neutral-300">
                  <p className="font-semibold text-white">Stationsplein 41M, 1012 AB Amsterdam</p>
                  <p className="text-neutral-400">Open 7 days a week • Walk-ins always welcome</p>
                </div>
                <button
                  onClick={() => {
                    setShowVideoModal(false);
                    if (onOpenBookingModal) onOpenBookingModal();
                  }}
                  className="bg-gradient-to-r from-[#E5B83B] to-[#D4AF37] text-[#0A0C0E] font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider shrink-0"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story / About Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#161920] border border-[#262B35] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-[#262B35]">
              <div>
                <span className="text-xs font-bold text-[#DAA520] tracking-wider uppercase block">Our Heritage</span>
                <h3 className="font-heading text-2xl font-bold text-white uppercase">The Legend Standard</h3>
              </div>
              <button 
                onClick={() => setShowStoryModal(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-[#20252E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                Founded over a decade ago, Legend Barber Shop was established with a singular vision: to bring back the timeless heritage of traditional barbering while elevating it with state-of-the-art styling techniques.
              </p>
              <p>
                Every client who sits in our chairs receives bespoke consultation tailored to their facial profile, hair density, and lifestyle. From razor-sharp taper fades to soothing multi-layer hot towel straight razor shaves, our master craftsmen are dedicated to perfection.
              </p>
              <div className="grid grid-cols-2 gap-3 py-2 text-xs font-semibold text-white">
                <div className="p-3 rounded-lg bg-[#1D222B] border border-[#262B35]">
                  ✂️ 100% Sterile & Fresh Blades Every Cut
                </div>
                <div className="p-3 rounded-lg bg-[#1D222B] border border-[#262B35]">
                  🧴 Organic Botanical Grooming Tonics
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[#262B35] bg-[#121419] flex justify-end gap-3">
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-bold text-neutral-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowStoryModal(false);
                  if (onOpenBookingModal) onOpenBookingModal();
                }}
                className="bg-gradient-to-r from-[#E5B83B] to-[#D4AF37] text-[#0A0C0E] font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
