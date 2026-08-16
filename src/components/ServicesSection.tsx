import React from 'react';
import { Scissors, Sparkles, Droplet, Star, User, Flame } from 'lucide-react';
import { FEATURED_SERVICES } from '../data/barbershopData';
import { ServiceItem } from '../types';
import { handleImageFallback } from '../utils/imageHelper';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenAllServicesModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService, 
  onOpenAllServicesModal 
}) => {
  // Helper to render icon per service
  const renderServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case 'scissors':
        return <Scissors className="w-4 h-4 text-[#DAA520]" />;
      case 'razor':
        return <Flame className="w-4 h-4 text-[#DAA520]" />;
      case 'towel':
        return <Sparkles className="w-4 h-4 text-[#DAA520]" />;
      case 'child':
        return <User className="w-4 h-4 text-[#DAA520]" />;
      case 'star':
        return <Star className="w-4 h-4 text-[#DAA520]" />;
      case 'droplet':
        return <Droplet className="w-4 h-4 text-[#DAA520]" />;
      default:
        return <Scissors className="w-4 h-4 text-[#DAA520]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8F9FA] text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#C59B27] uppercase block mb-2 font-sans">
            OUR SERVICES
          </span>
          
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Services We Offer
          </h2>

          {/* Decorative Divider: — ✂ — */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-12 bg-[#DAA520]"></div>
            <Scissors className="w-4 h-4 text-[#DAA520]" />
            <div className="h-[1.5px] w-12 bg-[#DAA520]"></div>
          </div>
        </div>

        {/* 6 Services Grid (2 rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.name)}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-[#DAA520]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Service Top Image */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageFallback(e)}
                />
                
                {/* Floating Icon Pill */}
                <div className="absolute bottom-3 left-4 w-9 h-9 rounded-full bg-[#0F1115]/90 backdrop-blur-sm border border-[#DAA520]/40 flex items-center justify-center shadow-lg">
                  {renderServiceIcon(service.icon)}
                </div>
              </div>

              {/* Service Details & Pricing */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#C59B27] transition-colors">
                    {service.name}
                  </h3>
                  
                  {/* Price */}
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#DAA520] shrink-0">
                    {service.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Micro Action link on hover */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#C59B27] group-hover:text-neutral-900 transition-colors">
                  <span>Book Appointment</span>
                  <span className="text-neutral-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Services Center Button */}
        <div className="mt-14 text-center">
          <button
            id="view-all-services-btn"
            onClick={onOpenAllServicesModal}
            className="inline-flex items-center justify-center bg-[#0F1115] hover:bg-[#1A1E26] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all uppercase tracking-wider border border-[#262B35] hover:border-[#DAA520]/50"
          >
            VIEW ALL SERVICES
          </button>
        </div>

      </div>
    </section>
  );
};

