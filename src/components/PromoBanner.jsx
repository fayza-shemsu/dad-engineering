import React from 'react';
import { content } from '../data/content';

const PromoBanner = () => {
  return (
    <section className="py-12 bg-red-600 text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-heading font-bold mb-2 uppercase tracking-wide">Partner with us</h3>
          <p className="text-red-100 text-lg">
            {content.promo.text}
          </p>
        </div>
        <a href="#contact" className="bg-white text-red-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors uppercase tracking-wider whitespace-nowrap">
          {content.promo.button}
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;