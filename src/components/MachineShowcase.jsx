import React, { useState, useEffect } from 'react';
import { machineGallery } from '../data/images';
import { content } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const MachineShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [showFullList, setShowFullList] = useState(false);
  
  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const categories = ['All', 'Presses & Bending', 'Rolling', 'Shearing & Punching', 'Drilling & Slotting', 'Milling', 'Lathes & Turning', 'Gear Machining'];
  
  const filtered = filter === 'All' ? machineGallery : machineGallery.filter(m => m.category === filter);
  
  // Handlers for Lightbox
  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="machinery" className="py-16 md:py-24 bg-[#F4F5F7] text-gray-900 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#E10600] font-bold tracking-wider text-sm mb-2 block uppercase">Equipment</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">MACHINERY SHOWCASE</h2>
          <p className="max-w-[60ch] mx-auto text-gray-600 text-lg">A glimpse into our 120+ machine capabilities.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors text-gray-700 hover:text-gray-900"
            >
              <span className="relative z-10">{cat}</span>
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-white shadow-sm border border-gray-200 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {(filtered || []).slice(0, 6).map((machine, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={machine.filename} 
                className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
                onClick={() => openLightbox(idx)}
              >
                <div className="h-56 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={`/images/web/${machine.filename}`} 
                    alt={machine.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-10" 
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-20 flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" size={32} />
                  </div>
                </div>
                <div className="p-5 border-t border-gray-50">
                  <h4 className="font-bold text-gray-900">{machine.caption}</h4>
                  <p className="text-sm text-[#E10600] font-medium mt-1">{machine.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowFullList(!showFullList)} 
            className="inline-flex items-center justify-center bg-transparent border-2 border-[#E10600] text-[#E10600] hover:bg-[#E10600] hover:text-white h-[48px] px-8 rounded-full font-bold uppercase tracking-wider transition-colors text-sm"
          >
            {showFullList ? 'Hide Full List' : 'View full equipment list'}
          </button>
        </div>

        <AnimatePresence>
          {showFullList && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 overflow-hidden"
            >
              <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Complete Equipment Inventory</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  {(content.equipmentCategories || []).map((cat, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-[#E10600] uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#E10600]" /> {cat.category}
                      </h4>
                      <ul className="space-y-2">
                        {cat.machines.map((mac, i) => (
                          <li key={i} className="text-gray-700 text-[15px] pl-4 border-l-2 border-gray-100 py-1">
                            <strong>{mac.brand}</strong> {mac.model}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B0D10]/95 backdrop-blur-sm flex items-center justify-center"
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
                src={`/images/web/${filtered[lightboxIndex].filename}`} 
                alt={filtered[lightboxIndex].caption} 
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl" 
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-bold text-xl">{filtered[lightboxIndex].caption}</h3>
                <p className="text-[#E10600] font-medium mt-1">{filtered[lightboxIndex].category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MachineShowcase;