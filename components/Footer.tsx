'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Mail, Phone, Share2, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = (id: string) => {
    // If we're on a product detail page, go to home first
    if (pathname && pathname.startsWith('/products/')) {
      router.push(`/#${id}`);
    } else {
      // We're on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const productLinks = [
    { name: t.cattleFeed, slug: 'cattle-feed' },
    { name: t.rice, slug: 'basmati-rice' },
    { name: t.rice, slug: 'non-basmati-rice' },
    { name: t.soyabean, slug: 'soyabean' },
    { name: t.chickpeas, slug: 'chickpeas' },
    { name: t.maize || 'Maize', slug: 'maize' },
    { name: t.coriander, slug: 'coriander' },
    { name: t.onions, slug: 'onions' },
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Global Sea Links
            </h3>
            <p className="text-green-100 leading-relaxed mb-6">
              {t.footerDescription}
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-green-200">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:global01@gmail.com"
                  className="hover:text-green-300 transition-colors"
                >
                  global01@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-green-200">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+918950003299"
                  className="hover:text-green-300 transition-colors"
                >
                  +91 89500 03299
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateToSection('hero')}
                  className="text-green-200 hover:text-green-300 transition-colors hover:translate-x-1 inline-block"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('about')}
                  className="text-green-200 hover:text-green-300 transition-colors hover:translate-x-1 inline-block"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('products')}
                  className="text-green-200 hover:text-green-300 transition-colors hover:translate-x-1 inline-block"
                >
                  {t.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('imports')}
                  className="text-green-200 hover:text-green-300 transition-colors hover:translate-x-1 inline-block"
                >
                  {t.imports}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('contact')}
                  className="text-green-200 hover:text-green-300 transition-colors hover:translate-x-1 inline-block"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.products}</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-green-200 hover:text-green-300 transition-colors hover:translate-x-1 inline-block"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t.followUs}</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-green-200 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-sky-500 transition-all duration-300 hover:scale-110 group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-green-200 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-green-200 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-green-200 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-green-200 text-sm mt-6 leading-relaxed">
              {t.connectWithUsSocial || 'Connect with us on social media for updates and news.'}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-200 text-sm">
              © {new Date().getFullYear()} Global Sea Links. {t.allRightsReserved || 'All rights reserved'}.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => navigateToSection('contact')}
                className="text-green-200 hover:text-green-300 transition-colors"
              >
                {t.privacyPolicy || 'Privacy Policy'}
              </button>
              <button
                onClick={() => navigateToSection('contact')}
                className="text-green-200 hover:text-green-300 transition-colors"
              >
                {t.termsOfService || 'Terms of Service'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
