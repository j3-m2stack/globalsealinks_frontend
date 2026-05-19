'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const sections = [
    { id: 'hero', label: t.home },
    { id: 'about', label: t.about },
    { id: 'products', label: t.products },
    { id: 'process', label: t.process },
    { id: 'imports', label: t.imports },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navigateToSection = (id: string) => {
    setActiveSection(id);

    if (pathname && pathname.startsWith('/products/')) {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsOpen(false);
    setShowLangMenu(false);
  };

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  ];

  const getNavButtonClass = (id: string) =>
    `px-4 py-2.5 text-sm rounded-lg transition-all font-medium ${activeSection === id
      ? 'bg-green-100 text-green-700'
      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white shadow-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo */}
            <button
              onClick={() => navigateToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.PNG"
                alt="Global Sea Links"
                width={180}
                height={60}
                className="h-28 w-auto"
                priority
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={getNavButtonClass(section.id)}
                >
                  {section.label}
                </button>
              ))}

              {/* Language Switcher */}
              <div className="relative ml-2">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all border border-green-200/50"
                >
                  <Globe className="w-4 h-4 text-green-600" />
                  <span>
                    {languages.find((l) => l.code === language)?.flag}
                  </span>
                </button>

                {showLangMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[170px] overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-green-50 transition-colors flex items-center space-x-3 ${language === lang.code
                          ? 'bg-green-50 text-green-600'
                          : 'text-gray-700'
                          }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm font-medium">
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-green-50"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={`block w-full text-left font-medium py-3 px-4 rounded-lg transition-all ${activeSection === section.id
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-green-50'
                    }`}
                >
                  {section.label}
                </button>
              ))}

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <p className="text-sm font-medium text-gray-500 px-2 mb-2">
                  Language
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${language === lang.code
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-50 text-gray-700 hover:bg-green-50'
                        }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}