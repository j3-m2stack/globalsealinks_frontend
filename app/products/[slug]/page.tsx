'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, CheckCircle2, Package, Truck, Shield, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Product data
const productsData: Record<string, any> = {
  'basmati-rice': {
    title: 'Premium Basmati Rice',
    subtitle: 'Extra Long Grain | Aromatic | Export Quality',
    description: 'Our premium Basmati rice is sourced from the finest farms in India, known for its exceptional aroma, extra-long grains, and superior quality. Perfect for international markets demanding the best.',
    mainImage: '/images/basmati-rice.PNG',
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
    certifications: ['APEDA Certified', 'FSSAI Approved', 'ISO 22000', 'HACCP', 'Export Quality'],
  },
  'cattle-feed': {
    title: 'Premium Cattle Feed',
    subtitle: 'Nutritious | Balanced | High Quality',
    description: 'Our comprehensive range of cattle feed products ensures optimal nutrition for livestock. From oil cakes to protein-rich meals, we provide everything needed for healthy cattle growth, improved milk production, and overall livestock productivity.',
    mainImage: '/images/cattle-feed.png',
    varieties: [
      {
        name: 'Cottonseed Oil Cake',
        description: 'A high-protein feed ingredient that supports milk production and overall cattle health. Rich in fiber and essential nutrients.',
        image: '/cattle-feed/Cotton seed oil cakes.jpeg',
        features: ['High Protein Content', 'Rich in Fiber', 'Supports Milk Production'],
      },
      {
        name: 'Groundnut Cake (Peanut Oil Cake)',
        description: 'Protein-rich cattle feed that enhances growth, improves milk yield, and provides essential energy for livestock.',
        image: '/cattle-feed/Groundnut cake.PNG',
        features: ['Protein-Rich', 'Enhances Growth', 'Improves Milk Yield'],
      },
      {
        name: 'Wheat Bran',
        description: 'A fiber-rich feed that aids digestion and promotes better gut health in cattle.',
        image: '/cattle-feed/Wheat bran.jpeg',
        features: ['Fiber-Rich', 'Aids Digestion', 'Promotes Gut Health'],
      },
      {
        name: 'Chickpea Meal',
        description: 'Nutritious plant-based protein source that supports muscle development and improves feed efficiency.',
        image: '/cattle-feed/Chickpea meal.jpeg',
        features: ['Plant-Based Protein', 'Muscle Development', 'Feed Efficiency'],
      },
      {
        name: 'Black Gram Meal',
        description: 'Rich in protein and minerals, ideal for boosting strength and overall livestock productivity.',
        image: '/cattle-feed/Black gram meal.PNG',
        features: ['Rich in Protein', 'High Minerals', 'Boosts Strength'],
      },
      {
        name: 'Mash Type Cattle Feed (Balanced Feed)',
        description: 'A carefully formulated mix of nutrients designed to ensure balanced growth, improved milk yield, and overall health.',
        image: '/cattle-feed/Mesh type cattle feed.jpeg',
        features: ['Balanced Nutrition', 'Improved Milk Yield', 'Overall Health'],
      },
      {
        name: 'Cattle Feed Pellets',
        description: 'Compressed feed for easy consumption, reduced wastage, and consistent nutrition delivery.',
        image: '/cattle-feed/Cattle feed pellets.jpeg',
        features: ['Easy Consumption', 'Reduced Wastage', 'Consistent Nutrition'],
      },
      {
        name: 'Protein Mix Meal (DDGS)',
        description: 'High-energy, high-protein feed derived from grains, supporting rapid growth and improved performance.',
        image: '/cattle-feed/DDGS.PNG',
        features: ['High Energy', 'High Protein', 'Rapid Growth'],
      },
      {
        name: 'De-Oiled Rice Bran (DORB)',
        description: 'Economical feed ingredient rich in fiber and nutrients, ideal for maintaining cattle health and digestion.',
        image: '/cattle-feed/DORB.jpeg',
        features: ['Economical', 'Rich in Fiber', 'Maintains Health'],
      },
      {
        name: 'Soybean Meal',
        description: 'Premium protein source widely used to enhance milk production and overall livestock growth.',
        image: '/cattle-feed/Soyabean meal.PNG',
        features: ['Premium Protein', 'Enhances Milk Production', 'Livestock Growth'],
      },
      {
        name: 'Baled Wheat Straw',
        description: 'Our wheat straw bales are clean, well-dried, and ideal for livestock feed and bedding.',
        image: '/cattle-feed/Baled Wheat Straw.jpeg',
        features: ['Clean & Well-Dried', 'Ideal for Bedding', 'Livestock Feed'],
      },
    ],
    certifications: ['FSSAI Approved', 'GMP Certified', 'Quality Tested'],
  },
  'wheat': {
    title: 'Premium Wheat',
    subtitle: 'High Quality | Export Grade | Multiple Varieties',
    description: 'Export quality wheat sourced from the best farms. Our wheat meets international standards and is perfect for flour mills, bakeries, and food processing industries.',
    mainImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2074&auto=format&fit=crop',
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
    certifications: ['APEDA Certified', 'FSSAI Approved', 'Export Quality', 'Organic Available'],
  },
  'spices': {
    title: 'Indian Spices',
    subtitle: 'Aromatic | Pure | Premium Quality',
    description: 'Authentic Indian spices with rich aroma and flavor. Our spices are carefully selected, processed, and packed to retain their natural essence and quality.',
    mainImage: 'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?q=80&w=2070&auto=format&fit=crop',
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
    certifications: ['APEDA Certified', 'FSSAI Approved', 'Organic Certified', 'Halal Certified'],
  },
  'non-basmati-rice': {
    title: 'Non-Basmati Rice',
    subtitle: 'High Quality | Nutritious | Versatile',
    description: 'High-quality non-Basmati rice varieties suitable for daily consumption and various culinary applications. Our rice is carefully processed to maintain its natural nutrients and quality.',
    mainImage: '/images/non-basmati-rice.PNG',
    certifications: ['FSSAI Approved', 'Export Quality', 'Quality Tested'],
  },
  'maize': {
    title: 'Yellow Maize',
    subtitle: 'Premium Quality | High Yield | Multi-Purpose',
    description: 'Premium quality yellow maize, ideal for animal feed, food processing, and industrial applications. Our maize is sourced from the best farms and processed to meet international standards.',
    mainImage: '/images/Yellow maize.jpeg',
    certifications: ['FSSAI Approved', 'Export Quality', 'Quality Tested'],
  },
  'chickpeas': {
    title: 'Premium Chickpeas',
    subtitle: 'Nutritious | High Protein | Export Quality',
    description: 'Premium quality chickpeas rich in protein and essential nutrients. Perfect for various culinary applications and export markets.',
    mainImage: '/images/Chickpeas.jpeg',
    certifications: ['FSSAI Approved', 'Export Quality', 'Organic Available'],
  },
  'coriander': {
    title: 'Coriander Seeds',
    subtitle: 'Aromatic | Pure | Premium Quality',
    description: 'Fresh and aromatic coriander seeds with rich flavor. Our coriander is carefully selected and processed to retain its natural aroma and quality.',
    mainImage: '/images/Coriander seeds.jpeg',
    certifications: ['APEDA Certified', 'FSSAI Approved', 'Organic Certified'],
  },
  'soyabean': {
    title: 'Premium Soyabean',
    subtitle: 'High Protein | Nutritious | Export Quality',
    description: 'Premium quality soyabean rich in protein and essential nutrients. Perfect for oil extraction, food processing, and animal feed applications.',
    mainImage: '/images/soyabean.png',
    certifications: ['FSSAI Approved', 'Export Quality', 'Quality Tested'],
  },
  'onions': {
    title: 'Fresh Onions',
    subtitle: 'Premium Quality | Fresh | Export Grade',
    description: 'Fresh and high-quality onions sourced from the best farms. Available in various sizes and varieties for domestic and international markets.',
    mainImage: '/images/onion.png',
    certifications: ['APEDA Certified', 'FSSAI Approved', 'Export Quality'],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

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
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={product.mainImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.varieties.map((variety: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image if available */}
                  {variety.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image
                        src={variety.image}
                        alt={variety.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {!variety.image && (
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    )}
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
