import React from 'react';
import { Scissors, Star, Calendar } from 'lucide-react';
import { MASTER_BARBERS } from '../data/barbershopData';
import { BarberItem } from '../types';
import { handleImageFallback } from '../utils/imageHelper';

interface BarbersSectionProps {
  onBookBarber?: (barberName: string) => void;
}

export const BarbersSection: React.FC<BarbersSectionProps> = ({ onBookBarber }) => {
  return (
    <section id="barbers" className="py-20 bg-[#0F1115] text-white relative border-t border-[#20242D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DAA520] uppercase block mb-2 font-sans">
            MEET THE ARTISANS
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
            Master Barbers
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base">
            Trained in classic barber traditions and modern precision fading. Pick your preferred craftsman or let us assign the next available chair.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTER_BARBERS.map((barber: BarberItem) => (
            <div
              key={barber.id}
              className="bg-[#14171E] rounded-2xl overflow-hidden border border-[#262B35] hover:border-[#DAA520]/60 transition-all duration-300 group shadow-xl flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#0A0C0E]">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageFallback(e)}
                />
                
                {/* Floating badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0F1115]/90 backdrop-blur-sm border border-[#DAA520]/40 text-[11px] font-bold text-[#DAA520]">
                  {barber.experience}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#14171E] via-transparent to-transparent"></div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#DAA520] transition-colors">
                    {barber.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[#DAA520] text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#DAA520]" />
                    <span>5.0</span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-[#DAA520] uppercase tracking-wider mb-2">
                  {barber.title}
                </p>

                <p className="text-xs text-neutral-400 mb-6">
                  Specialty: <span className="text-neutral-200">{barber.specialty}</span>
                </p>

                <button
                  onClick={() => onBookBarber ? onBookBarber(barber.name) : null}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1E232D] hover:bg-[#DAA520] text-neutral-200 hover:text-[#0F1115] font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all border border-[#2D3340] hover:border-[#DAA520]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {barber.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
