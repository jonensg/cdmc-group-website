import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Shield, Globe, TrendingUp } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-grid"
      style={{ background: '#0A0A0F' }}
    >
      {/* Background glow effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2D6BE4, transparent)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up"
            style={{
              border: '1px solid rgba(201, 168, 76, 0.3)',
              background: 'rgba(201, 168, 76, 0.05)',
            }}
          >
            <Globe size={14} style={{ color: '#C9A84C' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A84C' }}>
              {t('badge')}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in-up animate-delay-100"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <span className="text-gold-gradient">{t('headline')}</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 animate-fade-in-up animate-delay-200"
            style={{
              color: '#F5F5F5',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            {t('subheadline')}
          </p>

          {/* Tagline */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-300"
            style={{ color: '#9CA3AF' }}
          >
            {t('tagline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animate-delay-400">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#0A0A0F',
                fontFamily: 'var(--font-space-grotesk)',
                boxShadow: '0 0 30px rgba(201, 168, 76, 0.3)',
              }}
            >
              {t('cta')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/case-studies`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                border: '1px solid rgba(201, 168, 76, 0.4)',
                color: '#C9A84C',
                background: 'transparent',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-10 animate-fade-in-up animate-delay-400"
            style={{ borderTop: '1px solid rgba(201, 168, 76, 0.1)' }}
          >
            {[
              { icon: TrendingUp, label: t('trust1') },
              { icon: Shield, label: t('trust2') },
              { icon: Globe, label: t('trust3') },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} style={{ color: '#C9A84C' }} />
                <span className="text-sm" style={{ color: '#6B7280' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
