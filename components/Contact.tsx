'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, XCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productOfInterest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const certifications = [
    t.apedaCertified,
    t.fssaiApproved,
    t.iso22000,
    t.haccp,
    t.gmp,
    t.fdaCompliant,
    t.usdaStandard,
    t.iecRegistered,
    t.exportQualityAssured,
    t.organicCertified,
    t.halalCertified,
    t.globalTradeVerified,
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCertifications = [...certifications, ...certifications];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset previous status
    setSubmitStatus({ type: null, message: '' });
    setIsSubmitting(true);

    try {
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success
        setSubmitStatus({
          type: 'success',
          message: data.message || t.messageSent,
        });

        // Reset form
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          country: '',
          productOfInterest: '',
          message: ''
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      } else {
        // Error from API
        setSubmitStatus({
          type: 'error',
          message: data.error || t.messageFailed,
        });
      }
    } catch (error) {
      // Network or other errors
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: t.networkError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-100/50 via-green-50 to-teal-100/50 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
          alt="Contact Background"
          fill
          className="object-cover opacity-5"
        />
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-green-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100/70 to-teal-100/70 text-emerald-700 font-semibold px-5 py-2.5 rounded-full shadow-sm mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm sm:text-base">{t.globalStandards}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              {t.globalCertifications}
            </h3>
          </div>

          {/* Slider */}
          <div className="relative overflow-hidden">
            {/* Gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-100/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-100/50 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden py-4">
              <motion.div
                className="flex gap-4"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 28,
                  ease: 'linear',
                }}
              >
                {duplicatedCertifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white/40 backdrop-blur-xl border border-white/30 rounded-full px-5 py-3 shadow-md hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                        {cert}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-green-200/50 shadow-sm mb-4 sm:mb-6"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{t.contactTitle}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 px-4">
            {t.contactTitle}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.contactSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full bg-gradient-to-br from-white/10 to-emerald-100/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(16,185,129,0.08)]">
              {/* Success/Error Alert */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-3 rounded-xl flex items-start space-x-3 ${submitStatus.type === 'success'
                    ? 'bg-green-50 border-2 border-green-200'
                    : 'bg-red-50 border-2 border-red-200'
                    }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                        }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus({ type: null, message: '' })}
                    className={`text-sm font-semibold ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                      }`}
                  >
                    ✕
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-between">
                {/* Row 1: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      {t.fullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      minLength={2}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                      placeholder={t.enterFullName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      {t.companyName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      minLength={2}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                      placeholder={t.enterCompanyName}
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      {t.emailAddress} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                      placeholder={t.enterEmail}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      {t.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                      placeholder={t.enterPhone}
                    />
                  </div>
                </div>

                {/* Row 3: Country & Product of Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      {t.country} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      minLength={2}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                      placeholder={t.enterCountry}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="productOfInterest"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      {t.productOfInterest}
                    </label>
                    <select
                      id="productOfInterest"
                      name="productOfInterest"
                      value={formData.productOfInterest}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                    >
                      <option value="">{t.selectCategory}</option>
                      <option value="Basmati Rice">{t.basmatiRice}</option>
                      <option value="Non-Basmati Rice">{t.nonBasmatiRice}</option>
                      <option value="Wheat">{t.wheat}</option>
                      <option value="Corn">{t.corn}</option>
                      <option value="Soybean">{t.soybean}</option>
                      <option value="Sugar">{t.sugar}</option>
                      <option value="Spices">{t.spices}</option>
                      <option value="Other">{t.other}</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t.yourMessage} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    minLength={10}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                    placeholder={t.enterMessage}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-base hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t.sendingMessage}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.sendInquiry}</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Office Address Card */}
            <div className="bg-gradient-to-br from-white/15 to-emerald-50/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t.officeAddress}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Madhuban Colony, Jalgaon Road, Jamner<br />
                    Jalgaon, Maharashtra 424206<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-white/15 to-emerald-50/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t.phone}
                  </h4>
                  <a
                    href="tel:+919423744675"
                    className="text-gray-700 hover:text-blue-700 font-medium block text-sm mb-1"
                  >
                    +91 9423744675
                  </a>
                  <a
                    href="tel:+919423744675"
                    className="text-gray-700 hover:text-blue-700 font-medium block text-sm"
                  >
                    +91 9423744675 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-white/15 to-emerald-50/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t.email}
                  </h4>
                  <a
                    href="mailto:sales@siaexim.com"
                    className="text-gray-700 hover:text-blue-700 font-medium break-all text-sm block mb-1"
                  >
                    sales@siaexim.com
                  </a>
                  <a
                    href="mailto:contact@siaexim.com"
                    className="text-gray-700 hover:text-blue-700 font-medium break-all text-sm block"
                  >
                    contact@siaexim.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-white/15 to-emerald-50/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {t.businessHours}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.mondayFriday}<br />
                    {t.saturday}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            {/* <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-xl p-4 shadow-xl text-white">
              <h4 className="text-base font-bold mb-2">Quick Contact via WhatsApp</h4>
              <p className="text-green-50 mb-3 text-xs">Get instant response to your queries</p>
              <a
                href="https://wa.me/918959893299?text=Hello%20I%20want%20to%20inquire%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:scale-105 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div> */}
          </motion.div>
        </div>

        {/* Google Maps - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div >
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8!2d75.8!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Madhuban Colony, Jalgaon Road, Jamner"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              Madhuban Colony, Jalgaon Road, Jamner, Jalgaon, Maharashtra 424206, India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
