'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  Award,
  FileText,
  Globe2,
  Truck,
  Leaf,
  Sprout,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dmSerif } from '@/lib/fonts';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  const features = [
    { icon: Award, title: t.assuredQuality, description: t.assuredQualityDesc },
    { icon: FileText, title: t.exportDoc, description: t.exportDocDesc },
    { icon: Globe2, title: t.countries, description: t.countriesDesc },
    { icon: Truck, title: t.logistics, description: t.logisticsDesc },
    { icon: Leaf, title: t.certifiedOrganic, description: t.certifiedOrganicDesc },
    { icon: Sprout, title: t.directFarm, description: t.directFarmDesc },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-10 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eef9ef] via-white to-[#e2f6e5]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200"
                alt="Fresh Produce"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 bg-green-700 rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl">
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 mb-1" />
              <span className="text-xs sm:text-sm font-bold">100%</span>
              <span className="text-[10px] sm:text-xs">Certified</span>
            </div>

            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl max-w-[200px] sm:max-w-xs">
              <div className="flex gap-2 sm:gap-3">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {t.trustedPartner}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {t.servingCountries}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
              <Leaf className="w-4 h-4" />
              {t.whyChooseUs}
            </div>

            <h2 className={`${dmSerif.className} text-3xl sm:text-4xl lg:text-5xl text-gray-900`}>
              {t.deliveringPremium}{' '}
              <span className="block text-green-700">
                {t.globalMarkets}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
              {t.aboutDescription}
            </p>
          </motion.div>
        </div>

        {/* Feature Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mt-24"
        >
          <div className="text-center mb-14">
            <span className="inline-flex bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
              {t.strengthsBadge}
            </span>

            <h3 className={`${dmSerif.className} text-4xl mt-5`}>
              {t.trustTitle}
            </h3>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {t.trustSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-center">

            {/* Left - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block space-y-8">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="text-right">
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Center Icons - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex relative items-center justify-center">
              <div className="grid grid-cols-2 gap-4 rotate-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.08,
                      rotate: 0,
                      y: -6,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`
                      w-32 h-32
                      rounded-3xl
                      bg-white/90
                      backdrop-blur-xl
                      border border-green-100
                      shadow-[0_10px_35px_rgba(22,101,52,0.08)]
                      flex items-center justify-center
                      group cursor-pointer
                      ${index % 2 === 0 ? '-rotate-3' : 'rotate-2'}
                    `}
                  >
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-green-200/30 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                      {/* Icon */}
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center group-hover:from-green-700 group-hover:to-emerald-600 transition-all duration-300">
                        <feature.icon className="w-7 h-7 text-green-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative blur behind */}
              <div className="absolute w-72 h-72 bg-green-100/40 rounded-full blur-3xl -z-10" />
            </div>

            {/* Right - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block space-y-8">
              {features.slice(3).map((feature, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile Feature List - Shown only on mobile */}
          <div className="lg:hidden mt-12 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-green-100/50 hover:border-green-300 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}