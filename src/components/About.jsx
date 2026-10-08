import React from 'react';
import { content } from '../data/content';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E10600] font-bold tracking-wider text-sm mb-2 block uppercase">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">ABOUT DAD ENGINEERING WORKSHOP</h2>
          <p className="max-w-[60ch] mx-auto text-gray-600 text-lg">{content.company.aboutShort}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Side */}
          <div className="relative">
            <img src="/images/web/20261002_082827.webp" alt="DAD Workshop" className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[#E10600] max-w-[200px]">
              <h4 className="font-heading font-bold text-3xl text-gray-900 mb-1">120+</h4>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider leading-tight">Machines Under One Roof</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Leadership & Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by <strong>{content.company.owner}</strong>, and managed by <strong>{content.company.managingDirector}</strong>, our facility combines experienced leadership with a team of skilled craftsmen dedicated to executing world-class solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700">
                  <CheckCircle size={20} className="text-[#E10600] mr-3 mt-1 shrink-0" /> 
                  <span className="font-medium">Dedicated to world-class execution</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle size={20} className="text-[#E10600] mr-3 mt-1 shrink-0" /> 
                  <span className="font-medium">Focused on precision and quality</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle size={20} className="text-[#E10600] mr-3 mt-1 shrink-0" /> 
                  <span className="font-medium">Skilled craftsmen and project managers</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle size={20} className="text-[#E10600] mr-3 mt-1 shrink-0" /> 
                  <span className="font-medium">Spare parts made from drawing or sample</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              <div>
                <h4 className="font-heading font-bold text-2xl text-gray-900">1993</h4>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Founded (E.C.)</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-2xl text-gray-900">120+</h4>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Machines</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-2xl text-[#E10600]">30-100<span className="text-lg">t</span></h4>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cranes</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;