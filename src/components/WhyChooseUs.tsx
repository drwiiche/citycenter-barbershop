import React from 'react';
import { Zap, MapPin, Award, Sparkles, MessageCircle, Clock, ShieldCheck, DollarSign } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      color: 'text-[#DAA520]',
      bgColor: 'bg-[#DAA520]/10 border-[#DAA520]/30',
      title: 'Skip-The-Wait WhatsApp Line',
      desc: 'No more waiting 45 minutes in line. Call or WhatsApp us ahead and we will coordinate your chair right when you arrive.'
    },
    {
      icon: MapPin,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      title: 'Prime Centraal Station Location',
      desc: 'At Stationsplein 41M — directly opposite the train exit. Perfect for commuters, local residents, and travelers on the go.'
    },
    {
      icon: Award,
      color: 'text-[#DAA520]',
      bgColor: 'bg-[#DAA520]/10 border-[#DAA520]/30',
      title: 'Master European & Modern Cut Barbers',
      desc: 'Our barbers specialize in precision scissor work, zero-gap skin fades, razor edge-ups, and luxury beard hot towel therapy.'
    },
    {
      icon: Clock,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/30',
      title: 'Open 7 Days with Late Evenings',
      desc: 'Open Monday to Saturday 09:00 to 20:00, and Sunday 10:00 to 18:00. Get groomed even after work or before a night out.'
    },
    {
      icon: Sparkles,
      color: 'text-[#DAA520]',
      bgColor: 'bg-[#DAA520]/10 border-[#DAA520]/30',
      title: 'Hospitality & English Fluent',
      desc: 'Warm, respectful environment where you are treated like a friend. English, Dutch, and international guests are always welcome.'
    },
    {
      icon: DollarSign,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      title: 'Honest, Transparent Pricing',
      desc: 'Haircuts from €25 with no surprise upcharges. Card and cash payments are both seamlessly accepted.'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#0F1115] relative border-t border-[#262B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DAA520]/10 border border-[#DAA520]/30 text-[#DAA520] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The City Center Advantage</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
            Why Amsterdam Trusts Us Every Day
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            We solve the biggest complaints in city-centre grooming: long unorganized queues, inconsistent cuts, and impersonal service.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#16191E] border border-[#262B35] hover:border-[#DAA520]/40 transition-all duration-200 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl ${b.bgColor} border flex items-center justify-center mb-5 shrink-0`}>
                  <Icon className={`w-6 h-6 ${b.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-2">
                  {b.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Action Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#16191E] via-[#16191E] to-[#DAA520]/10 border border-[#DAA520]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase">
              Need a quick haircut right now?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              Stationsplein 41M is just 2 minutes from your train platform. Check chair availability in 10 seconds.
            </p>
          </div>

          <a
            href={`${BUSINESS_INFO.whatsAppUrl}?text=${encodeURIComponent("Hi! I'm near Amsterdam Centraal. Is a chair open for a haircut right now?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-transform active:scale-[0.98] shadow-lg shrink-0 border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Check Current Wait Time</span>
          </a>
        </div>

      </div>
    </section>
  );
};
