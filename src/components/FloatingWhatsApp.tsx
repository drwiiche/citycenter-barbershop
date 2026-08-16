import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      {/* Floating Micro Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#16191E] text-white text-xs py-2 px-3.5 rounded-xl shadow-2xl border border-[#262B35] flex items-center gap-2 animate-in slide-in-from-bottom-3 duration-300 max-w-[220px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
          <span className="font-medium leading-tight">
            Barbers online! <strong className="text-emerald-400">Skip the wait</strong> on WhatsApp.
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Tiny arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#16191E] border-b border-r border-[#262B35] transform rotate-45"></div>
        </div>
      )}

      {/* Floating Round WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`${BUSINESS_INFO.whatsAppUrl}?text=${encodeURIComponent("Hi City Center Barbershop! I'd like to check today's wait time or reserve a slot at Stationsplein 41M.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 transition-transform hover:scale-110 active:scale-95 animate-pulse-green border-2 border-emerald-300/40"
        title="Chat on WhatsApp with City Center Barbershop"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
      </a>
    </div>
  );
};
