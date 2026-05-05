'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const certifications = [
    t.apedaCertified,
    t.fssaiApproved,
    t.iso22000,
    t.haccp,
    t.gmp,
    t.fdaCompliant,
    t.usdaStandard,
    t.iecRegistered,
    t.exportQualityAssured,
    t.organicCertified,
    t.halalCertified,
    t.globalTradeVerified,
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section
      ref={ref}
      className="py-10 sm:py-10 lg:py-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-green-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-green-200/50 shadow-sm mb-4 sm:mb-6"
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{t.globalCertifications}</span>
          </motion.div>

        </motion.div>

        {/* Infinite Scrolling Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-green-50 via-emerald-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-green-50 via-emerald-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden py-4">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: [0, -50 * certifications.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {duplicatedCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative bg-white/80 backdrop-blur-md border-2 border-green-200/50 rounded-full px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl hover:border-green-300 transition-all duration-300">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-full transition-all duration-300" />
                    
                    <div className="relative flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
                        {cert}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
