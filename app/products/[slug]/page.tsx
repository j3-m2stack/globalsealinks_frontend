'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, CheckCircle2, Package, Truck, Shield, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/context/LanguageContext';

// Product data structure - now using translation keys
const getProductsData = (t: any): Record<string, any> => ({
  'basmati-rice': {
    titleKey: 'premiumBasmatiRice',
    subtitleKey: 'extraLongGrainAromatic',
    descriptionKey: 'basmatiRiceDetailDesc',
    mainImage: '/images/basmati-rice.PNG',
    varieties: [
      {
        nameKey: 'basmati1121',
        descriptionKey: 'basmati1121Desc',
        features: [`${t.length}: 8.3mm+`, `${t.purity}: 95%+`, `${t.moisture}: 12-13%`],
      },
      {
        nameKey: 'basmati1718',
        descriptionKey: 'basmati1718Desc',
        features: [`${t.length}: 8.0mm+`, `${t.purity}: 95%+`, `${t.aroma}: ${t.strong}`],
      },
      {
        nameKey: 'basmati1401',
        descriptionKey: 'basmati1401Desc',
        features: [`${t.length}: 8.2mm+`, `${t.purity}: 95%+`, `${t.cooking}: ${t.excellent}`],
      },
      {
        nameKey: 'basmati1509',
        descriptionKey: 'basmati1509Desc',
        features: [`${t.length}: 8.4mm+`, `${t.purity}: 95%+`, `${t.value}: ${t.best}`],
      },
    ],
    certifications: [t.apedaCertified, t.fssaiApproved, t.iso22000, t.haccp, t.exportQualityAssured],
  },
  'cattle-feed': {
    titleKey: 'premiumCattleFeed',
    subtitleKey: 'nutritiousBalancedQuality',
    descriptionKey: 'cattleFeedDetailDesc',
    mainImage: '/images/cattle-feed.png',
    varieties: [
      {
        nameKey: 'cottonseedOilCake',
        descriptionKey: 'cottonseedDesc',
        image: '/cattle-feed/Cotton seed oil cakes.jpeg',
        features: [t.highProteinContent, t.richInFiber, t.supportsMilkProduction],
      },
      {
        nameKey: 'groundnutCake',
        descriptionKey: 'groundnutDesc',
        image: '/cattle-feed/Groundnut cake.PNG',
        features: [t.proteinRich, t.enhancesGrowth, t.improvesMilkYield],
      },
      {
        nameKey: 'wheatBran',
        descriptionKey: 'wheatBranDesc',
        image: '/cattle-feed/Wheat bran.jpeg',
        features: [t.fiberRich, t.aidsDigestion, t.promotesGutHealth],
      },
      {
        nameKey: 'chickpeaMeal',
        descriptionKey: 'chickpeaMealDesc',
        image: '/cattle-feed/Chickpea meal.jpeg',
        features: [t.plantBasedProtein, t.muscleDevelopment, t.feedEfficiency],
      },
      {
        nameKey: 'blackGramMeal',
        descriptionKey: 'blackGramDesc',
        image: '/cattle-feed/Black gram meal.PNG',
        features: [t.proteinRich, t.highMinerals, t.boostsStrength],
      },
      {
        nameKey: 'mashTypeFeed',
        descriptionKey: 'mashTypeDesc',
        image: '/cattle-feed/Mesh type cattle feed.jpeg',
        features: [t.balancedNutrition, t.improvesMilkYield, t.overallHealth],
      },
      {
        nameKey: 'cattleFeedPellets',
        descriptionKey: 'pelletsDesc',
        image: '/cattle-feed/Cattle feed pellets.jpeg',
        features: [t.easyConsumption, t.reducedWastage, t.consistentNutrition],
      },
      {
        nameKey: 'proteinMixMeal',
        descriptionKey: 'proteinMixDesc',
        image: '/cattle-feed/DDGS.PNG',
        features: [t.highEnergy, t.highProteinContent, t.rapidGrowth],
      },
      {
        nameKey: 'deOiledRiceBran',
        descriptionKey: 'dorbDesc',
        image: '/cattle-feed/DORB.jpeg',
        features: [t.economical, t.richInFiber, t.maintainsHealth],
      },
      {
        nameKey: 'soyabeanMeal',
        descriptionKey: 'soyabeanMealDesc',
        image: '/cattle-feed/Soyabean meal.PNG',
        features: [t.premiumProtein, t.enhancesMilkProduction, t.livestockGrowth],
      },
      {
        nameKey: 'baledWheatStraw',
        descriptionKey: 'baledStrawDesc',
        image: '/cattle-feed/Baled Wheat Straw.jpeg',
        features: [t.cleanWellDried, t.idealForBedding, t.livestockFeed],
      },
    ],
    certifications: [t.fssaiApproved, `${t.gmp} ${t.certified}`, t.exportQualityAssured],
  },
  'wheat': {
    titleKey: 'premiumWheat',
    subtitleKey: 'highQualityExportGrade',
    descriptionKey: 'wheatDetailDesc',
    mainImage: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2074&auto=format&fit=crop',
    varieties: [
      {
        nameKey: 'durumWheat',
        descriptionKey: 'durumWheatDesc',
        features: [`${t.protein}: 13-15%`, `${t.gluten}: ${t.strong}`, `${t.color}: ${t.golden}`],
      },
      {
        nameKey: 'hardRedWheat',
        descriptionKey: 'hardRedWheatDesc',
        features: [`${t.protein}: 12-14%`, `${t.gluten}: ${t.high}`, `${t.baking}: ${t.excellent}`],
      },
      {
        nameKey: 'softWheat',
        descriptionKey: 'softWheatDesc',
        features: [`${t.protein}: 8-10%`, `${t.texture}: ${t.fine}`, t.versatile],
      },
    ],
    certifications: [t.apedaCertified, t.fssaiApproved, t.exportQualityAssured, t.organicCertified],
  },
  'spices': {
    titleKey: 'indianSpices',
    subtitleKey: 'aromaticPurePremium',
    descriptionKey: 'spicesDetailDesc',
    mainImage: 'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?q=80&w=2070&auto=format&fit=crop',
    varieties: [
      {
        nameKey: 'turmericPowder',
        descriptionKey: 'turmericDesc',
        features: [`${t.curcumin}: 3-5%`, `${t.color}: ${t.bright}`, `${t.aroma}: ${t.strong}`],
      },
      {
        nameKey: 'redChiliPowder',
        descriptionKey: 'redChiliDesc',
        features: [`${t.heat}: ${t.adjustable}`, `${t.color}: ${t.deepRed}`, t.pure],
      },
      {
        nameKey: 'corianderSeeds',
        descriptionKey: 'corianderSeedsDesc',
        features: [`${t.size}: ${t.uniform}`, `${t.aroma}: ${t.fresh}`, t.premiumQuality],
      },
      {
        nameKey: 'cuminSeeds',
        descriptionKey: 'cuminDesc',
        features: [`${t.purity}: 99%+`, `${t.aroma}: ${t.strong}`, t.clean],
      },
    ],
    certifications: [t.apedaCertified, t.fssaiApproved, t.organicCertified, t.halalCertified],
  },
  'non-basmati-rice': {
    titleKey: 'nonBasmatiRiceTitle',
    subtitleKey: 'highQualityNutritiousVersatile',
    descriptionKey: 'nonBasmatiRiceDetailDesc',
    mainImage: '/images/non-basmati-rice.PNG',
    certifications: [t.fssaiApproved, t.exportQualityAssured, t.exportQualityAssured],
  },
  'maize': {
    titleKey: 'yellowMaizeTitle',
    subtitleKey: 'premiumQualityHighYield',
    descriptionKey: 'maizeDetailDesc',
    mainImage: '/images/Yellow maize.jpeg',
    certifications: [t.fssaiApproved, t.exportQualityAssured, t.exportQualityAssured],
  },
  'chickpeas': {
    titleKey: 'premiumChickpeasTitle',
    subtitleKey: 'nutritiousHighProteinExport',
    descriptionKey: 'chickpeasDetailDesc',
    mainImage: '/images/Chickpeas.jpeg',
    certifications: [t.fssaiApproved, t.exportQualityAssured, t.organicCertified],
  },
  'coriander': {
    titleKey: 'corianderSeedsTitle',
    subtitleKey: 'aromaticPurePremiumQuality',
    descriptionKey: 'corianderDetailDesc',
    mainImage: '/images/Coriander seeds.jpeg',
    certifications: [t.apedaCertified, t.fssaiApproved, t.organicCertified],
  },
  'soyabean': {
    titleKey: 'premiumSoyabeanTitle',
    subtitleKey: 'highProteinNutritiousExport',
    descriptionKey: 'soyabeanDetailDesc',
    mainImage: '/images/soyabean.png',
    certifications: [t.fssaiApproved, t.exportQualityAssured, t.exportQualityAssured],
  },
  'onions': {
    titleKey: 'freshOnionsTitle',
    subtitleKey: 'premiumQualityFreshExport',
    descriptionKey: 'onionsDetailDesc',
    mainImage: '/images/onion.png',
    certifications: [t.apedaCertified, t.fssaiApproved, t.exportQualityAssured],
  },
});

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { t } = useLanguage();

  const productsData = getProductsData(t);
  const product = productsData[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t.productNotFound}</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-green-600 text-white rounded-full"
          >
            {t.goBackHome}
          </button>
        </div>
      </div>
    );
  }

  const title = t[product.titleKey as keyof typeof t] || product.titleKey;
  const subtitle = t[product.subtitleKey as keyof typeof t] || product.subtitleKey;
  const description = t[product.descriptionKey as keyof typeof t] || product.descriptionKey;

  const whatsappLink = `https://wa.me/918959893299?text=Hello%20I%20want%20to%20inquire%20about%20${encodeURIComponent(title)}`;

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
            onClick={() => router.push('/#products')}
            className="flex items-center space-x-2 text-green-700 hover:text-green-800 font-semibold mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{t.backToHome}</span>
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
                  alt={title}
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
                  {title}
                </h1>
                <p className="text-lg text-green-600 font-semibold mb-4">
                  {subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
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
                  <span>{t.sendInquiryBtn}</span>
                </a>
                <button
                  onClick={() => router.push('/#contact')}
                  className="flex-1 px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  {t.contactUsBtn}
                </button>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-xl border-2 border-green-100">
                  <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">{t.premiumQuality}</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border-2 border-green-100">
                  <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">{t.fastShipping}</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border-2 border-green-100">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">{t.certified}</p>
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
                {t.availableVarieties}
              </h2>
              <p className="text-lg text-gray-600">
                {t.chooseFromSelection}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.varieties.map((variety: any, index: number) => {
                const varietyName = t[variety.nameKey as keyof typeof t] || variety.nameKey;
                const varietyDesc = t[variety.descriptionKey as keyof typeof t] || variety.descriptionKey;
                
                return (
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
                          alt={varietyName}
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
                        {varietyName}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {varietyDesc}
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
                );
              })}
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
              {t.readyToOrder}
            </h2>
            <p className="text-xl text-green-50">
              {t.contactToday}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-green-700 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.whatsappInquiry}</span>
              </a>
              <button
                onClick={() => router.push('/#contact')}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300"
              >
                {t.contactForm}
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
