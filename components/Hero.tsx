'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dmSerif } from '@/lib/fonts';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: '/slider/1st image for slide.PNG', alt: 'Agricultural Products' },
    { url: '/slider/2nd image for slide.PNG', alt: 'Quality Grains' },
    { url: '/slider/3rd image for slide.PNG', alt: 'Export Excellence' },
    { url: '/slider/4th image for slide.PNG', alt: 'Global Trade' },
    { url: '/slider/5th image for slide.PNG', alt: 'Premium Quality' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={slides[currentSlide].url}
              alt={slides[currentSlide].alt}
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover scale-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Floating Effects */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      {/* <div className="relative z-20 w-full h-full flex items-center justify-start max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-left max-w-2xl ml-4 lg:ml-10"
        >

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl text-white leading-tight`}
          >
            {t.heroHeading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-green-100"
          >
            {t.heroSubtext}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => scrollToSection('products')}
              className="group px-8 py-4 bg-white text-green-700 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
            >
              {t.exploreProducts}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
            >
              {t.contactUs}
            </button>
          </div>
        </motion.div>
      </div> */}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}