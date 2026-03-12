import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import gce4 from '../assets/gce4.jpeg';
import libraryEntrance from '../assets/training/library.jpeg';
import mainCampus from '../assets/maincampus.jpeg';
import placement from '../assets/placement photo.jpeg';
import research from '../assets/research.jpeg';

const images = [
  { src: mainCampus, alt: 'Campus Building with Fountain', caption: 'Campus Infrastructure' },
  { src: gce4, alt: 'Sports Ground', caption: 'Sports Facilities' },
  { src: placement, alt: 'Students in Placement Training', caption: 'Placement & Training' },
  { src: libraryEntrance, alt: 'Central Library Entrance', caption: 'Library Facilities' },
  { src: research, alt: 'Laboratories', caption: 'Laboratory Facilities' },
];

const AUTOPLAY_INTERVAL = 4000; // 4 seconds

export const CampusGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, []);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-24 bg-[var(--bg)] border-b border-white/5 relative z-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7 }}
           className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#00d4ff1a] border border-[#00d4ff4d] px-4 py-1.5 rounded-full text-[0.78rem] font-medium text-[var(--primary)] mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse-slow"></span>
            Campus Tour
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-extrabold mb-4">
            Campus <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-[var(--text2)] max-w-[600px] mx-auto">
            Explore the vibrant and modern infrastructure of Government College of Engineering, Erode.
          </p>
        </motion.div>

        {/* Gallery Slider */}
        <div className="relative max-w-[1000px] mx-auto flex items-center justify-center group">
          {/* Navigation Buttons - visible on hover for desktop, persistent for mobile */}
          <button
            onClick={prevSlide}
            className="absolute z-10 left-0 md:-left-6 lg:-left-12 p-3 rounded-full bg-[var(--surface)] hover:bg-[var(--primary)] hover:text-black border border-[var(--border)] hover:border-transparent text-[var(--text)] backdrop-blur-md shadow-lg transition-all duration-300 md:opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-[var(--border)] bg-[var(--surface)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay & Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020c18] via-[#020c18]/60 to-transparent pt-32 pb-8 px-8 flex flex-col justify-end">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-white font-[Noto_Sans_Tamil,sans-serif] font-bold text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-lg mb-2">
                      {images[currentIndex].caption}
                    </h3>
                    <div className="w-12 h-1 bg-[var(--primary)] rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute z-10 right-0 md:-right-6 lg:-right-12 p-3 rounded-full bg-[var(--surface)] hover:bg-[var(--primary)] hover:text-black border border-[var(--border)] hover:border-transparent text-[var(--text)] backdrop-blur-md shadow-lg transition-all duration-300 md:opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex 
                  ? 'bg-[var(--primary)] w-8' 
                  : 'bg-[var(--text3)] opacity-30 hover:opacity-100 w-2'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
