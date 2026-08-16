import React, { useState } from 'react';
import { Scissors, Instagram, Eye, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      url: '/images/trendy-herenkapsel-burst-fade-amsterdam.webp',
      title: 'Trendy Burst Fade & Taper',
      category: 'Fade'
    },
    {
      url: '/images/baard-lijnen-strak-maken-amsterdam.webp',
      title: 'Hot Razor Beard Line Shaping',
      category: 'Beard'
    },
    {
      url: '/images/krullend-haar-knippen-amsterdam-barber.webp',
      title: 'Curly Hair Styling & Texture Cut',
      category: 'Styling'
    },
    {
      url: '/images/heren-opscheren-fade-herenkapper-amsterdam.webp',
      title: 'Zero Skin Fade Artistry',
      category: 'Fade'
    },
    {
      url: '/images/baard-trimmen-amsterdam-gold-clipper.webp',
      title: 'Gold Clipper Beard Trim',
      category: 'Grooming'
    },
    {
      url: '/images/professionele-wahl-trimmer-barber-gerei.webp',
      title: 'Artisan Equipment & Wahl Tools',
      category: 'Shop'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#0B0D11] text-white relative border-t border-[#20242D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DAA520] uppercase block mb-2 font-sans">
              PORTFOLIO OF CRAFT
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
              Recent Cuts & Styles
            </h2>
          </div>

          <a
            href={BUSINESS_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#DAA520] hover:text-[#F3E5AB] transition-colors self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @citycenterbarbershop on Instagram</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.url)}
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#161920] border border-[#262B35] cursor-pointer shadow-md"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-center">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#DAA520] self-end">
                  {item.category}
                </span>
                <div className="flex flex-col items-center">
                  <Eye className="w-5 h-5 text-white mb-1" />
                  <span className="text-xs font-bold text-white leading-tight">
                    {item.title}
                  </span>
                </div>
                <div className="h-2"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
        >
          <div className="relative max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#DAA520]/40 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="High resolution cut showcase"
              className="w-full h-auto max-h-[80vh] object-contain bg-black"
            />
          </div>
        </div>
      )}

    </section>
  );
};
