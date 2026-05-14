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
    href: 'https://facebook.com',
    label: 'Facebook',
    color: 'hover:bg-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.092 24 12.073z" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    color: 'hover:bg-sky-500',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4 4 0 100 8 4 4 0 000-8zm6.406-1.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:bg-blue-700',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM3.555 20.452h3.564V9H3.555v11.452z" />
      </svg>
    ),
  },
];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-green-800 text-white relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),transparent_35%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl inline-block mb-6 border border-emerald-100">
              <Image
                src="/logo1.JPG"
                alt="Global Sea Links"
                width={250}
                height={120}
                className="h-60 md:h-60 w-auto object-cover"
                priority
              />
            </div>

            <div className="space-y-4 text-emerald-100">
              <a
                href="mailto:global01@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={18} />
                globalsealinks01@gmail.com
              </a>

              <a
                href="tel:+918959893299"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={18} />
                +918959893299 +917879068147
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t.quickLinks}
            </h4>
            <ul className="space-y-3">
              {['about', 'products', 'imports', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigateToSection(item)}
                    className="text-emerald-100 hover:text-white hover:translate-x-1 transition-all"
                  >
                    {t[item as keyof typeof t]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t.products}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-emerald-100 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t.followUs}
            </h4>

            <div className="flex gap-4 mb-6">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-emerald-100 text-sm leading-relaxed">
              {t.connectWithUsSocial ||
                'Stay connected for updates, global trade insights and latest exports.'}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-emerald-200">
            © {new Date().getFullYear()} Global Sea Links.{' '}
            {t.allRightsReserved || 'All rights reserved.'}
          </p>

          <div className="flex gap-6 text-sm">
            <button
              onClick={() => navigateToSection('contact')}
              className="hover:text-white transition-colors"
            >
              {t.privacyPolicy || 'Privacy Policy'}
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="hover:text-white transition-colors"
            >
              {t.termsOfService || 'Terms of Service'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}