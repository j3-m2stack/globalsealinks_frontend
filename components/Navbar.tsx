'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'hi' as Language, name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-green-500/10'
            : 'bg-white/70 backdrop-blur-md shadow-lg'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                Global Sea Links
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all font-medium"
              >
                {t.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all font-medium"
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all font-medium"
              >
                {t.products}
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all font-medium"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('imports')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all font-medium"
              >
                {t.imports}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all font-medium"
              >
                {t.contact}
              </button>

              {/* Language Switcher */}
              <div className="relative ml-2">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all border border-green-200/50"
                >
                  <Globe className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">
                    {languages.find((l) => l.code === language)?.flag}
                  </span>
                </button>

                {showLangMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[160px] overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-green-50 transition-colors flex items-center space-x-3 ${
                          language === lang.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                >
                  <Globe className="w-5 h-5 text-green-600" />
                </button>

                {showLangMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[160px] overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-green-50 transition-colors flex items-center space-x-3 ${
                          language === lang.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-4 py-4 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                {t.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                {t.products}
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('imports')}
                className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                {t.imports}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                {t.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
