import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { content } from '../data/content';

const slides = [
  '/images/web/20261002_083100.webp',
  '/images/web/20261002_082916.webp',
  '/images/web/20261002_082506.webp',
  '/images/web/20261002_082847.webp',
  '/images/web/20261002_083219.webp',
];

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const Counter = ({ target, duration = 2000, trigger }) => {
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    
    if (!trigger) return;

    let startTime;
    let animationFrame;

    const update = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, trigger, shouldReduceMotion]);

  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{count}</span>;
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(false); // Reset to allow replay
          requestAnimationFrame(() => setStatsVisible(true));
        } else {
          setStatsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const headlineLines = [
    { text: "PRECISION MANUFACTURING", highlight: "" },
    { text: "& HEAVY ", highlight: "CRANE RENTAL" },
    { text: "IN ETHIOPIA", highlight: "" }
  ];

  return (
    <section id="home" className="relative grid grid-rows-[1fr_auto] h-[100dvh] min-h-[600px] w-full overflow-hidden bg-[#0B0D10]">
      {/* Slideshow */}
      <div className="absolute inset-0 z-0 bg-[#0B0D10]">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt="Hero Slide"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 10, ease: "linear" } }}
            className="absolute inset-0 w-full h-full object-cover cinematic-image"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/70 to-transparent z-10" />
        <div className="absolute inset-0 vignette-overlay z-10" />
        <div className="absolute inset-0 warm-glow z-10" />
        <div className="light-sweep z-10" />
      </div>

      {/* Row 1: Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center pt-[80px]">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(2.6rem,4.6vw,4.4rem)] [@media(max-height:760px)]:text-[2.2rem] font-heading font-[800] text-white mb-[clamp(0.5rem,2vh,1rem)] [@media(max-height:760px)]:mb-2 uppercase tracking-[0.01em] leading-[1.02] max-w-[22ch]">
            {headlineLines.map((line, lineIndex) => (
              <div key={lineIndex} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: lineIndex * 0.2, ease: [0.33, 1, 0.68, 1] }}
                >
                  {line.text}{line.highlight && <span className="text-[#E10600]">{line.highlight}</span>}
                </motion.div>
              </div>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[1.05rem] [@media(max-height:760px)]:text-[0.95rem] text-gray-300 mb-[clamp(1rem,3vh,2rem)] [@media(max-height:760px)]:mb-4 max-w-2xl font-body leading-relaxed line-clamp-2"
          >
            {content.hero.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="bg-[#E10600] text-white h-[48px] px-8 rounded-[12px] font-bold hover:bg-red-700 transition-all uppercase tracking-wider text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center">
              Get a Quote
            </a>
            <a href="#services" className="bg-white/10 text-white backdrop-blur-md h-[48px] px-8 rounded-[12px] font-bold hover:bg-white/20 transition-all uppercase tracking-wider text-sm border border-white/20 flex items-center justify-center">
              Explore Services
            </a>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-[16px] [@media(max-height:760px)]:mt-3">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-10 h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-[#E10600]' : 'bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Stats Bar */}
      <div 
        ref={statsRef}
        className="relative z-30 bg-[#0B0D10]/95 backdrop-blur-[10px] border-t border-[#ffffff]/10 pt-[16px] pb-[20px] max-[1279px]:pb-[72px]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-[4px] text-center">
          <div className="relative pb-2 md:pb-0">
            <div className="w-6 md:w-8 h-[2px] bg-[#E10600] mx-auto mb-1"></div>
            <div className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-heading font-bold text-white leading-tight">
              <span className="inline-block min-w-[2.5ch] text-right"><Counter target={120} trigger={statsVisible} /></span>+
            </div>
            <div className="text-[0.75rem] text-[#9ca3af] uppercase tracking-[0.08em] font-semibold leading-[1.2]">Machines</div>
          </div>
          <div className="relative pb-2 md:pb-0">
            <div className="w-6 md:w-8 h-[2px] bg-[#E10600] mx-auto mb-1"></div>
            <div className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-heading font-bold text-white leading-tight">
              <span className="inline-block min-w-[2ch] text-right"><Counter target={30} trigger={statsVisible} /></span>-
              <span className="inline-block min-w-[3ch] text-left"><Counter target={100} trigger={statsVisible} /></span>t
            </div>
            <div className="text-[0.75rem] text-[#9ca3af] uppercase tracking-[0.08em] font-semibold leading-[1.2]">Crane Capacity</div>
          </div>
          <div className="relative pb-2 md:pb-0">
            <div className="w-6 md:w-8 h-[2px] bg-[#E10600] mx-auto mb-1"></div>
            <div className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-heading font-bold text-white leading-tight">
              <span className="inline-block min-w-[4ch]"><Counter target={1993} trigger={statsVisible} /></span>
            </div>
            <div className="text-[0.75rem] text-[#9ca3af] uppercase tracking-[0.08em] font-semibold leading-[1.2]">Founded (E.C.)</div>
          </div>
          <div className="relative pb-2 md:pb-0">
            <div className="w-6 md:w-8 h-[2px] bg-[#E10600] mx-auto mb-1"></div>
            <div className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-heading font-bold text-white leading-tight">
              <span className="inline-block min-w-[2ch] text-right"><Counter target={24} trigger={statsVisible} /></span>/
              <span className="inline-block min-w-[1ch] text-left"><Counter target={7} trigger={statsVisible} /></span>
            </div>
            <div className="text-[0.75rem] text-[#9ca3af] uppercase tracking-[0.08em] font-semibold leading-[1.2]">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;