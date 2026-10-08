import React, { useState, useEffect } from 'react';
import { facilityGallery } from '../data/images';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % facilityGallery.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + facilityGallery.length) % facilityGallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % facilityGallery.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + facilityGallery.length) % facilityGallery.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#0B0D10]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E10600] font-bold tracking-wider text-sm mb-2 block uppercase">Watch our workshop</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase">FACILITY & FLEET</h2>
          <p className="max-w-[60ch] mx-auto text-gray-400 text-lg">Take a look inside our workshop and see our heavy machinery in action.</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {(facilityGallery || []).map((img, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              key={idx} 
              className="relative overflow-hidden group rounded-2xl cursor-pointer break-inside-avoid bg-gray-900"
              onClick={() => openLightbox(idx)}
            >
              <img 
                src={`/images/web/${img.filename}`} 
                alt={img.caption} 
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-[#0B0D10]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 className="text-white absolute top-6 right-6 opacity-0 group-hover:opacity-100 drop-shadow-md" size={24} />
                <h4 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</h4>
                <p className="text-[#E10600] text-sm uppercase tracking-wider font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B0D10]/98 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-[#E10600] rounded-full p-2 transition-all">
              <X size={28} />
            </button>
            <button onClick={prevImage} className="absolute left-4 md:left-12 text-white/70 hover:text-white bg-white/10 hover:bg-[#E10600] rounded-full p-3 transition-all">
              <ChevronLeft size={32} />
            </button>
            <button onClick={nextImage} className="absolute right-4 md:right-12 text-white/70 hover:text-white bg-white/10 hover:bg-[#E10600] rounded-full p-3 transition-all">
              <ChevronRight size={32} />
            </button>
            
            <div className="max-w-5xl w-full px-12 md:px-24 flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <img 
                src={`/images/web/${facilityGallery[lightboxIndex].filename}`} 
                alt={facilityGallery[lightboxIndex].caption} 
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl" 
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-bold text-xl">{facilityGallery[lightboxIndex].caption}</h3>
                <p className="text-[#E10600] font-medium mt-1 uppercase tracking-wider text-sm">{facilityGallery[lightboxIndex].category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;