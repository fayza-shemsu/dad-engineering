import React from 'react';
import { content } from '../data/content';
import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">WHY CHOOSE DAD ENGINEERING WORKSHOP</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(content.whyUs || []).map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="text-red-600 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;