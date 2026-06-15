'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Globe, Phone } from 'lucide-react';
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

      if (el) {
        observer.observe(el);
      }
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
        element.scrollIntoView({
          behavior: 'smooth',
        });
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
    `px-4 py-2.5 text-sm rounded-xl transition-all duration-300 font-medium ${activeSection === id
      ? 'bg-green-100 text-green-700 shadow-sm'
      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 border-b ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-gray-200'
          : 'bg-white border-gray-100 shadow-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          {/* TOP AREA */}
          <div className="flex items-center justify-between py-2 lg:h-[120px]">
            {/* LOGO */}
            <button
              onClick={() => navigateToSection('hero')}
              className="flex items-center shrink-0"
            >
              <Image
                src="/logo-main.png"
                alt="Logo"
                width={500}
                height={300}
                priority
                className="
                w-auto
                transition-all
                duration-300
                h-[130px]
                sm:h-[160px]
                md:h-[180px]
                lg:h-[120px]
                xl:h-[140px]
                object-contain
                " 
              />
            </button>

            {/* MOBILE HAMBURGER */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                flex items-center justify-center
                p-3 rounded-xl
                bg-green-50 text-green-700
                hover:bg-green-100
                transition-all shadow-sm
              "
              >
                {isOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center gap-2 flex-wrap justify-center">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={getNavButtonClass(section.id)}
                >
                  {section.label}
                </button>
              ))}

              {/* LANGUAGE SWITCHER */}
              <div className="relative ml-2">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="
                  flex items-center gap-2 px-4 py-2.5 rounded-xl
                  bg-gradient-to-r from-green-50 to-emerald-50
                  hover:from-green-100 hover:to-emerald-100
                  transition-all border border-green-200/50
                "
                >
                  <Globe className="w-4 h-4 text-green-600" />

                  <span>
                    {languages.find((l) => l.code === language)?.flag}
                  </span>
                </button>

                {showLangMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[170px] overflow-hidden z-50">
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
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={`block w-full text-left font-medium py-3 px-4 rounded-xl transition-all ${activeSection === section.id
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-green-50 bg-gray-50'
                    }`}
                >
                  {section.label}
                </button>
              ))}

              {/* MOBILE LANGUAGE SWITCHER */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <p className="text-sm font-medium text-gray-500 px-2 mb-3">
                  Language
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${language === lang.code
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