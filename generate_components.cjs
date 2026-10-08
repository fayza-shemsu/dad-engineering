const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });

const components = {
  'Header.jsx': `import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Machinery', href: '#machinery' },
    { name: 'Crane Rental', href: '#crane-rental' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-heading font-bold text-gray-900">
              <span className="text-red-600">DA</span>D ENGINEERING
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-red-600 text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
              Request a Quote
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;`,
  'Hero.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img src="/placeholder-hero.jpg" alt="Workshop" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wide leading-tight mb-6">
            {content.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            {content.hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wider">
              Request a Quote
            </a>
            <a href={\`tel:\${content.company.phone1}\`} className="bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wider">
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
      <div className="relative z-20 bg-black/50 border-t border-white/10 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around flex-wrap gap-6 text-center">
          {content.hero.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-red-500">{stat.number}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;`,
  'About.jsx': `import React from 'react';
import { content } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">ABOUT DAD ENGINEERING</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {content.company.aboutShort}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">{content.company.vision}</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">{content.company.mission}</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Leadership & Excellence</h3>
            <p className="text-gray-600 mb-4">Founded by <strong>{content.company.owner}</strong>, and managed by <strong>{content.company.managingDirector}</strong>, our facility combines experienced leadership with a team of skilled craftsmen.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span> Dedicated to world-class execution
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span> Focused on precision and quality
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span> Trusted by major construction & industrial clients
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;`,
  'Services.jsx': `import React from 'react';
import { content } from '../data/content';
import { Settings, Tooling, Box, Wrench } from 'lucide-react';

// We use Settings and Wrench, Box as stand-ins since Tooling isn't exported by lucide-react by default
const icons = [
  <Settings size={32} className="text-red-600" />,
  <Box size={32} className="text-red-600" />,
  <Settings size={32} className="text-red-600" />,
  <Wrench size={32} className="text-red-600" />
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">OUR SERVICES</h2>
          <p className="text-gray-600">Comprehensive engineering solutions under one roof. From raw materials to precision finished parts.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {content.services.map((service, idx) => (
            <div key={service.id} className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-4">{icons[idx]}</div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.details.map(detail => (
                  <span key={detail} className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border border-gray-200">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;`,
  'MachineShowcase.jsx': `import React, { useState } from 'react';
import { content } from '../data/content';

const MachineShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const categories = ['All', ...new Set(content.machines.map(m => m.category))];
  
  const filtered = filter === 'All' ? content.machines : content.machines.filter(m => m.category === filter);

  return (
    <section id="machinery" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">MACHINERY SHOWCASE</h2>
          <p className="text-gray-400">A glimpse into our 120+ machine capabilities.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={\`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-colors \${filter === cat ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}\`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, showAll ? filtered.length : 6).map((machine, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="h-48 bg-gray-700 relative overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-sm absolute z-10">[Client Photo: {machine.name}]</span>
                <img src={machine.image} alt={machine.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100 relative z-20" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg">{machine.name}</h4>
                <p className="text-gray-400 text-sm">ID: {machine.id}</p>
              </div>
            </div>
          ))}
        </div>
        {!showAll && filtered.length > 6 && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(true)} className="bg-transparent border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-2 rounded font-bold uppercase tracking-wider transition-colors">
              View Full List
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MachineShowcase;`,
  'CraneRental.jsx': `import React from 'react';
import { content } from '../data/content';

const CraneRental = () => {
  return (
    <section id="crane-rental" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">HEAVY CRANE RENTAL</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide reliable crane rental services from 30 tons up to 100 tons for construction, industrial installations, and heavy lifting projects.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.cranes.map((crane, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-400">
                [Replace with client photo]
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{crane.capacity} Crane</h3>
                <p className="text-gray-600 mb-4">{crane.spec}</p>
                <a href="#contact" className="inline-block bg-gray-900 text-white px-6 py-2 rounded font-bold hover:bg-red-600 transition-colors uppercase tracking-wide text-sm">
                  Request this crane
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraneRental;`,
  'WhyUs.jsx': `import React from 'react';
import { content } from '../data/content';
import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">WHY CHOOSE DAD ENGINEERING</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.whyUs.map((item, idx) => (
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

export default WhyUs;`,
  'PromoBanner.jsx': `import React from 'react';
import { content } from '../data/content';

const PromoBanner = () => {
  return (
    <section className="py-12 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
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

export default PromoBanner;`,
  'Gallery.jsx': `import React from 'react';
import { content } from '../data/content';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">FACILITY GALLERY</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {content.gallery.map((img, idx) => (
            <div key={idx} className="aspect-square bg-gray-200 overflow-hidden group rounded">
              <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-500">
                [Photo {idx+1}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;`,
  'Testimonials.jsx': `import React from 'react';
import { content } from '../data/content';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {content.testimonials.map((test, idx) => (
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

export default Testimonials;`,
  'Contact.jsx': `import React, { useState } from 'react';
import { content } from '../data/content';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will contact you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">REQUEST A QUOTE</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you with a comprehensive quote.</p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="text-red-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">{content.company.phone1} <br/> {content.company.phone2}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-red-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">{content.company.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-red-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-600">{content.company.address} <br/> P.O. Box {content.company.poBox}</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              [Map Placeholder: Kality Condominium]
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input required type="tel" className="w-full p-3 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required type="email" className="w-full p-3 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select className="w-full p-3 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500">
                  <option>Machining & Spare Parts</option>
                  <option>Cold Forming</option>
                  <option>Gear Manufacturing</option>
                  <option>Engine Repair</option>
                  <option>Crane Rental</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required rows="4" className="w-full p-3 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition-colors uppercase tracking-wider">
                Send Request
              </button>
              {status && <div className="mt-4 p-3 bg-green-50 text-green-700 rounded">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;`,
  'Footer.jsx': `import React from 'react';
import { content } from '../data/content';
import { Facebook, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-heading font-bold text-white mb-4">
              <span className="text-red-600">DA</span>D ENGINEERING
            </div>
            <p className="text-sm text-gray-400 mb-6">
              {content.company.vision}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Send size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#machinery" className="hover:text-red-500 transition-colors">Machinery</a></li>
              <li><a href="#crane-rental" className="hover:text-red-500 transition-colors">Crane Rental</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>{content.company.address}</li>
              <li>Tel: {content.company.phone1}</li>
              <li>Tel: {content.company.phone2}</li>
              <li>Email: {content.company.email}</li>
              <li>P.O. Box: {content.company.poBox}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {content.company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;`
};

for (const [filename, code] of Object.entries(components)) {
  fs.writeFileSync(path.join(componentsDir, filename), code);
}
console.log('Components generated successfully.');
