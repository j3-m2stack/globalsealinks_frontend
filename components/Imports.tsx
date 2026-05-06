'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Imports() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const imports = [
    {
      title: t.metalScrap,
      description: t.metalScrapDesc,
      image: '/imports/Metal scrap .PNG',
    },
    {
      title: t.aluminiumScrap,
      description: t.aluminiumScrapDesc,
      image: '/imports/Aluminium scrap.PNG',
    },
    {
      title: t.copperScrap,
      description: t.copperScrapDesc,
      image: '/imports/Copper scrap.PNG',
    },
    {
      title: t.machinery,
      description: t.machineryDesc,
      image: '/imports/Machinery.jpg',
    },
  ];

  return (
    <section
      id="imports"
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-[#faf6ef] via-[#f2ebe0] to-[#e8dcc8]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      {/* Soft Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center bg-white/70 border border-amber-200 rounded-full px-4 py-2 mb-5">
            <span className="text-gray-800 text-sm font-semibold">
              {t.whatWeImport}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.importsTitle}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.importsSubtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {imports.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-amber-100 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}