import React, { useState } from 'react';
import { Scissors, Instagram, Eye, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { getSafeImageUrl, handleImageFallback } from '../utils/imageHelper';

interface GalleryItem {
  url: string;
  title: string;
  category: 'fades' | 'beard' | 'salon' | 'shop';
  categoryLabel: string;
}

export const GallerySection: React.FC<{ onOpenBookingModal?: () => void }> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      url: getSafeImageUrl('fresha-image-2.jpeg'),
      title: 'City Center Styling Stations & Illuminated Mirrors',
      category: 'salon',
      categoryLabel: 'Salon Interior'
    },
    {
      url: getSafeImageUrl('fresha-image-8.jpeg'),
      title: 'Precision Mid Skin Fade & Textured Top',
      category: 'fades',
      categoryLabel: 'Skin Fade'
    },
    {
      url: getSafeImageUrl('fresha-image-10.jpeg'),
      title: 'Hot Razor Beard Line Shaping & Sculpting',
      category: 'beard',
      categoryLabel: 'Beard Craft'
    },
    {
      url: getSafeImageUrl('fresha-image-9.png'),
      title: 'Taper Fade with Natural Curl Contour',
      category: 'fades',
      categoryLabel: 'Taper Fade'
    },
    {
      url: getSafeImageUrl('fresha-image-1.jpeg'),
      title: 'Stationsplein 41M Barbershop Lounge & Entrance',
      category: 'shop',
      categoryLabel: 'Atmosphere'
    },
    {
      url: getSafeImageUrl('fresha-image-11.jpeg'),
      title: 'Low Drop Fade & Modern French Crop',
      category: 'fades',
      categoryLabel: 'Modern Fade'
    },
    {
      url: getSafeImageUrl('fresha-image-3.jpeg'),
      title: 'Master Barber Workspace & Professional Chairs',
      category: 'salon',
      categoryLabel: 'Salon Interior'
    },
    {
      url: getSafeImageUrl('fresha-image-12.jpeg'),
      title: 'Classic Scissor Cut & Clean Neckline Taper',
      category: 'fades',
      categoryLabel: 'Classic Cut'
    },
    {
      url: getSafeImageUrl('fresha-image-13.png'),
      title: 'Signature Haircut + Precision Beard Combo',
      category: 'beard',
      categoryLabel: 'Cut & Beard'
    },
    {
      url: getSafeImageUrl('fresha-image-6.jpeg'),
      title: 'Amsterdam Centraal Barbershop Reception & Waiting Area',
      category: 'shop',
      categoryLabel: 'Atmosphere'
    },
    {
      url: getSafeImageUrl('trendy-herenkapsel-burst-fade-amsterdam.webp'),
      title: 'Burst Fade & Razor Sharp Hairline',
      category: 'fades',
      categoryLabel: 'Burst Fade'
    },
    {
      url: getSafeImageUrl('baard-trimmen-amsterdam-gold-clipper.webp'),
      title: 'Gold Clipper Beard Trim & Botanical Oil Treatment',
      category: 'beard',
      categoryLabel: 'Beard Grooming'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#0B0D11] text-white relative border-t border-[#20242D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DAA520] uppercase block mb-2 font-sans">
              AUTHENTIC CRAFT & ATMOSPHERE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
              Gallery & Portfolio
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

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {[
            { key: 'all', label: 'All Photos' },
            { key: 'fades', label: 'Fades & Haircuts' },
            { key: 'beard', label: 'Beard & Shaves' },
            { key: 'salon', label: 'Salon Stations' },
            { key: 'shop', label: 'Shop Atmosphere' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveCategory(tab.key);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                activeCategory === tab.key
                  ? 'bg-[#DAA520] text-[#0B0D11] border-[#DAA520] shadow-md shadow-[#DAA520]/20'
                  : 'bg-[#14171E] text-neutral-300 border-[#262B35] hover:border-[#DAA520]/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#161920] border border-[#262B35] hover:border-[#DAA520]/60 cursor-pointer shadow-lg transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageFallback(e)}
              />
              
              {/* Subtle Tag Badge */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] uppercase font-bold text-[#DAA520] border border-[#DAA520]/30">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 text-left">
                <div className="flex items-center gap-1.5 text-white text-xs font-bold mb-1">
                  <Eye className="w-3.5 h-3.5 text-[#DAA520]" />
                  <span>View Full Photo</span>
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-neutral-200 leading-snug line-clamp-2">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-[#1A1E26] hover:bg-[#DAA520] text-white hover:text-black flex items-center justify-center transition-all border border-[#2D3340]"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-20 w-11 h-11 rounded-full bg-[#1A1E26]/80 hover:bg-[#DAA520] text-white hover:text-black flex items-center justify-center transition-all border border-[#2D3340]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Image button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-20 w-11 h-11 rounded-full bg-[#1A1E26]/80 hover:bg-[#DAA520] text-white hover:text-black flex items-center justify-center transition-all border border-[#2D3340]"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-[#12141A] rounded-2xl overflow-hidden border border-[#DAA520]/40 shadow-2xl flex flex-col"
          >
            <div className="relative flex items-center justify-center bg-black max-h-[72vh]">
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageFallback(e)}
              />
            </div>

            {/* Bottom Bar in Lightbox */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#161922] border-t border-[#262B35]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DAA520] block mb-0.5">
                  {filteredItems[lightboxIndex].categoryLabel} • {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <p className="text-sm font-semibold text-white">
                  {filteredItems[lightboxIndex].title}
                </p>
              </div>

              {onOpenBookingModal && (
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenBookingModal();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#C59B27] via-[#DAA520] to-[#F3E5AB] text-[#0F1115] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shrink-0 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Style</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
