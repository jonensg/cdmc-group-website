import { useTranslations } from 'next-intl';

const stats = [
  { value: '18', unit: '+', labelKey: 'years' },
  { value: '10,000', unit: '+', labelKey: 'resources' },
  { value: '100', unit: '+', labelKey: 'brands' },
  { value: '100M', unit: '+', labelKey: 'exposure' },
] as const;

export default function TrustBar() {
  const t = useTranslations('trust');

  return (
    <section style={{ background: '#111118', borderTop: '1px solid rgba(201, 168, 76, 0.15)', borderBottom: '1px solid rgba(201, 168, 76, 0.15)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p
          className="text-center text-xs font-medium tracking-widest uppercase mb-10"
          style={{ color: '#6B7280' }}
        >
          {t('headline')}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="text-center">
              <div
                className="text-4xl sm:text-5xl font-bold mb-2 blue-glow"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  color: '#2D6BE4',
                }}
              >
                {stat.value}
                <span style={{ color: '#C9A84C' }}>{stat.unit}</span>
              </div>
              <p className="text-sm font-medium" style={{ color: '#9CA3AF' }}>
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
