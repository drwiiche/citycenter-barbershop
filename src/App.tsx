/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BarbersSection } from './components/BarbersSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { QuickBookModal } from './components/QuickBookModal';
import { AllServicesModal } from './components/AllServicesModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Classic Haircut');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenAllServices = () => {
    setIsServicesModalOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#0F1115] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#DAA520] selection:text-[#0F1115]">
      {/* 1. Top Navigation & Brand Header */}
      <Header onOpenBookingModal={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="w-full flex-grow">
        {/* 2. Hero Section (Design Reference) */}
        <Hero onOpenBookingModal={() => handleOpenBooking()} />

        {/* 3. Feature Strip (Expert Barbers, Premium Products, Clean & Hygienic, Satisfaction Guaranteed) */}
        <FeatureStrip />

        {/* 4. Services We Offer Section (6 Cards with Photos & Gold Prices) */}
        <ServicesSection 
          onSelectService={(service) => handleOpenBooking(service)} 
          onOpenAllServicesModal={handleOpenAllServices}
        />

        {/* 5. About Us Cinematic Card with Video Play & Stats (10+ Yrs, 50K+ Clients, 15+ Barbers, 4.9 Rating) */}
        <AboutSection onOpenBookingModal={() => handleOpenBooking()} />

        {/* 6. What Our Clients Say / Happy Clients Carousel */}
        <ReviewsSection />

        {/* 7. Master Barbers Showcase */}
        <BarbersSection onBookBarber={(name) => handleOpenBooking(`Haircut with ${name}`)} />

        {/* 8. Recent Cuts & Styles Gallery */}
        <GallerySection onOpenBookingModal={() => handleOpenBooking()} />

        {/* 9. Frequently Asked Questions (Local SEO & SERP FAQ Accordion) */}
        <FaqSection onOpenBookingModal={() => handleOpenBooking()} />

        {/* 10. Location & Operating Hours */}
        <LocationHoursSection />

        {/* 10. Call to Action */}
        <FinalCtaSection onOpenBookingModal={() => handleOpenBooking()} />
      </main>

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 12. 5-Column Luxury Footer */}
      <Footer />

      {/* Interactive Quick Booking Modal */}
      <QuickBookModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />

      {/* Full Services Catalog Modal */}
      <AllServicesModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        onSelectService={(serviceName) => handleOpenBooking(serviceName)}
      />
    </div>
  );
}

