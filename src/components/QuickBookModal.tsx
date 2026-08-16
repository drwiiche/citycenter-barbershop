import React, { useState } from 'react';
import { X, MessageCircle, Phone, Calendar, Clock, Scissors, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/barbershopData';
import { ServiceItem } from '../types';

interface QuickBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickBookModal: React.FC<QuickBookModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Classic Haircut'
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [preferredTime, setPreferredTime] = useState<string>('Today ASAP (Within 1 hour)');
  const [clientName, setClientName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const currentServiceObj = SERVICES.find(s => s.name === selectedService) || SERVICES[0];

  const handleWhatsAppBooking = () => {
    let msg = `Hi City Center Barbershop! 👋\n\nI would like to reserve a chair for:\n✂️ Service: ${selectedService} (${currentServiceObj.price})\n⏱️ Preferred Time: ${preferredTime}`;
    if (clientName.trim()) {
      msg += `\n👤 Name: ${clientName.trim()}`;
    }
    if (notes.trim()) {
      msg += `\n💬 Note: ${notes.trim()}`;
    }
    msg += `\n\nIs a slot available? Thanks!`;

    const url = `${BUSINESS_INFO.whatsAppUrl}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1115]/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#16191E] border border-[#262B35] rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DAA520] via-[#F3E5AB] to-emerald-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#20252E] hover:bg-[#2A313D] text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-[#DAA520] text-xs font-bold uppercase tracking-wider mb-1">
            <Scissors className="w-4 h-4" />
            <span>Fast-Track Chair Reservation</span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-tight">
            Skip The Wait
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            Pick your cut and message our barbers directly at Stationsplein 41M.
          </p>
        </div>

        {/* Service Selector */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Select Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#0F1115] border border-[#262B35] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#DAA520] font-medium"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} — from {s.price} ({s.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Time Selector */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              When are you coming?
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                'Today ASAP (In 30 mins)',
                'Today (In 1-2 hours)',
                'Later Today (Evening)',
                'Tomorrow Morning / Noon'
              ].map((timeOption) => (
                <button
                  key={timeOption}
                  type="button"
                  onClick={() => setPreferredTime(timeOption)}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    preferredTime === timeOption
                      ? 'bg-[#DAA520]/15 border-[#DAA520] text-[#DAA520] shadow-sm'
                      : 'bg-[#0F1115] border-[#262B35] text-neutral-300 hover:border-[#333A48]'
                  }`}
                >
                  {preferredTime === timeOption && <Check className="w-3.5 h-3.5 inline mr-1 text-[#DAA520]" />}
                  {timeOption}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Name */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Alex"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-[#0F1115] border border-[#262B35] rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#DAA520]"
            />
          </div>

          {/* Summary Box */}
          <div className="p-3 rounded-xl bg-[#0F1115] border border-[#262B35] flex items-center justify-between text-xs">
            <div>
              <span className="text-neutral-400 block">Selected:</span>
              <strong className="text-white font-semibold">{selectedService}</strong>
            </div>
            <div className="text-right">
              <span className="text-neutral-400 block">Starting from</span>
              <span className="text-[#DAA520] font-bold text-base font-heading">{currentServiceObj.price}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleWhatsAppBooking}
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-transform active:scale-[0.98] shadow-lg shadow-emerald-950/40 border border-emerald-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm on WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#20252E] hover:bg-[#2A313D] text-neutral-200 hover:text-white font-bold py-3.5 px-4 rounded-xl text-sm border border-[#262B35] transition-colors"
            >
              <Phone className="w-4 h-4 fill-neutral-200" />
              <span>Call Direct</span>
            </a>
          </div>

          <p className="text-center text-[11px] text-neutral-400">
            No pre-payment required. Pay in person by card or cash at Stationsplein 41M.
          </p>
        </div>
      </div>
    </div>
  );
};
