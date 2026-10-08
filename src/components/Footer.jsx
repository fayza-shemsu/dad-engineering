import React from "react";
import { content } from "../data/content";
import { Send, Phone } from "lucide-react";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0B0D10] text-gray-300">
      {/* Top Call Strip */}
      <div className="bg-[#E10600] py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-white">
          <span className="font-bold uppercase tracking-wider mb-2 md:mb-0">
            Call us now
          </span>
          <div className="flex gap-6 font-medium">
            <a
              href={`tel:${content.company.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Phone size={16} /> {content.company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-8 flex items-center gap-[12px] shrink-0 whitespace-nowrap">
                <img
                  src="/images/logo/logo-mark-white.png"
                  alt="DAD Engineering Workshop"
                  draggable="false"
                  className="h-[38px] md:h-[46px] w-auto border-none outline-none bg-transparent shadow-none rounded-none p-0 m-0 object-contain"
                />
                <div className="flex flex-col justify-center">
                  <span className="font-heading font-[700] text-[24px] tracking-[0.02em] uppercase text-white leading-none">
                    DAD ENGINEERING
                  </span>
                  <span className="font-body font-[600] text-[10.5px] tracking-[0.3em] uppercase text-[#E10600] leading-none mt-[4px]">
                    WORKSHOP PLC
                  </span>
                </div>
              </div>
              <p className="text-[15px] text-gray-400 mb-6 leading-relaxed">
                Precision manufacturing, custom spare parts, and heavy crane
                rentals in Ethiopia since 1993 E.C.
              </p>
              <div className="flex space-x-4">
                {content.company.social?.facebook && (
                  <a
                    href={content.company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#E10600] hover:text-white transition-all"
                  >
                    <FacebookIcon />
                  </a>
                )}
                {content.company.social?.linkedin && (
                  <a
                    href={content.company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#E10600] hover:text-white transition-all"
                  >
                    <LinkedinIcon />
                  </a>
                )}
                {content.company.social?.whatsapp && (
                  <a
                    href={content.company.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#E10600] hover:text-white transition-all"
                  >
                    <WhatsappIcon />
                  </a>
                )}
                {content.company.social?.telegram && (
                  <a
                    href={content.company.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#E10600] hover:text-white transition-all"
                  >
                    <Send size={18} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
                Quick Links
              </h4>
              <ul className="space-y-3 text-[15px]">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#E10600] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#machinery"
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Machinery
                  </a>
                </li>
                <li>
                  <a
                    href="#crane-rental"
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Crane Rental
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
                Contact Info
              </h4>
              <ul className="space-y-3 text-[15px] text-gray-400">
                <li className="leading-relaxed">{content.company.address}</li>
                <li>
                  <a
                    href={`tel:${content.company.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Tel: {content.company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${content.company.email}`}
                    className="hover:text-[#E10600] transition-colors"
                  >
                    Email: {content.company.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {content.company.nameLegal}. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
