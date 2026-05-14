'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

export default function Hero() {
  const { t } = useLanguage();

  const slides = [
    { url: '/slider/1st image for slide.PNG', alt: 'Agricultural Products' },
    { url: '/slider/2nd image for slide.PNG', alt: 'Quality Grains' },
    { url: '/slider/3rd image for slide.PNG', alt: 'Export Excellence' },
    { url: '/slider/4th image for slide.PNG', alt: 'Global Trade' },
    { url: '/slider/5th image for slide.PNG', alt: 'Premium Quality' },
  ];

  return (
    <section
      id="hero"
className="relative h-[42vh] sm:h-[55vh] md:h-[84vh] lg:h-[88vh] overflow-hidden rounded-b-3xl"    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
            scale: 0.9,
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
      <SwiperSlide key={index}>
<div className="relative w-full h-full">    <Image
      src={slide.url}
      alt={slide.alt}
      fill
      priority
      quality={100}
      sizes="100vw"
className="object-cover object-center md:object-center"    />

    <div className="absolute inset-0 bg-black/25 md:bg-black/35" />
  </div>
</SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}