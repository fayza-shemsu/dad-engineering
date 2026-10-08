import React from 'react';
import { content } from '../data/content';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CraneRental = () => {
  return (
    <section id="crane-rental" className="pt-16 md:pt-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-16">
          <span className="text-[#E10600] font-bold tracking-wider text-sm mb-2 block uppercase">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">HEAVY CRANE RENTAL</h2>
          <p className="max-w-[60ch] mx-auto text-gray-600 text-lg">We provide reliable crane rental services from 30 tons up to 100 tons for construction, industrial installations, and heavy lifting projects.</p>
        </div>
        
        {/* Featured 100 Ton Card */}
        {content.cranes && content.cranes.length > 0 && (
          <div className="rounded-[24px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12 flex flex-col lg:flex-row group bg-[#0B0D10]">
            <div className="lg:w-3/5 relative overflow-hidden min-h-[400px]">
              <div className="absolute top-6 left-6 z-10 bg-[#E10600] text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                FLAGSHIP &middot; 100 TON
              </div>
              <img src={content.cranes[0].image} alt={content.cranes[0].capacity} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
            </div>
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative">
              <div className="w-12 h-1 bg-[#E10600] mb-6"></div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4 uppercase">{content.cranes[0].capacity}</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{content.cranes[0].spec}</p>
              
              <ul className="space-y-3 mb-10">
                {(content.cranes[0].facts || []).map((fact, i) => (
                  <li key={i} className="flex items-center text-gray-400 font-medium">
                    <CheckCircle size={18} className="text-[#E10600] mr-3 shrink-0" /> {fact}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a href="#contact" onClick={() => { const s = document.getElementById('contact-service-select'); if (s) s.value = 'Crane Rental'; }} className="bg-[#E10600] text-white h-[48px] px-8 rounded-[12px] font-bold hover:bg-red-700 transition-all uppercase tracking-wider text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center">
                  Request this crane
                </a>
                <a href={`tel:${content.company.phone.replace(/[^+\d]/g, '')}`} className="bg-transparent border-2 border-white/20 text-white h-[48px] px-8 rounded-[12px] font-bold hover:bg-white/10 transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Other Cranes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {(content.cranes || []).slice(1).map((crane, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all flex flex-col h-full group hover:-translate-y-1.5"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full tracking-wider shadow-sm flex items-center gap-1.5">
                  <Phone size={12} className="text-[#E10600]" /> Capacity on request
                </div>
                <img src={crane.image} alt={crane.capacity} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E10600]/30 rounded-[24px] transition-colors duration-500 pointer-events-none z-20"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow text-center items-center">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{crane.capacity}</h3>
                <p className="text-gray-500 mb-8 flex-grow">{crane.spec}</p>
                <a href="#contact" onClick={() => { const s = document.getElementById('contact-service-select'); if (s) s.value = 'Crane Rental'; }} className="mt-auto inline-flex items-center justify-center border-2 border-[#E10600] text-[#E10600] h-[48px] px-6 rounded-[12px] font-bold hover:bg-[#E10600] hover:text-white transition-colors uppercase tracking-wider text-sm w-full gap-2">
                  Request <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How Crane Rental Works */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-12 uppercase">How Crane Rental Works</h3>
          <div className="relative flex flex-col md:flex-row justify-between gap-8">
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0">
              <motion.div 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.5, ease: "easeInOut" }} 
                className="h-full bg-[#E10600] origin-left"
              />
            </div>
            
            {(content.craneRentalSteps || []).map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center flex-1">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#E10600] text-[#E10600] flex items-center justify-center font-bold text-xl mb-4 shadow-sm">
                  {step.num}
                </div>
                <h4 className="font-bold text-gray-900">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA STRIP */}
      <div className="relative w-full py-20 overflow-hidden">
        <img src={content.cranes?.[0]?.image || content.hero?.bgImage} alt="Crane CTA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0B0D10]/85 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 uppercase">Need a crane this week? Call us now</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${content.company.phone.replace(/[^+\d]/g, '')}`} className="bg-[#E10600] text-white h-[56px] px-8 rounded-[12px] font-bold hover:bg-red-700 transition-all uppercase tracking-wider text-sm shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3">
              <Phone size={20} /> {content.company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraneRental;