'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

type Testimonial = {
  name: string;
  company: string;
  country: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Al-Rashid',
    company: 'Dubai Trading Co.',
    country: '🇦🇪 UAE',
    text: 'Global Sea Links has been our trusted partner for over 3 years.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    company: 'Agro Exports India',
    country: '🇮🇳 India',
    text: 'Exceptional service and premium quality products.',
    rating: 5,
  },
  {
    name: 'Marie Dubois',
    company: 'European Foods Ltd.',
    country: '🇫🇷 France',
    text: 'Professional, reliable, and committed to excellence.',
    rating: 5,
  },
  {
    name: 'John Smith',
    company: 'Global Commodities Inc.',
    country: '🇺🇸 USA',
    text: 'Outstanding quality and competitive pricing.',
    rating: 5,
  },
];

const slides: Testimonial[][] = isMobile
  ? testimonials.map((t) => [t])
  : testimonials.reduce<Testimonial[][]>((acc, _, i) => {
      if (i % 2 === 0) {
        acc.push(testimonials.slice(i, i + 2));
      }
      return acc;
    }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          alt="Testimonials"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf6ef]/95 via-[#f2ebe0]/90 to-[#e8dcc8]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.testimonialsTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${activeIndex * 100}%`,
            }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 20,
            }}
          >
            {slides.map((group, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid md:grid-cols-2 gap-6"
              >
                {group.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/85 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-amber-100 shadow-lg flex flex-col"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                      <Quote className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-500 fill-amber-500"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 italic flex-1 mb-5">
                      "{testimonial.text}"
                    </p>

                    <div className="border-t border-amber-100 pt-4">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-emerald-700 text-sm">
                        {testimonial.company}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? 'w-8 bg-emerald-600'
                    : 'w-2 bg-amber-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}