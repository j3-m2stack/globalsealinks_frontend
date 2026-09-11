'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { dmSerif } from '@/lib/fonts';
import { useLanguage } from '@/context/LanguageContext';

interface CertificationItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string | null;
  imageAlt: string;
}

function CardLogo({
  cert,
  placeholderGst,
  placeholderText,
}: {
  cert: CertificationItem;
  placeholderGst: string;
  placeholderText: string;
}) {
  if (!cert.imageSrc) {
    return (
      <div className="h-14 sm:h-16 w-36 rounded-xl border border-dashed border-gray-300 bg-gray-50/70 flex flex-col items-center justify-center text-xs text-gray-400 font-medium px-2 text-center select-none">
        <span className="font-semibold text-gray-500">{placeholderGst}</span>
        <span className="text-[10px] text-gray-400 mt-0.5">{placeholderText}</span>
      </div>
    );
  }

  return (
    <img
      src={cert.imageSrc}
      alt={cert.imageAlt}
      className={`h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${cert.id === 'dgft'
        ? 'max-w-[95%] rounded shadow-sm'
        : cert.id === 'fieo'
          ? 'max-w-[75%]'
          : 'max-w-[90%]'
        }`}
    />
  );
}

export default function Certifications() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const certificationsData: CertificationItem[] = [
    {
      id: 'dgft',
      title: t.certDgftTitle,
      description: t.certDgftDesc,
      imageSrc: '/images/certifications/dgft.png',
      imageAlt: t.certDgftAlt,
    },
    {
      id: 'gst',
      title: t.certGstTitle,
      description: t.certGstDesc,
      imageSrc: '/images/certifications/gst.png',
      imageAlt: t.certGstAlt,
    },
    {
      id: 'fieo',
      title: t.certFieoTitle,
      description: t.certFieoDesc,
      imageSrc: '/images/certifications/fieo.png',
      imageAlt: t.certFieoAlt,
    },
    {
      id: 'apeda',
      title: t.certApedaTitle,
      description: t.certApedaDesc,
      imageSrc: '/images/certifications/apeda.png',
      imageAlt: t.certApedaAlt,
    },
    {
      id: 'fssai',
      title: t.certFssaiTitle,
      description: t.certFssaiDesc,
      imageSrc: '/images/certifications/fssai.png',
      imageAlt: t.certFssaiAlt,
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative pt-12 sm:pt-14 pb-0 overflow-hidden bg-gradient-to-b from-[#f5faf7] via-[#eff8f3] to-[#e8f4ed]"
    >
      {/* Subtle World Map Dot Pattern in Background */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden opacity-85">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="certGlobalDots"
              x="0"
              y="0"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.3" fill="#10b981" fillOpacity="0.14" />
            </pattern>
            <mask id="certWorldLandmass">
              <rect width="1200" height="480" fill="black" />
              <path
                d="M80 50 C160 30, 260 50, 290 120 C300 170, 240 220, 190 230 C140 210, 100 160, 70 100 Z"
                fill="white"
              />
              <path
                d="M230 250 C290 280, 310 350, 280 430 C240 450, 220 400, 220 340 Z"
                fill="white"
              />
              <path
                d="M480 60 C560 50, 610 80, 600 140 C550 170, 510 160, 470 130 Z"
                fill="white"
              />
              <path
                d="M490 170 C570 160, 640 210, 620 320 C590 390, 540 420, 510 400 C480 340, 460 250, 490 170 Z"
                fill="white"
              />
              <path
                d="M610 60 C750 40, 970 60, 990 170 C960 260, 840 280, 770 260 C720 220, 650 180, 610 110 Z"
                fill="white"
              />
              <path
                d="M710 180 C760 180, 780 230, 750 300 C720 290, 700 240, 710 180 Z"
                fill="white"
              />
              <path
                d="M860 310 C950 300, 990 350, 960 410 C900 430, 850 390, 850 350 Z"
                fill="white"
              />
            </mask>
          </defs>
          <rect width="1200" height="480" fill="url(#certGlobalDots)" opacity="0.4" />
          <g mask="url(#certWorldLandmass)">
            <rect width="1200" height="480" fill="url(#certGlobalDots)" opacity="1" />
          </g>
        </svg>
      </div>

      {/* Top subtle radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.85)_0%,_transparent_75%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-green-200/50 shadow-sm mb-4 sm:mb-6"
          >            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t.ourCertificationsBadge}</span>
          </motion.div>

          {/* Main Serif Heading */}
          <h2
            className={`${dmSerif.className} text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0a2333] leading-[1.15] mb-4`}
          >
            <span className="text-[#136a3e]">{t.certificationsHighlight}</span> {t.complianceTitle}
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="text-[#4b5865] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-2 font-normal">
            {t.certificationsDescription}
          </p>
        </motion.div>

        {/* 5 Certification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-10 sm:mb-12 items-stretch">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              className="group relative flex flex-col items-center text-center bg-white rounded-2xl p-5 sm:p-6 border border-[#e2ece5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Logo Container with consistent height */}
              <div className="w-full h-32 sm:h-36 flex flex-col items-center justify-center px-1">
                <div className="h-24 sm:h-28 flex items-center justify-center w-full">
                  <CardLogo
                    cert={cert}
                    placeholderGst={t.gstLogoPlaceholder}
                    placeholderText={t.placeholderText}
                  />
                </div>

                {/* Green divider */}
                <div className="w-16 h-[2px] bg-[#136a3e] rounded-full mt-3" />
              </div>

              {/* Card Title */}
              <h3 className="text-[#0a2333] font-bold text-sm sm:text-base leading-snug min-h-[2.5rem] flex items-center justify-center mb-3 tracking-tight group-hover:text-[#136a3e] transition-colors duration-200">
                {cert.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-[13px] text-[#556575] leading-relaxed font-normal mt-0 text-center min-h-[60px]">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Assurance Callout Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-20 max-w-5xl mx-auto mb-6 sm:mb-8"
        >
          <div className="bg-[#edf7f2]/95 backdrop-blur-md border border-[#cbe8d6] rounded-2xl sm:rounded-full px-5 py-3 sm:py-3.5 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
            {/* Shield Check Icon in Green Circle */}
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#dcf2e3] text-[#136a3e]">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden sm:block w-px h-5 bg-[#c2e4cf]" />

            {/* Highlighted Tagline */}
            <div className="text-sm sm:text-[15px] font-bold text-[#136a3e] whitespace-nowrap">
              {t.certTrustTagline}
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden sm:block w-px h-5 bg-[#c2e4cf]" />

            {/* Description */}
            <div className="text-xs sm:text-[13.5px] text-[#475569] leading-relaxed">
              {t.certTrustDesc}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Container Port Shipping Horizon Banner */}
      <div className="relative w-full h-36 sm:h-48 md:h-56 lg:h-64 mt-[-15px] sm:mt-[-25px] overflow-hidden">
        {/* Soft top gradient blend to merge container port sky with section background */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#e8f4ed] via-[#e8f4ed]/80 to-transparent z-10 pointer-events-none" />

        <Image
          src="/images/certifications/port-waterline.jpg"
          alt={t.certPortBannerAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />

        {/* Ambient subtle tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-[#e8f4ed]/30 pointer-events-none" />
      </div>
    </section>
  );
}
