'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = ['services', 'industries', 'insights', 'work', 'about', 'contact'] as const;

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
    const handleScroll = () => setScrolled(window.scrollY > 60);
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

  const navColor = scrolled ? '#4A4540' : 'rgba(247,244,239,0.6)';
  const navHoverColor = scrolled ? '#0F0F0F' : '#F7F4EF';
  const logoColor = scrolled ? '#A8842A' : '#A8842A';
  const logoSubColor = scrolled ? '#8A8078' : 'rgba(247,244,239,0.4)';

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        background: scrolled ? '#F7F4EF' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(15,15,15,0.08)' : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span
                className="text-base font-bold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-inter)', color: logoColor }}
              >
                CDMC
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: logoSubColor }}>
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${locale}/${item}`}
                className="font-medium tracking-widest uppercase transition-colors"
                style={{ color: navColor, fontSize: '24px' }}
                onMouseEnter={e => (e.currentTarget.style.color = navHoverColor)}
                onMouseLeave={e => (e.currentTarget.style.color = navColor)}
              >
                {t(item)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-3">
              {localeOptions.map((loc, i) => (
                <span key={loc.code} className="flex items-center gap-3">
                  <button
                    onClick={() => switchLocale(loc.code)}
                    className="text-xs font-medium tracking-wider transition-colors"
                    style={{
                      color: locale === loc.code
                        ? (scrolled ? '#A8842A' : '#F7F4EF')
                        : navColor,
                      fontWeight: locale === loc.code ? '600' : '400',
                    }}
                  >
                    {loc.label}
                  </button>
                  {i < localeOptions.length - 1 && (
                    <span style={{ color: scrolled ? 'rgba(15,15,15,0.15)' : 'rgba(247,244,239,0.15)', fontSize: '10px' }}>|</span>
                  )}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}/qualify`}
              className="hidden md:inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                background: scrolled ? '#0F0F0F' : 'rgba(247,244,239,0.1)',
                color: scrolled ? '#F7F4EF' : '#F7F4EF',
                border: scrolled ? '1px solid #0F0F0F' : '1px solid rgba(247,244,239,0.3)',
              }}
            >
              {t('getConsultation')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 transition-colors"
              style={{ color: scrolled ? '#0F0F0F' : '#F7F4EF' }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-6 space-y-1"
            style={{
              background: '#F7F4EF',
              borderTop: '1px solid rgba(15,15,15,0.08)',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${locale}/${item}`}
                className="block px-3 py-3 text-xs font-medium tracking-widest uppercase transition-colors"
                style={{ color: '#4A4540' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item)}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-3 pt-4">
              {localeOptions.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className="text-xs font-medium tracking-wider transition-colors"
                  style={{
                    color: locale === loc.code ? '#A8842A' : '#8A8078',
                    fontWeight: locale === loc.code ? '600' : '400',
                  }}
                >
                  {loc.label}
                </button>
              ))}
            </div>
            <div className="px-3 pt-3">
              <Link
                href={`/${locale}/qualify`}
                className="block w-full text-center px-4 py-3 text-xs font-semibold tracking-widest uppercase"
                style={{ background: '#0F0F0F', color: '#F7F4EF' }}
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
