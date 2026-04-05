import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCaseStudies } from '@/lib/caseStudies';

export default function CaseStudies() {
  const t = useTranslations('caseStudies');
  const locale = useLocale();
  const caseStudies = getFeaturedCaseStudies();

  return (
    <section style={{ background: '#080808' }}>
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
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              {t('headline')}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: '#7A7268' }}>
              {t('subheadline')}
            </p>
          </div>
        </div>

        {/* Case study rows */}
        <div className="mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 items-center"
              style={{ borderTop: '1px solid rgba(247,244,239,0.07)' }}
            >
              {/* Client info */}
              <div className="lg:col-span-3">
                <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#A8842A' }}>
                  {study.service} · {study.platform}
                </p>
                <p className="text-xs mb-1" style={{ color: '#7A7268' }}>{study.industry}</p>
                <p className="text-lg" style={{ color: '#F7F4EF', fontFamily: 'var(--font-dm-serif)' }}>
                  {study.client}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#4A4540' }}>{study.clientEn}</p>
              </div>

              {/* Primary metric */}
              <div className="lg:col-span-4">
                <div className="text-5xl sm:text-6xl mb-1" style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}>
                  {study.metrics.primary.value}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#7A7268' }}>
                  {study.metrics.primary.label}
                </div>
              </div>

              {/* Secondary metric */}
              <div className="lg:col-span-3">
                {study.metrics.secondary && (
                  <>
                    <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-dm-serif)', color: 'rgba(247,244,239,0.4)' }}>
                      {study.metrics.secondary.value}
                    </div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: '#7A7268' }}>
                      {study.metrics.secondary.label}
                    </div>
                  </>
                )}
              </div>

              {/* Link */}
              <div className="lg:col-span-2 flex justify-end">
                <Link
                  href={`/${locale}/case-studies/${study.slug}`}
                  className="group inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-opacity duration-200 hover:opacity-60"
                  style={{ color: '#F7F4EF' }}
                >
                  {t('readMore')}
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(247,244,239,0.07)' }} />
        </div>

        {/* Client name strip */}
        <div className="pt-4">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#4A4540' }}>
            Also trusted by
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              'Disney', 'New Town Plaza', 'CUHK Hospital', 'Wi-Fi.HK',
              'HKU SPACE', 'CityU', 'Esprit', 'ABC Pathways School',
              'Hollywood Plaza', 'MAGART', 'H Coffee', '山友同行',
            ].map(name => (
              <span key={name} className="text-sm" style={{ color: '#4A4540' }}>
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* View all */}
        <div className="mt-16">
          <Link
            href={`/${locale}/case-studies`}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:opacity-80"
            style={{ border: '1px solid rgba(247,244,239,0.2)', color: '#F7F4EF' }}
          >
            {t('viewAll')}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
