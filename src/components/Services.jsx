import React from 'react';
import { content } from '../data/content';
import { Settings2, Factory, Cog, Wrench } from 'lucide-react';

const icons = [
  <Settings2 size={28} />,
  <Factory size={28} />,
  <Cog size={28} />,
  <Wrench size={28} />
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E10600] font-bold tracking-wider text-sm mb-2 block uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">OUR SERVICES</h2>
          <p className="max-w-[60ch] mx-auto text-gray-600 text-lg">Comprehensive engineering solutions under one roof. From raw materials to precision finished parts.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {(content.services || []).map((service, idx) => (
            <div key={service.id} className="relative rounded-[24px] overflow-hidden group flex flex-col h-full min-h-[400px]">
              <div className="absolute inset-0 z-0">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/35 to-[#0A0C10]/95" />
              </div>
              
              <div className="relative z-10 p-8 flex flex-col h-full text-white justify-end mt-auto">
                <div className="mb-6 bg-[#E10600] w-[56px] h-[56px] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {icons[idx]}
                </div>
                <h3 className="text-3xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {(service.details || []).map(detail => (
                    <span key={detail} className="px-3 py-1 bg-white/10 text-sm font-medium text-white rounded-full border border-white/5">
                      {detail}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex items-center text-white font-bold uppercase tracking-wider text-sm group-hover:text-[#E10600] transition-colors cursor-pointer w-fit">
                  <span className="border-b-2 border-transparent group-hover:border-[#E10600] pb-1 transition-all">Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform text-[#E10600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E10600]/50 rounded-[24px] pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;