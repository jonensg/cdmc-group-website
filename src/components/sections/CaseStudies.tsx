import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    industry: 'Finance & Insurance',
    client: 'Leading Regional Bank',
    result: '+312% positive sentiment',
    metric: '312%',
    period: '6 months',
    tag: 'ORM + Social Intelligence',
    color: '#2D6BE4',
  },
  {
    id: 2,
    industry: 'E-commerce',
    client: 'Cross-border DTC Brand',
    result: '5× KOC content reach',
    metric: '5×',
    period: '90 days',
    tag: 'KOC Seeding',
    color: '#C9A84C',
  },
  {
    id: 3,
    industry: 'Aesthetics & 醫美',
    client: 'Premium Aesthetic Clinic',
    result: 'Crisis resolved in 48hrs',
    metric: '48h',
    period: 'response time',
    tag: 'Crisis Management',
    color: '#A855F7',
  },
];

export default function CaseStudies() {
  const t = useTranslations('caseStudies');
  const locale = useLocale();

  return (
    <section className="py-24" style={{ background: '#111118' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              color: '#F5F5F5',
            }}
          >
            {t('headline')}
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#9CA3AF' }}>
            {t('subheadline')}
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative rounded-2xl border-gold-glow hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              style={{ background: '#16161F' }}
            >
              {/* Top color bar */}
              <div className="h-1 w-full" style={{ background: study.color }} />

              <div className="p-7">
                {/* Tag */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-5"
                  style={{
                    background: `${study.color}15`,
                    color: study.color,
                    border: `1px solid ${study.color}30`,
                  }}
                >
                  {study.tag}
                </div>

                {/* Industry & Client */}
                <p className="text-xs mb-1" style={{ color: '#6B7280' }}>{study.industry}</p>
                <h3
                  className="text-base font-semibold mb-5"
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    color: '#F5F5F5',
                  }}
                >
                  {study.client}
                </h3>

                {/* Key Metric */}
                <div
                  className="flex items-end gap-2 mb-2 pb-5"
                  style={{ borderBottom: '1px solid rgba(201, 168, 76, 0.1)' }}
                >
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      color: study.color,
                    }}
                  >
                    {study.metric}
                  </span>
                  <span className="text-sm mb-1" style={{ color: '#6B7280' }}>{study.period}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>"{study.result}"</p>
                  <TrendingUp size={14} style={{ color: '#C9A84C' }} />
                </div>
              </div>

              {/* Read more link */}
              <div className="px-7 pb-6">
                <Link
                  href={`/${locale}/case-studies/${study.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                  style={{ color: '#C9A84C' }}
                >
                  {t('readMore')}
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href={`/${locale}/case-studies`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              border: '1px solid rgba(201, 168, 76, 0.3)',
              color: '#C9A84C',
            }}
          >
            {t('viewAll')}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
