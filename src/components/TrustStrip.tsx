import React from 'react';
import { Star, Clock, DoorOpen, MapPin, CreditCard, Award, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#16191E] border-y border-[#262B35] py-4 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-between">
          
          {/* Trust Metric 1: Rating */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#0F1115]/70 border border-[#262B35]">
            <div className="w-10 h-10 rounded-lg bg-[#DAA520]/15 border border-[#DAA520]/30 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#DAA520] fill-[#DAA520]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-heading text-lg font-bold text-white leading-tight">4.9 / 5.0</span>
                <span className="text-[10px] bg-[#DAA520]/20 text-[#DAA520] px-1.5 py-0.2 rounded font-semibold">Google</span>
              </div>
              <p className="text-xs text-neutral-400 font-medium">1,343 Verified Reviews</p>
            </div>
          </div>

          {/* Trust Metric 2: Walk-ins */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#0F1115]/70 border border-[#262B35]">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <DoorOpen className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-heading text-lg font-bold text-white leading-tight block">Walk-Ins Welcome</span>
              <p className="text-xs text-neutral-400 font-medium">No Appointment Needed</p>
            </div>
          </div>

          {/* Trust Metric 3: Location */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#0F1115]/70 border border-[#262B35]">
            <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <span className="font-heading text-lg font-bold text-white leading-tight block">Stationsplein 41M</span>
              <p className="text-xs text-neutral-400 font-medium">Across Centraal Station</p>
            </div>
          </div>

          {/* Trust Metric 4: Hours */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#0F1115]/70 border border-[#262B35]">
            <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <span className="font-heading text-lg font-bold text-white leading-tight block">Open 7 Days</span>
              <p className="text-xs text-neutral-400 font-medium">Mon–Sat until 20:00</p>
            </div>
          </div>

          {/* Trust Metric 5: Payment / Quality (visible on large screens, or column 5) */}
          <div className="hidden lg:flex items-center gap-3 p-2 rounded-xl bg-[#0F1115]/70 border border-[#262B35]">
            <div className="w-10 h-10 rounded-lg bg-[#DAA520]/15 border border-[#DAA520]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#DAA520]" />
            </div>
            <div>
              <span className="font-heading text-lg font-bold text-white leading-tight block">Satisfaction First</span>
              <p className="text-xs text-neutral-400 font-medium">100% Quality Guaranteed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
