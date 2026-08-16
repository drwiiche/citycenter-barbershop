import React from 'react';
import { Scissors, Sparkles, ShieldCheck, Award } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      icon: Scissors,
      title: 'EXPERT BARBERS',
      description: 'Skilled & experienced professionals'
    },
    {
      icon: Sparkles,
      title: 'PREMIUM PRODUCTS',
      description: 'Top quality products for the best results'
    },
    {
      icon: ShieldCheck,
      title: 'CLEAN & HYGIENIC',
      description: 'We maintain the highest standards of hygiene'
    },
    {
      icon: Award,
      title: 'SATISFACTION GUARANTEED',
      description: 'Your satisfaction is our priority'
    }
  ];

  return (
    <section className="w-full bg-[#0B0D11] border-y border-[#20242D] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-2 rounded-xl group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#161920] border border-[#DAA520]/30 flex items-center justify-center shrink-0 group-hover:border-[#DAA520] group-hover:bg-[#DAA520]/10 transition-colors shadow-md">
                  <Icon className="w-5 h-5 text-[#DAA520] stroke-[2]" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-1 group-hover:text-[#DAA520] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-400 font-normal leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
