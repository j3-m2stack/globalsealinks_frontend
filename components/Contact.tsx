'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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
          message: data.message || 'Your message has been sent successfully!',
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      } else {
        // Error from API
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      // Network or other errors
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden"
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
            <span className="text-sm sm:text-base">Get In Touch</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 px-4">
            {t.contactTitle}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.contactSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-green-100/50 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              
              {/* Success/Error Alert */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-3 rounded-xl flex items-start space-x-3 ${
                    submitStatus.type === 'success'
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
                      className={`text-sm font-medium ${
                        submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus({ type: null, message: '' })}
                    className={`text-sm font-semibold ${
                      submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    ✕
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    minLength={2}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t.email}
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
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    {t.message}
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
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-base hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>{t.sendMessage}</span>
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
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>

            {/* Phone Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    Phone / WhatsApp
                  </h4>
                  <a
                    href="tel:+918959893299"
                    className="text-green-600 hover:text-green-700 font-medium block text-xs mb-0.5"
                  >
                    +91 8959893299
                  </a>
                  <a
                    href="tel:+917879068147"
                    className="text-green-600 hover:text-green-700 font-medium block text-xs"
                  >
                    +91 7879068147
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:globalsealinks01@gmail.com"
                    className="text-blue-600 hover:text-blue-700 font-medium break-all text-xs"
                  >
                    globalsealinks01@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 font-medium text-xs">India</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-xl p-4 shadow-xl text-white">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
