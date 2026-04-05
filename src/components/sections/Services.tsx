import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { key: 'orm', href: 'online-reputation-management' },
  { key: 'social', href: 'social-intelligence-analytics' },
  { key: 'wom', href: 'koc-seeding-word-of-mouth' },
  { key: 'crisis', href: 'crisis-management' },
] as const;

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section style={{ background: '#F7F4EF' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>
                {t('eyebrow')}
              </p>
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-[1.05]"
              style={{
                fontFamily: 'var(--font-dm-serif)',
                color: '#0F0F0F',
              }}
            >
              {t('headline')}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
              {t('subheadline')}
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, index) => (
            <Link
              key={service.key}
              href={`/${locale}/services/${service.href}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 transition-all duration-200"
              style={{
                borderTop: '1px solid rgba(15,15,15,0.1)',
                textDecoration: 'none',
              }}
            >
              {/* Left: number + title */}
              <div className="flex items-start gap-8">
                <span
                  className="text-xs font-medium tracking-widest pt-1 shrink-0"
                  style={{ color: '#A8842A', minWidth: '24px' }}
                >
                  0{index + 1}
                </span>
                <h3
                  className="text-2xl sm:text-3xl leading-tight transition-colors duration-200 group-hover:opacity-60"
                  style={{
                    fontFamily: 'var(--font-dm-serif)',
                    color: '#0F0F0F',
                  }}
                >
                  {t(`${service.key}.title`)}
                </h3>
              </div>

              {/* Right: description + arrow */}
              <div className="flex items-center justify-between gap-6 lg:pl-4">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#4A4540' }}
                >
                  {t(`${service.key}.description`)}
                </p>
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: '#A8842A' }}
                />
              </div>
            </Link>
          ))}
          <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
        </div>
      </div>
    </section>
  );
}
