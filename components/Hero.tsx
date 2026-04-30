'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Globe2, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dmSerif, playfair } from '@/lib/fonts';
export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
          alt="Agriculture Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-emerald-900/80 to-green-950/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-emerald-400/20"
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating blobs */}
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

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-3">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">
                Premium Quality Exports
              </span>
            </div>

            <h1
              className={`${dmSerif.className} text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight tracking-tight`}
            >
              {t.heroHeading}
            </h1>

            <p className="text-lg md:text-l text-green-100 max-w-xl">
              {t.heroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('products')}
                className="group px-6 py-3 bg-white text-green-700 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
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

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 justify-center lg:justify-start">
              {[
                { icon: Globe2, value: '50+', label: 'Countries' },
                { icon: TrendingUp, value: '1000+', label: 'Shipments' },
                { icon: Award, value: '100%', label: 'Quality' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">
                      {item.value}
                    </div>
                    <div className="text-green-200 text-sm">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[450px] h-[450px]">
              <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1000&auto=format&fit=crop"
                  alt="Fresh Produce"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}