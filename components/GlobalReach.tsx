'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function GlobalReach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const continents = [
    { name: 'Asia', emoji: '🌏', countries: 25 },
    { name: 'Europe', emoji: '🌍', countries: 12 },
    { name: 'Africa', emoji: '🌍', countries: 8 },
    { name: 'Americas', emoji: '🌎', countries: 7 },
  ];

  return (
    <section
      id="global"
      ref={ref}
      className="py-24 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Globe2 className="w-10 h-10 text-green-300" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.globalTitle}
          </h2>
          <p className="text-2xl text-green-100 font-semibold mb-4">
            {t.globalSubtitle}
          </p>
          <p className="text-lg text-green-200 max-w-3xl mx-auto">
            {t.globalDescription}
          </p>
        </motion.div>

        {/* World Map Illustration */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center text-9xl opacity-30 select-none">
              🗺️
            </div>

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.1,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  },
                }}
                className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-lg"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75" />
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Continents Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {continents.map((continent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4 text-center">{continent.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                {continent.name}
              </h3>
              <p className="text-green-200 text-center">
                {continent.countries}+ Countries
              </p>
            </motion.div>
          ))}
        </div> */}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '50+', label: 'Countries Served' },
            { number: '1000+', label: 'Successful Shipments' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-green-200 text-lg">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
