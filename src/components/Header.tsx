import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Scissors, Calendar, Shield, Crown, ChevronDown, Instagram, Facebook, Youtube } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { getSafeImageUrl, handleImageFallback } from '../utils/imageHelper';

interface HeaderProps {
  onOpenBookingModal?: (serviceName?: string) => void;
  onOpenServicesModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal, onOpenServicesModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Utility / Announcement Bar */}
      <div className="bg-[#090A0D] text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#20242C] text-[#A0A5B2]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs">
          
          {/* Left: Location */}
          <div className="flex items-center gap-2 text-neutral-300">
            <Shield className="w-3.5 h-3.5 text-[#DAA520]" />
            <span>{BUSINESS_INFO.address}</span>
          </div>

          {/* Center: Walk-ins Welcome */}
          <div className="hidden md:flex items-center gap-1.5 font-medium text-[#E5B83B]">
            <Crown className="w-3.5 h-3.5 text-[#DAA520]" />
            <span>Walk-ins Welcome</span>
          </div>

          {/* Right: Phone & Socials */}
          <div className="flex items-center gap-5 ml-auto">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-neutral-200 hover:text-[#DAA520] font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-[#DAA520]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-3 text-neutral-400">
              <a 
                href={BUSINESS_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="hover:text-[#DAA520] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={BUSINESS_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="hover:text-[#DAA520] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href={BUSINESS_INFO.socials.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="hover:text-[#DAA520] transition-colors text-[13px] font-bold"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.47V10.7a8.16 8.16 0 0 0 5.73 2.16V9.4a4.86 4.86 0 0 1-3.77-2.71h3.77z"/>
                </svg>
              </a>
              <a 
                href={BUSINESS_INFO.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="hover:text-[#DAA520] transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B0C0E]/98 backdrop-blur-md py-3 shadow-2xl border-b border-[#20242C]' 
            : 'bg-[#0F1115]/95 backdrop-blur-sm py-4 border-b border-[#20242C]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center group py-1" id="nav-brand-logo" aria-label="City Center Barbershop & Salon">
            <img 
              src={getSafeImageUrl("logo-2.webp")} 
              alt="City Center Barbershop & Salon Amsterdam" 
              className="h-10 sm:h-12 w-auto object-contain brightness-110 drop-shadow-[0_2px_12px_rgba(218,165,32,0.25)] transition-transform duration-300 group-hover:scale-105"
              onError={(e) => handleImageFallback(e)}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-wider text-neutral-300">
            <a 
              href="#" 
              className="text-[#DAA520] border-b-2 border-[#DAA520] pb-1 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="hover:text-[#DAA520] transition-colors pb-1"
            >
              About Us
            </a>
            <div className="relative group">
              <a 
                href="#services" 
                className="flex items-center gap-1 hover:text-[#DAA520] transition-colors pb-1"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </a>
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[#14171E] border border-[#262B35] rounded-xl p-2 min-w-[200px] shadow-2xl animate-in fade-in">
                <a href="#services" className="p-2 rounded-lg text-xs hover:bg-[#20252E] text-neutral-200">Haircut & Styling</a>
                <a href="#services" className="p-2 rounded-lg text-xs hover:bg-[#20252E] text-neutral-200">Beard Trim & Sculpting</a>
                <a href="#services" className="p-2 rounded-lg text-xs hover:bg-[#20252E] text-neutral-200">Hot Towel Shave</a>
                <a href="#services" className="p-2 rounded-lg text-xs hover:bg-[#20252E] text-neutral-200">Kids & Teens Haircut</a>
              </div>
            </div>
            <a 
              href="#barbers" 
              className="hover:text-[#DAA520] transition-colors pb-1"
            >
              Barbers
            </a>
            <a 
              href="#gallery" 
              className="hover:text-[#DAA520] transition-colors pb-1"
            >
              Gallery
            </a>
            <a 
              href="#faq" 
              className="hover:text-[#DAA520] transition-colors pb-1"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="hover:text-[#DAA520] transition-colors pb-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Gold Book Appointment Action Button */}
          <div className="flex items-center gap-3">
            <button
              id="header-book-btn"
              onClick={() => onOpenBookingModal ? onOpenBookingModal() : null}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E5B83B] via-[#D4AF37] to-[#C59B27] hover:from-[#F3E5AB] hover:to-[#DAA520] text-[#0A0C0E] font-bold px-4 sm:px-5 py-2.5 rounded-lg shadow-md shadow-[#DAA520]/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-[13px] uppercase tracking-wider border border-[#DAA520]/50"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0A0C0E] stroke-[2.5]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#16191E] border border-[#262B35] text-neutral-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0C0E]/98 border-t border-[#20242C] px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#14171E] hover:bg-[#20252E] text-neutral-200 border border-[#262B35]"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#14171E] hover:bg-[#20252E] text-neutral-200 border border-[#262B35]"
              >
                About Us
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#14171E] hover:bg-[#20252E] text-[#DAA520] border border-[#262B35]"
              >
                Services & Pricing
              </a>
              <a 
                href="#barbers" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#14171E] hover:bg-[#20252E] text-neutral-200 border border-[#262B35]"
              >
                Our Barbers
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#14171E] hover:bg-[#20252E] text-neutral-200 border border-[#262B35]"
              >
                Gallery
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#14171E] hover:bg-[#20252E] text-neutral-200 border border-[#262B35]"
              >
                FAQs
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#14171E] hover:bg-[#20252E] text-neutral-200 border border-[#262B35]"
              >
                Contact & Hours
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E5B83B] via-[#D4AF37] to-[#C59B27] text-[#0A0C0E] font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider shadow-lg shadow-[#DAA520]/20"
              >
                <Calendar className="w-4 h-4 text-[#0A0C0E]" />
                <span>Book Appointment Now</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

