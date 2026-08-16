import React, { useState } from 'react';
import { Scissors, Shield, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Send, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';
import { getSafeImageUrl, handleImageFallback } from '../utils/imageHelper';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#08090C] text-neutral-400 border-t border-[#1C2029] pt-16 pb-24 md:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Column Grid matching the design image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#1C2029]">
          
          {/* Col 1: Logo, Bio, Social Icons */}
          <div className="space-y-4">
            <a href="#" className="flex items-center group py-1" aria-label="City Center Barbershop & Salon">
              <img 
                src={getSafeImageUrl("logo-2.webp")} 
                alt="City Center Barbershop & Salon Amsterdam" 
                className="h-9 sm:h-10 w-auto object-contain brightness-110"
                onError={(e) => handleImageFallback(e)}
              />
            </a>

            <p className="text-neutral-400 text-xs leading-relaxed font-normal">
              Precision cuts. Premium service. Timeless style at Amsterdam Centraal.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1 text-neutral-400">
              <a 
                href={BUSINESS_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-[#14171E] border border-[#262B35] flex items-center justify-center hover:text-[#DAA520] hover:border-[#DAA520]/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={BUSINESS_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-[#14171E] border border-[#262B35] flex items-center justify-center hover:text-[#DAA520] hover:border-[#DAA520]/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={BUSINESS_INFO.socials.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="w-8 h-8 rounded-lg bg-[#14171E] border border-[#262B35] flex items-center justify-center hover:text-[#DAA520] hover:border-[#DAA520]/50 transition-colors"
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
                className="w-8 h-8 rounded-lg bg-[#14171E] border border-[#262B35] flex items-center justify-center hover:text-[#DAA520] hover:border-[#DAA520]/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-[#DAA520] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#DAA520] transition-colors">Services & Prices</a></li>
              <li><a href="#barbers" className="hover:text-[#DAA520] transition-colors">Master Barbers</a></li>
              <li><a href="#reviews" className="hover:text-[#DAA520] transition-colors">Google Reviews (4.9★)</a></li>
              <li><a href="#gallery" className="hover:text-[#DAA520] transition-colors">Haircut Gallery</a></li>
              <li><a href="#faq" className="hover:text-[#DAA520] transition-colors">FAQs</a></li>
              <li><a href="#location" className="hover:text-[#DAA520] transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Col 3: SERVICES */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#DAA520] transition-colors">Haircut</a></li>
              <li><a href="#services" className="hover:text-[#DAA520] transition-colors">Beard Trim</a></li>
              <li><a href="#services" className="hover:text-[#DAA520] transition-colors">Hot Towel Shave</a></li>
              <li><a href="#services" className="hover:text-[#DAA520] transition-colors">Kids Haircut</a></li>
              <li><a href="#services" className="hover:text-[#DAA520] transition-colors">Hair Design</a></li>
              <li><a href="#services" className="hover:text-[#DAA520] transition-colors">Hair Wash</a></li>
            </ul>
          </div>

          {/* Col 4: CONTACT US */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              CONTACT US
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#DAA520] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DAA520] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#DAA520] transition-colors text-white font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DAA520] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#DAA520] transition-colors text-neutral-300">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-[#DAA520] shrink-0" />
                <span>Mon - Sun: 9AM - 8PM</span>
              </div>
            </div>
          </div>

          {/* Col 5: NEWSLETTER */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              NEWSLETTER
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Subscribe to get updates & exclusive offers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#14171E] border border-[#262B35] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DAA520]"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E5B83B] via-[#D4AF37] to-[#C59B27] hover:from-[#F3E5AB] hover:to-[#DAA520] text-[#0A0C0E] font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-md shadow-[#DAA520]/15 flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-950" />
                    <span>SUBSCRIBED!</span>
                  </>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <Send className="w-3 h-3 text-[#0A0C0E]" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} City Center Barbershop & Hair Salon Amsterdam. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

