'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Static product data - images are language-independent
const PRODUCT_DATA = [
  {
    image: '/images/cattle-feed.png',
    slug: 'cattle-feed',
    titleKey: 'cattleFeed',
    descKey: 'cattleFeedDesc',
  },
  {
    image: '/images/soyabean.png',
    slug: 'soyabean',
    titleKey: 'soyabean',
    descKey: 'soyabeanDesc',
  },
  {
    image: '/images/Chickpeas.jpeg',
    slug: 'chickpeas',
    titleKey: 'chickpeas',
    descKey: 'chickpeasDesc',
  },
  {
    image: '/images/basmati-rice.PNG',
    slug: 'basmati-rice',
    titleKey: 'basmati',
    descKey: 'basmatiDesc',
  },
  {
    image: '/images/non-basmati-rice.PNG',
    slug: 'non-basmati-rice',
    titleKey: 'nonBasmati',
    descKey: 'nonBasmatiDesc',
  },
  {
    image: '/images/Yellow maize.jpeg',
    slug: 'maize',
    titleKey: 'maize',
    descKey: 'maizeDesc',
  },
  {
    image: '/images/Coriander seeds.jpeg',
    slug: 'coriander',
    titleKey: 'coriander',
    descKey: 'corianderDesc',
  },
  {
    image: '/images/onion.png',
    slug: 'onions',
    titleKey: 'onions',
    descKey: 'onionsDesc',
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  // Memoize products to prevent unnecessary re-renders
  const products = useMemo(() => {
    return PRODUCT_DATA.map(product => ({
      ...product,
      title: t[product.titleKey as keyof typeof t] || product.titleKey,
      description: t[product.descKey as keyof typeof t] || product.descKey,
    }));
  }, [t]);

  const truncateText = (text: string, maxLength = 95) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  return (
    <section
      id="products"
      ref={ref}
      className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex  items-center bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-6">
            {t.premiumQuality}
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.productsTitle}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.productsSubtitle}
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full flex  rtl-reverse flex-col bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title || 'Product'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-3xl font-bold text-white line-clamp-2">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 min-h-[220px]">
                  <p className="text-gray-600 text-lg leading-relaxed mb-5 min-h-[90px]">
                    {truncateText(product.description || '')}
                  </p>

                  <div className="flex-1" />

                  {/* CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center justify-between pt-5 border-t border-gray-200"
                  >
                    <span className="text-green-700 font-semibold text-lg">
                      {t.viewDetails}
                    </span>

                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}