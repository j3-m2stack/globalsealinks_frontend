'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const products = [
    {
      title: t.cattleFeed,
      description: t.cattleFeedDesc,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1000&auto=format&fit=crop',
      details: [
        'Cottonseed Oil Cake',
        'Groundnut Cake (Peanut Oil Cake)',
        'Wheat Bran',
        'Chickpea Meal',
        'Black Gram Meal',
        'Mash Type Cattle Feed (Balanced Feed)',
        'Cattle Feed Pellets',
        'Protein Mix Meal (DDGS)',
        'De-Oiled Rice Bran (DORB)',
        'Soybean Meal',
        'Corn Meal (Maize Meal for Feed)',
      ],
    },
    {
      title: t.soyabean,
      description: t.soyabeanDesc,
      image: 'https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?q=80&w=773&auto=format&fit=crop',
      details: [],
    },
    {
      title: t.chickpeas,
      description: t.chickpeasDesc,
      image: 'https://images.unsplash.com/photo-1586277640351-169375cd9cf7?q=80&w=870&auto=format&fit=crop',
      details: [],
    },
    {
      title: t.rice,
      description: t.riceDesc,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop',
      details: [
        {
          category: 'Basmati Rice Varieties',
          items: [
            '1121 Basmati – Extra long grain, excellent elongation',
            '1718 Basmati – Premium quality, strong aroma & fine grains',
            '1401 Basmati – Good length, reliable quality for export',
            '1509 Basmati – Early crop, cost-effective with good grain length',
          ],
        },
        {
          category: 'Non-Basmati Rice Varieties',
          items: [
            'Sona Masoori – Medium grain, soft texture',
            'IR 64 Rice – Widely exported, consistent quality',
            'Ponni Rice – Soft cooking, popular variety',
            'Broken Rice – Economical and versatile use',
          ],
        },
      ],
    },
    {
      title: t.coriander,
      description: t.corianderDesc,
      image: 'https://images.unsplash.com/photo-1528613526328-8c19bd037322?q=80&w=870&auto=format&fit=crop',
      details: [],
    },
    {
      title: t.onions,
      description: t.onionsDesc,
      image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1000&auto=format&fit=crop',
      details: [
        'Red Onions',
        'Yellow Onions',
      ],
    },
  ];

  const whatsappLink =
    'https://wa.me/918950003299?text=Hello%20I%20want%20to%20inquire%20about%20your%20products';

  const toggleExpand = (index: number) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

  return (
    <section
      id="products"
      ref={ref}
      className="py-14 relative overflow-hidden"
    >
      {/* Premium Background with Agriculture Theme */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - Subtle Texture */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop"
            alt="Agriculture Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Strong White Overlay for Clean Look */}
        <div className="absolute inset-0 bg-white/92" />
        
        {/* Subtle Green Tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-emerald-50/40 to-teal-50/50" />
        
        {/* Soft Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23059669' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Soft Blur Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-teal-200/15 to-green-200/15 rounded-full blur-3xl"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold px-5 py-2.5 rounded-full border-2 border-green-200/50 shadow-sm mb-6"
          >
            <span>Premium Quality Products</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.productsTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.productsSubtitle}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Card with Fixed Height and Flex Layout */}
              <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-green-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section - Flexible Height */}
                <div className="flex-1 flex flex-col p-6">
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Expandable Details */}
                  {product.details && product.details.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="flex items-center justify-between w-full text-left text-green-700 font-semibold hover:text-green-800 transition-colors"
                      >
                        <span>View Details</span>
                        {expandedProduct === index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>

                      {expandedProduct === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-3"
                        >
                          {typeof product.details[0] === 'string' ? (
                            <ul className="space-y-2">
                              {(product.details as string[]).map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-700 flex items-start"
                                >
                                  <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="space-y-4">
                              {(product.details as Array<{ category: string; items: string[] }>).map((section, idx) => (
                                <div key={idx}>
                                  <h4 className="font-bold text-gray-900 text-sm mb-2">
                                    {section.category}
                                  </h4>
                                  <ul className="space-y-2">
                                    {section.items.map((item, itemIdx) => (
                                      <li
                                        key={itemIdx}
                                        className="text-sm text-gray-700 flex items-start"
                                      >
                                        <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* CTA Button - Always at Bottom */}
                  <div className="mt-auto pt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>{t.sendInquiry}</span>
                    </a>
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
