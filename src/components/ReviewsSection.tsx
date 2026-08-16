import React, { useState } from 'react';
import { Star, Scissors, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data/barbershopData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= REVIEWS.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-[#FFFFFF] text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#C59B27] uppercase block mb-2 font-sans">
            WHAT OUR CLIENTS SAY
          </span>

          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Happy Clients
          </h2>

          {/* Decorative Divider: — ✂ — */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-12 bg-[#DAA520]"></div>
            <Scissors className="w-4 h-4 text-[#DAA520]" />
            <div className="h-[1.5px] w-12 bg-[#DAA520]"></div>
          </div>
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <div className="hidden sm:flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 pointer-events-none z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400 flex items-center justify-center shadow-md pointer-events-auto transition-all hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400 flex items-center justify-center shadow-md pointer-events-auto transition-all hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-8 rounded-2xl bg-[#FAFAFA] border border-neutral-200/80 flex flex-col justify-between hover:shadow-lg hover:border-[#DAA520]/40 transition-all duration-300 group"
              >
                <div>
                  {/* User Avatar + Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#DAA520]/30 shadow-sm"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gold 5 Stars */}
                    <div className="flex items-center gap-1 text-[#DAA520]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#DAA520] text-[#DAA520]" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm sm:text-base text-neutral-700 italic leading-relaxed mb-6 font-normal">
                    "{review.content}"
                  </p>
                </div>

                {/* Author Name */}
                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#C59B27] transition-colors">
                      {review.author}
                    </h4>
                    <span className="text-xs text-neutral-400 font-medium">{review.role}</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Mobile pagination dots */}
          <div className="flex sm:hidden justify-center items-center gap-2 mt-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DAA520]"></span>
            <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
            <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
          </div>

        </div>

      </div>
    </section>
  );
};

