import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Machinery", href: "#machinery" },
  { name: "Crane Rental", href: "#crane-rental" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
    if (latest < 50) {
      window.history.replaceState(null, "", "/");
      setActiveSection("home");
    }
  });

  useEffect(() => {
    // Initial scroll if hash exists
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Active Menu Logic
          if (scrollY < 100) {
            setActiveSection("home");
          } else {
            let currentSection = "home";
            const offset = 80 + 120; // header height + threshold

            navLinks.forEach((link) => {
              if (link.href === "#home") return;
              const el = document.getElementById(link.href.substring(1));
              if (el && el.offsetTop <= scrollY + offset) {
                currentSection = link.href.substring(1);
              }
            });
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    if (href === "#home") {
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        window.history.pushState(null, "", href);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-[#E10600] w-full z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-in-out flex flex-col justify-center ${isScrolled ? "h-[68px] bg-white/96 backdrop-blur-[10px] shadow-[0_6px_24px_rgba(11,13,16,0.08)] border-b border-[#0B0D10]/5" : "h-[80px] bg-gradient-to-b from-[#0B0D10]/65 to-transparent"}`}
      >
        <div className="max-w-[1280px] mx-auto px-[32px] w-full flex items-center justify-between gap-[32px]">
          {/* LOGO LOCKUP */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="flex items-center gap-[12px] shrink-0 whitespace-nowrap"
          >
            <span
              className={`relative block shrink-0 transition-all duration-250 ease-in-out ${isScrolled ? "h-[40px] w-[47px]" : "h-[36px] w-[42px] md:h-[44px] md:w-[51px]"}`}
            >
              <img
                src="/images/logo/logo-mark-white.png"
                alt="DAD Engineering Workshop"
                draggable="false"
                aria-hidden={isScrolled}
                className="absolute inset-0 h-full w-full object-contain pointer-events-none transition-opacity duration-250 ease-in-out"
                style={{ opacity: isScrolled ? 0 : 1 }}
              />
              <img
                src="/images/logo/logo-mark.png"
                alt=""
                draggable="false"
                aria-hidden={!isScrolled}
                className="absolute inset-0 h-full w-full object-contain pointer-events-none transition-opacity duration-250 ease-in-out"
                style={{ opacity: isScrolled ? 1 : 0 }}
              />
            </span>
            <div className="flex flex-col justify-center">
              <span
                className={`font-heading font-[700] text-[24px] tracking-[0.02em] uppercase leading-none transition-colors duration-250 ${isScrolled ? "text-[#0B0D10]" : "text-white"}`}
              >
                DAD ENGINEERING
              </span>
              <span className="hidden sm:block font-body font-[600] text-[10.5px] tracking-[0.3em] uppercase text-[#E10600] leading-none mt-[4px]">
                WORKSHOP PLC
              </span>
            </div>
          </a>

          {/* NAV - Desktop Only */}
          <div
            className="hidden min-[1100px]:flex items-center grow justify-end"
            style={{ gap: "clamp(16px, 1.6vw, 28px)" }}
          >
            <nav
              className="flex items-center whitespace-nowrap flex-nowrap"
              style={{ gap: "clamp(16px, 1.6vw, 28px)" }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`font-body font-[500] text-[15px] tracking-[0.01em] transition-all duration-250 relative group py-2 ${
                      isScrolled
                        ? isActive
                          ? "text-[#E10600]"
                          : "text-[#1F2937] hover:text-[#E10600]"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 right-0 bottom-[2px] h-[2px] bg-[#E10600] rounded-full"></span>
                    )}
                    {!isActive && (
                      <span className="absolute left-0 right-0 bottom-[2px] h-[2px] bg-[#E10600] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
                    )}
                  </a>
                );
              })}
            </nav>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="shrink-0 whitespace-nowrap bg-[#E10600] text-white h-[42px] px-[20px] rounded-[10px] font-body font-[700] text-[13.5px] hover:bg-red-700 transition-all uppercase tracking-[0.04em] flex items-center justify-center"
            >
              REQUEST A QUOTE
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="min-[1100px]:hidden flex items-center shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-250 ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-[#0B0D10]/95 backdrop-blur-md z-[-1] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} min-[1100px]:hidden flex flex-col pt-[80px]`}
        >
          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col justify-center">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[18px] font-body font-bold uppercase tracking-wider block py-2 ${activeSection === link.href.substring(1) ? "text-[#E10600]" : "text-white"}`}
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="p-6 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="bg-[#E10600] text-white h-[56px] w-full rounded-[12px] font-bold text-[16px] hover:bg-red-700 transition-all uppercase tracking-[0.04em] flex items-center justify-center"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
