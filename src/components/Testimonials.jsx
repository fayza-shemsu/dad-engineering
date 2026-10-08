import React from 'react';
import { content } from '../data/content';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {(content.testimonials || []).map((test, idx) => (
            <div key={idx} className="bg-gray-800 p-8 rounded-lg relative">
              <Quote className="absolute top-4 right-4 text-gray-700 opacity-50" size={48} />
              <p className="text-gray-300 text-lg italic mb-6 relative z-10">
                "{test.quote}"
              </p>
              <div className="font-bold text-red-500">- {test.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;