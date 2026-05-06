'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe2, MapPin, TrendingUp, Users, Package, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function GlobalReach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const stats = [
    { 
      icon: MapPin, 
      number: '50+', 
      label: 'Countries Served',
      color: 'text-blue-400'
    },
    { 
      icon: Package, 
      number: '1000+', 
      label: 'Successful Shipments',
      color: 'text-green-400'
    },
    { 
      icon: Users, 
      number: '500+', 
      label: 'Happy Clients',
      color: 'text-purple-400'
    },
    { 
      icon: Award, 
      number: '100%', 
      label: 'Quality Assured',
      color: 'text-yellow-400'
    },
  ];

  return (
    <section
      id="global"
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
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
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 shadow-lg shadow-green-500/50"
          >
            <Globe2 className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.globalTitle}
          </h2>
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
            <TrendingUp className="w-5 h-5 text-green-300 mr-2" />
            <span className="text-xl text-green-100 font-semibold">
              {t.globalSubtitle}
            </span>
          </div>
          
          <p className="text-lg text-green-200 max-w-3xl mx-auto leading-relaxed">
            {t.globalDescription}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <div className="text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-green-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
            <Globe2 className="w-6 h-6 text-green-300 mr-3" />
            <p className="text-green-100 text-lg">
              <span className="font-semibold text-white">Expanding globally</span> - Your trusted partner for international trade
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
