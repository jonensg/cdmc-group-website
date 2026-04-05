import { useTranslations } from 'next-intl';

const stats = [
  { value: '18+', labelKey: 'years' },
  { value: '10,000+', labelKey: 'resources' },
  { value: '100+', labelKey: 'brands' },
  { value: '100M+', labelKey: 'exposure' },
] as const;

export default function TrustBar() {
  const t = useTranslations('trust');

  return (
    <section style={{ background: '#F7F4EF' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Gold rule + eyebrow */}
        <div className="flex items-center gap-5 mb-16">
          <div className="w-8 h-px" style={{ background: '#A8842A' }} />
          <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>
            {t('headline')}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.labelKey}
              className="py-8 pr-8"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(15,15,15,0.08)' : 'none',
                paddingLeft: i > 0 ? '2rem' : '0',
              }}
            >
              <div
                className="text-5xl sm:text-6xl mb-3"
                style={{
                  fontFamily: 'var(--font-dm-serif)',
                  color: '#0F0F0F',
                }}
              >
                {stat.value}
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#8A8078', maxWidth: '160px' }}
              >
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
