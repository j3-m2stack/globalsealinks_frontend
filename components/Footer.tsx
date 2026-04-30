'use client';

import { Share2, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Global Sea Links
            </h3>
            <p className="text-green-100 leading-relaxed mb-6">
              Connecting global markets with quality agro products and industrial materials.
            </p>
            <div className="flex items-center space-x-2 text-green-200">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:global01@gmail.com"
                className="hover:text-green-300 transition-colors"
              >
                global01@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  {t.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('imports')}
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  {t.imports}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-green-200 hover:text-green-300 transition-colors"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.products}</h4>
            <ul className="space-y-3 text-green-200">
              <li>{t.cattleFeed}</li>
              <li>{t.soyabean}</li>
              <li>{t.chickpeas}</li>
              <li>{t.rice}</li>
              <li>{t.coriander}</li>
              <li>{t.onions}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.followUs}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <span className="text-xl">🐦</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-green-200">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
