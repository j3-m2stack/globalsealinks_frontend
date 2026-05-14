'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Handshake, ArrowRight, Globe2, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PartnerWithUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const whatsappLink =
    'https://wa.me/918959893299?text=Hello%20I%20want%20to%20discuss%20partnership%20opportunities';

  const benefits = [
    {
      icon: Globe2,
      title: t.globalNetwork,
      description: t.globalNetworkDesc,
    },
    {
      icon: TrendingUp,
      title: t.growthOpportunities,
      description: t.growthOpportunitiesDesc,
    },
    {
      icon: Award,
      title: t.qualityAssuranceTitle,
      description: t.qualityAssuranceDesc,
    },
  ];

  return (
    <section
      id="partner"
      ref={ref}
      className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
          alt="Partnership Background"
          fill
          className="object-cover opacity-10"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/95 via-emerald-50/90 to-teal-50/95" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold px-5 py-2.5 rounded-full border-2 border-green-200/50 shadow-sm"
            >
              <Handshake className="w-5 h-5" />
              <span>{t.partnershipOpportunities}</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t.partnerWithUs}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.partnerDescription}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-green-100/50 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>{t.connectWithUs}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop"
                alt="Business Partnership"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border-2 border-green-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">{t.activePartners}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
