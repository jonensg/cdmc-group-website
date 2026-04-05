import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section style={{ background: '#080808' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-4xl">

          {/* Gold rule */}
          <div className="w-8 h-px mb-12" style={{ background: '#A8842A' }} />

          <h2
            className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8"
            style={{
              fontFamily: 'var(--font-dm-serif)',
              color: '#F7F4EF',
            }}
          >
            {t('headline')}
          </h2>

          <p
            className="text-base sm:text-lg max-w-xl mb-14 leading-relaxed"
            style={{ color: '#7A7268' }}
          >
            {t('subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Link
              href={`/${locale}/qualify`}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:opacity-80"
              style={{
                background: '#F7F4EF',
                color: '#080808',
              }}
            >
              {t('primary')}
              <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/85200000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:opacity-80"
              style={{
                border: '1px solid rgba(247,244,239,0.15)',
                color: '#7A7268',
              }}
            >
              {t('whatsapp')}
            </a>
          </div>

          <p className="text-xs" style={{ color: '#4A4540' }}>
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}
