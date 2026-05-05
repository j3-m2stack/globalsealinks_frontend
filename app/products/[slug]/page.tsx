'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, CheckCircle2, Package, Truck, Shield, Award } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Product data
const productsData: Record<string, any> = {
  'basmati-rice': {
    title: 'Premium Basmati Rice',
    subtitle: 'Extra Long Grain | Aromatic | Export Quality',
    description: 'Our premium Basmati rice is sourced from the finest farms in India, known for its exceptional aroma, extra-long grains, and superior quality. Perfect for international markets demanding the best.',
    mainImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=2070&auto=format&fit=crop',
    ],
    varieties: [
      {
        name: '1121 Basmati',
        description: 'Extra long grain with excellent elongation after cooking',
        features: ['Length: 8.3mm+', 'Purity: 95%+', 'Moisture: 12-13%'],
      },
      {
        name: '1718 Basmati',
        description: 'Premium quality with strong aroma and fine grains',
        features: ['Length: 8.0mm+', 'Purity: 95%+', 'Aroma: Strong'],
      },
      {
        name: '1401 Basmati',
        description: 'Good length with reliable quality for export',
        features: ['Length: 8.2mm+', 'Purity: 95%+', 'Cooking: Excellent'],
      },
      {
        name: '1509 Basmati',
        description: 'Early crop, cost-effective with good grain length',
        features: ['Length: 8.4mm+', 'Purity: 95%+', 'Value: Best'],
      },
    ],
    specifications: {
      'Grain Length': '8.0mm - 8.5mm',
      'Purity': '95% minimum',
      'Moisture Content': '12-13%',
      'Broken Grains': 'Max 1%',
      'Packaging': '5kg, 10kg, 25kg, 50kg bags',
      'Shelf Life': '12-18 months',
    },
    certifications: ['APEDA Certified', 'FSSAI Approved', 'ISO 22000', 'HACCP', 'Export Quality'],
    benefits: [
      'Extra long grain that elongates beautifully when cooked',
      'Rich aromatic fragrance',
      'Non-sticky texture',
      'High nutritional value',
      'Suitable for all rice dishes',
      'Premium export quality',
    ],
  },
  'cattle-feed': {
    title: 'Premium Cattle Feed',
    subtitle: 'Nutritious | Balanced | High Quality',
    description: 'Our comprehensive range of cattle feed products ensures optimal nutrition for livestock. From oil cakes to protein-rich meals, we provide everything needed for healthy cattle.',
    mainImage: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2074&auto=format&fit=crop',
    ],
    varieties: [
      {
        name: 'Cottonseed Oil Cake',
        description: 'High protein content for dairy cattle',
        features: ['Protein: 22-24%', 'Fat: 6-8%', 'Fiber: 12-14%'],
      },
      {
        name: 'Groundnut Cake',
        description: 'Rich in protein and energy',
        features: ['Protein: 45-48%', 'Fat: 6-8%', 'Digestible'],
      },
      {
        name: 'Soybean Meal',
        description: 'Premium protein source',
        features: ['Protein: 46-48%', 'Fat: 1-2%', 'High Quality'],
      },
      {
        name: 'Cattle Feed Pellets',
        description: 'Balanced nutrition in pellet form',
        features: ['Protein: 18-20%', 'Easy to digest', 'Complete feed'],
      },
    ],
    specifications: {
      'Protein Content': '18-48% (varies by type)',
      'Moisture': 'Max 12%',
      'Fiber': '10-15%',
      'Fat': '2-8%',
      'Packaging': '25kg, 50kg bags',
      'Shelf Life': '6 months',
    },
    certifications: ['FSSAI Approved', 'GMP Certified', 'Quality Tested'],
    benefits: [
      'Improves milk production',
      'Enhances cattle health',
      'Balanced nutrition',
      'Cost-effective',
      'Easy to digest',
      'Increases weight gain',
    ],
  },
  'wheat': {
    title: 'Premium Wheat',
    subtitle: 'High Quality | Export Grade | Multiple Varieties',
    description: 'Export quality wheat sourced from the best farms. Our wheat meets international standards and is perfect for flour mills, bakeries, and food processing industries.',
    mainImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2074&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop',
    ],
    varieties: [
      {
        name: 'Durum Wheat',
        description: 'High protein content, ideal for pasta',
        features: ['Protein: 13-15%', 'Gluten: Strong', 'Color: Golden'],
      },
      {
        name: 'Hard Red Wheat',
        description: 'Perfect for bread making',
        features: ['Protein: 12-14%', 'Gluten: High', 'Baking: Excellent'],
      },
      {
        name: 'Soft Wheat',
        description: 'Ideal for cakes and pastries',
        features: ['Protein: 8-10%', 'Texture: Fine', 'Versatile'],
      },
    ],
    specifications: {
      'Protein Content': '11-15%',
      'Moisture': 'Max 12%',
      'Foreign Matter': 'Max 2%',
      'Test Weight': '78-82 kg/hl',
      'Packaging': '25kg, 50kg bags or bulk',
      'Shelf Life': '12 months',
    },
    certifications: ['APEDA Certified', 'FSSAI Approved', 'Export Quality', 'Organic Available'],
    benefits: [
      'High protein content',
      'Excellent baking quality',
      'Clean and sorted',
      'Multiple varieties available',
      'Suitable for various applications',
      'Consistent quality',
    ],
  },
  'spices': {
    title: 'Indian Spices',
    subtitle: 'Aromatic | Pure | Premium Quality',
    description: 'Authentic Indian spices with rich aroma and flavor. Our spices are carefully selected, processed, and packed to retain their natural essence and quality.',
    mainImage: 'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599909533730-f9d7e5d4e6c5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528613526328-8c19bd037322?q=80&w=870&auto=format&fit=crop',
    ],
    varieties: [
      {
        name: 'Turmeric Powder',
        description: 'Pure and vibrant yellow color',
        features: ['Curcumin: 3-5%', 'Color: Bright', 'Aroma: Strong'],
      },
      {
        name: 'Red Chili Powder',
        description: 'Hot and flavorful',
        features: ['Heat: Adjustable', 'Color: Deep Red', 'Pure'],
      },
      {
        name: 'Coriander Seeds',
        description: 'Fresh and aromatic',
        features: ['Size: Uniform', 'Aroma: Fresh', 'Quality: Premium'],
      },
      {
        name: 'Cumin Seeds',
        description: 'Rich flavor and aroma',
        features: ['Purity: 99%+', 'Aroma: Strong', 'Clean'],
      },
    ],
    specifications: {
      'Purity': '99% minimum',
      'Moisture': 'Max 10%',
      'Foreign Matter': 'Max 0.5%',
      'Packaging': '100g, 500g, 1kg, 5kg, 25kg',
      'Shelf Life': '12-24 months',
      'Processing': 'Steam sterilized',
    },
    certifications: ['APEDA Certified', 'FSSAI Approved', 'Organic Certified', 'Halal Certified'],
    benefits: [
      'Pure and natural',
      'Rich aroma and flavor',
      'Steam sterilized',
      'No artificial colors',
      'Hygienically packed',
      'Export quality',
    ],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productsData[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-green-600 text-white rounded-full"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/918950003299?text=Hello%20I%20want%20to%20inquire%20about%20${encodeURIComponent(product.title)}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-green-700 hover:text-green-800 font-semibold mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl mb-4">
                <Image
                  src={product.gallery[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-green-500 scale-105'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h1>
                <p className="text-lg text-green-600 font-semibold mb-4">
                  {product.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 bg-white border-2 border-green-200 rounded-full px-4 py-2 text-sm font-semibold text-green-700"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Inquiry</span>
                </a>
                <button
                  onClick={() => router.push('/#contact')}
                  className="flex-1 px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-xl border-2 border-green-100">
                  <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Premium Quality</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border-2 border-green-100">
                  <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Fast Shipping</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border-2 border-green-100">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Certified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      {product.varieties && product.varieties.length > 0 && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Available Varieties
              </h2>
              <p className="text-lg text-gray-600">
                Choose from our premium selection
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.varieties.map((variety: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {variety.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {variety.description}
                  </p>
                  <ul className="space-y-2">
                    {variety.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications & Benefits */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-lg">
                <dl className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-100 pb-3">
                      <dt className="font-semibold text-gray-700">{key}</dt>
                      <dd className="text-gray-600">{value as string}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h2>
              <div className="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-lg">
                <ul className="space-y-4">
                  {product.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Place Your Order?
            </h2>
            <p className="text-xl text-green-50">
              Contact us today for pricing, samples, and bulk orders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-green-700 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Inquiry</span>
              </a>
              <button
                onClick={() => router.push('/#contact')}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300"
              >
                Contact Form
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
