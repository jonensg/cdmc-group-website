'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = ['services', 'industries', 'work', 'about', 'contact'] as const;

const localeOptions = [
  { code: 'en', label: 'EN' },
  { code: 'zh-HK', label: '繁中' },
  { code: 'zh-CN', label: '简中' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPathWithoutLocale = () => {
    const segments = pathname.split('/').filter(Boolean);
    if (localeOptions.some(l => l.code === segments[0])) {
      return '/' + segments.slice(1).join('/');
    }
    return pathname;
  };

  const switchLocale = (newLocale: string) => {
    const path = getPathWithoutLocale();
    router.push(`/${newLocale}${path}`);
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 10, 15, 0.95)'
          : 'rgba(10, 10, 15, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 group">
            <div className="flex flex-col leading-none">
              <span
                className="text-lg font-bold tracking-wide"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  color: '#C9A84C',
                }}
              >
                CDMC
              </span>
              <span className="text-[10px] tracking-widest uppercase" style={{ color: '#6B7280' }}>
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${locale}/${item}`}
                className="text-sm font-medium transition-colors hover:text-[#C9A84C]"
                style={{
                  color: '#9CA3AF',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {t(item)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-1 rounded-md p-1" style={{ border: '1px solid rgba(201, 168, 76, 0.2)' }}>
              {localeOptions.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className="px-2.5 py-1 text-xs rounded transition-all duration-200"
                  style={{
                    background: locale === loc.code ? '#C9A84C' : 'transparent',
                    color: locale === loc.code ? '#0A0A0F' : '#9CA3AF',
                    fontWeight: locale === loc.code ? '600' : '400',
                  }}
                >
                  {loc.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#0A0A0F',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              {t('getConsultation')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: '#C9A84C' }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 space-y-1 border-t"
            style={{ borderColor: 'rgba(201, 168, 76, 0.15)' }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${locale}/${item}`}
                className="block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors"
                style={{ color: '#9CA3AF' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item)}
              </Link>
            ))}
            <div className="flex items-center space-x-1 px-3 pt-2">
              {localeOptions.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className="px-3 py-1.5 text-xs rounded transition-all"
                  style={{
                    background: locale === loc.code ? '#C9A84C' : 'rgba(201, 168, 76, 0.1)',
                    color: locale === loc.code ? '#0A0A0F' : '#9CA3AF',
                  }}
                >
                  {loc.label}
                </button>
              ))}
            </div>
            <div className="px-3 pt-2">
              <Link
                href={`/${locale}/contact`}
                className="block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  color: '#0A0A0F',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('getConsultation')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
