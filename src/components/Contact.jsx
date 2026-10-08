import React, { useState } from 'react';
import { content } from '../data/content';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { sendInquiry } from '../lib/sendInquiry';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    const formData = {
      name: e.target.name.value,
      company: e.target.company.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };
    
    try {
      await sendInquiry(formData);
      setStatus('success');
      e.target.reset();
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E10600] font-bold tracking-wider text-sm mb-2 block uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">REQUEST A QUOTE</h2>
          <p className="max-w-[60ch] mx-auto text-gray-600 text-lg">Fill out the form below and our team will get back to you with a comprehensive quote.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <a href={`tel:${content.company.phone.replace(/[^+\d]/g, '')}`} className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 mr-4 group hover:bg-[#E10600] transition-colors">
                  <Phone className="text-[#E10600] group-hover:text-white transition-colors" size={24} />
                </a>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                  <a href={`tel:${content.company.phone.replace(/[^+\d]/g, '')}`} className="text-gray-600 hover:text-[#E10600] text-base block">{content.company.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <a href={`mailto:${content.company.email}`} className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 mr-4 group hover:bg-[#E10600] transition-colors">
                  <Mail className="text-[#E10600] group-hover:text-white transition-colors" size={24} />
                </a>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                  <a href={`mailto:${content.company.email}`} className="text-gray-600 hover:text-[#E10600] text-base">{content.company.email}</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="text-[#E10600]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Address</h4>
                  <p className="text-gray-600 text-base">{content.company.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] overflow-hidden shadow-md border border-gray-100">
              <iframe 
                src="https://www.google.com/maps?q=WQ32%2B5HG%20Dad%20engineering%20plc%2C%20Addis%20Ababa&output=embed" 
                width="100%" 
                height="240" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DAD Engineering Map"
              ></iframe>
              <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                <a href="https://maps.app.goo.gl/4ek8aAnbhgJqHHGp8" target="_blank" rel="noopener noreferrer" className="text-[#E10600] font-bold text-sm uppercase tracking-wider hover:underline flex justify-center items-center gap-2">
                  <MapPin size={16} /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Name <span className="text-[#E10600]">*</span></label>
                <input required name="name" type="text" placeholder="Your full name" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Company <span className="text-gray-400 font-normal">(optional)</span></label>
                <input name="company" type="text" placeholder="Company (optional)" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">Phone <span className="text-[#E10600]">*</span></label>
                  <input required name="phone" type="tel" placeholder="+251 ..." className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">Email <span className="text-[#E10600]">*</span></label>
                  <input required name="email" type="email" placeholder="name@company.com" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Service Interested In <span className="text-[#E10600]">*</span></label>
                <select id="contact-service-select" required name="service" defaultValue="" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-gray-900">
                  <option value="" disabled>Select a service</option>
                  <option value="Machining & Spare Parts">Machining & Spare Parts</option>
                  <option value="Cold Forming">Cold Forming</option>
                  <option value="Gear Manufacturing">Gear Manufacturing</option>
                  <option value="Engine Repair (ask us)">Engine Repair (ask us)</option>
                  <option value="Crane Rental">Crane Rental</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Message <span className="text-[#E10600]">*</span></label>
                <textarea required name="message" rows="4" placeholder="Tell us about your project, material, quantity or crane load" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors resize-none"></textarea>
              </div>
              <button disabled={loading} type="submit" className="w-full bg-[#E10600] text-white font-bold h-[56px] rounded-xl hover:bg-red-700 transition-colors uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Sending...</> : 'Send Request'}
              </button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">We reply within one business day.</p>
                <p className="text-sm text-gray-500">Need it faster? <a href={`tel:${content.company.phone.replace(/[^+\d]/g, '')}`} className="text-[#E10600] font-bold hover:underline">Call us</a></p>
              </div>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-800 border border-green-200 rounded-xl text-center font-medium">
                  Message sent successfully! We will contact you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-800 border border-red-200 rounded-xl text-center font-medium">
                  Something went wrong. Please try again or call us.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;