import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#111118' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201, 168, 76, 0.06), transparent)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="max-w-4xl mx-auto text-center p-12 sm:p-16 rounded-3xl border-gold-glow"
          style={{ background: '#16161F' }}
        >
          {/* Top gold line */}
          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          />

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              color: '#F5F5F5',
            }}
          >
            {t('headline')}
          </h2>
          <p
            className="text-base sm:text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: '#9CA3AF' }}
          >
            {t('subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                color: '#0A0A0F',
                fontFamily: 'var(--font-space-grotesk)',
                boxShadow: '0 0 30px rgba(201, 168, 76, 0.25)',
              }}
            >
              {t('primary')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/85200000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                border: '1px solid rgba(201, 168, 76, 0.3)',
                color: '#C9A84C',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              <MessageCircle size={18} />
              {t('whatsapp')}
            </a>
          </div>

          <p className="mt-8 text-xs" style={{ color: '#4B5563' }}>
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}
