'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  MessageSquare,
  ShoppingCart,
  DollarSign,
  Package,
  Truck,
  CheckCircle,
  Workflow,
  Route,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ExportProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: t.inquiry,
      description: t.inquiryDesc,
      iconBg: 'bg-blue-500',
    },
    {
      icon: ShoppingCart,
      title: t.procurement,
      description: t.procurementDesc,
      iconBg: 'bg-purple-500',
    },
    {
      icon: DollarSign,
      title: t.pricing,
      description: t.pricingDesc,
      iconBg: 'bg-green-500',
    },
    {
      icon: Package,
      title: t.packing,
      description: t.packingDesc,
      iconBg: 'bg-orange-500',
    },
    {
      icon: Truck,
      title: t.logisticsStep,
      description: t.logisticsStepDesc,
      iconBg: 'bg-indigo-500',
    },
    {
      icon: CheckCircle,
      title: t.delivery,
      description: t.deliveryDesc,
      iconBg: 'bg-teal-500',
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
          alt="Export Background"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-slate-900/85 to-gray-900/90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/90 border-0 border-green-200/50 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm mb-4 sm:mb-6"
          >
            <Route className="w-4 h-4 text-green-600 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{t.ourProcess}</span>
          </motion.div>


          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.processTitle}
          </h2>

          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            {t.processSubtitle}
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:block relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-teal-500 -translate-x-1/2" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -60 : 60,
                  }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <div
                    className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'
                      }`}
                  >
                    {/* Card */}
                    <div className={`w-[46%] ${isLeft ? 'pr-8' : 'pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
                      >
                        <div
                          className={`flex items-start gap-3 ${isLeft
                            ? 'flex-row'
                            : 'flex-row-reverse text-right'
                            }`}
                        >
                          <div
                            className={`w-10 h-10 ${step.iconBg} rounded-lg flex items-center justify-center`}
                          >
                            <step.icon className="w-5 h-5 text-white" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-base font-bold text-white mb-1">
                              {step.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-green-600">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-500" />
              )}

              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">
                    {index + 1}
                  </span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 ${step.iconBg} rounded-lg flex items-center justify-center`}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}