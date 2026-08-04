import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FloralTopRight, FloralBottomLeft, FloatingPetals, RoseCenter } from './Ornaments';
import { SectionFrame } from './FrameBorder';

const Galeri: React.FC = () => {
  const images = [
    "/DSC_1980.jpg",
    "/DSC_2030.jpg",
    "/DSC_2129.jpg",
    "/WhatsApp Image 2026-08-04 at 18.53.43.jpeg",
    "/DSC_2263.jpg",
    "/DSC_2369.jpg",
    "/DSC_2379.jpg",
    "/DSC_2434.jpg",
    "/DSC_2462.jpg",
    "/DSC_2501.jpg",
    "/DSC_2591.jpg",
    "/DSC_2652.jpg",
    "/DSC_2862.jpg",
    "/DSC_2902.jpg",
    "/DSC_3041.jpg"
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeri" className="py-24 bg-secondary relative overflow-hidden">
      <FloatingPetals />
      <SectionFrame variant="garland-corners" opacity="opacity-85" />
      <RoseCenter className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-15 mix-blend-multiply pointer-events-none" />
      <FloralTopRight className="absolute top-0 right-0 p-2 md:p-4 opacity-60 pointer-events-none w-48 h-48 md:w-64 md:h-64" />
      <FloralBottomLeft className="absolute bottom-0 left-0 p-2 md:p-4 opacity-60 pointer-events-none w-48 h-48 md:w-64 md:h-64" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-heading mb-4">Galeri Momen</h2>
          <p className="text-textMain font-sans max-w-2xl mx-auto">Kisah cinta kami yang terabadikan dalam lensa.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-[4/5] group shadow-sm shadow-pink-100 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Fallback visual if images are missing initially */}
              <div className="w-full h-full bg-primary/20 flex items-center justify-center absolute inset-0 -z-10">
                <span className="text-white font-sans text-sm">Image {index + 1}</span>
              </div>
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10 transform-gpu will-change-transform"
                onError={(e) => {
                  e.currentTarget.src = `https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800`;
                }}
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-20" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button 
              onClick={showPrev}
              className="absolute left-2 md:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 md:p-4 z-10"
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[selectedIndex]}
              alt="Lightbox"
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.currentTarget.src = `https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200`;
              }}
            />

            <button 
              onClick={showNext}
              className="absolute right-2 md:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 md:p-4 z-10"
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galeri;
