'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappLink =
    'https://wa.me/918959893299?text=Hello%20I%20want%20to%20inquire%20about%20your%20products';

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />

        {/* Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-sm font-medium">Chat with us on WhatsApp</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900" />
        </div>
      </motion.div>
    </motion.a>
  );
}
