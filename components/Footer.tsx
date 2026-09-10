'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Footer() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = (id: string) => {
    if (pathname && pathname.startsWith('/products/')) {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const productLinks = [
    { name: t.cattleFeed, slug: 'cattle-feed' },
    { name: t.basmati, slug: 'basmati-rice' },
    { name: t.nonBasmati, slug: 'non-basmati-rice' },
    { name: t.soyabean, slug: 'soyabean' },
    { name: t.chickpeas, slug: 'chickpeas' },
    { name: t.maize || 'Maize', slug: 'maize' },
    { name: t.coriander, slug: 'coriander' },
    { name: t.onions, slug: 'onions' },
  ];

  const socialIcons = [
    {
      href: 'https://www.facebook.com/share/1FzfFW26ny/?mibextid=wwXIfr',
      label: 'Facebook',
      color: 'hover:bg-blue-600 hover:text-white',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.092 24 12.073z" />
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/globalsealinks?utm_source=qr',
      label: 'Instagram',
      color: 'hover:bg-pink-500 hover:text-white',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
    }
  ];

  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.8),transparent_35%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <div className="rounded-3xl overflow-hidden ">
              <Image
                src="/logo1.JPG"
                alt="Global Sea Links"
                width={250}
                height={120}
                className="h-60 md:h-60 w-auto object-cover"
                priority
              />
            </div>

            <div className="space-y-4 text-gray-600">
              <a href="mailto:global01@gmail.com" className="flex items-center gap-3 hover:text-gray-900 transition-colors">
                <Mail size={18} />
                globalsealinks01@gmail.com
              </a>

              <a href="tel:+918959893299" className="flex items-center gap-3 hover:text-gray-900 transition-colors">
                <Phone size={18} />
                +918959893299 +917879068147
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-900">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {['about', 'products', 'imports', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigateToSection(item)}
                    className="text-gray-600 hover:text-gray-900 transition-all"
                  >
                    {t[item as keyof typeof t]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-900">{t.products}</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-gray-600 hover:text-gray-900 inline-block transition-all"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-900">{t.followUs}</h4>

            <div className="flex gap-4 mb-6">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {t.connectWithUsSocial ||
                'Stay connected for updates, global trade insights and latest exports.'}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Global Sea Links.{' '}
            {t.allRightsReserved || 'All rights reserved.'}
          </p>

          <div className="flex gap-6 text-sm">
            <button
              onClick={() => navigateToSection('contact')}
              className="hover:text-gray-900 transition-colors"
            >
              {t.privacyPolicy || 'Privacy Policy'}
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="hover:text-gray-900 transition-colors"
            >
              {t.termsOfService || 'Terms of Service'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}