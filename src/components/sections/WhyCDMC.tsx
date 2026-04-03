import { useTranslations } from 'next-intl';
import { Brain, Users, BarChart3 } from 'lucide-react';

const usps = [
  { key: 'intelligence', icon: Brain },
  { key: 'advocacy', icon: Users },
  { key: 'data', icon: BarChart3 },
] as const;

export default function WhyCDMC() {
  const t = useTranslations('why');

  return (
    <section className="py-24" style={{ background: '#0A0A0F' }}>
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              color: '#F5F5F5',
            }}
          >
            {t('headline')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>
            {t('subheadline')}
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {usps.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className="relative p-8 rounded-2xl border-gold-glow group hover:scale-[1.02] transition-all duration-300"
              style={{ background: '#16161F' }}
            >
              {/* Gold accent top border */}
              <div
                className="absolute top-0 left-8 right-8 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
              />

              {/* Number */}
              <div
                className="text-xs font-bold tracking-widest mb-6"
                style={{ color: 'rgba(201, 168, 76, 0.4)' }}
              >
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(45, 107, 228, 0.1)', border: '1px solid rgba(45, 107, 228, 0.2)' }}
              >
                <Icon size={22} style={{ color: '#2D6BE4' }} />
              </div>

              {/* Content */}
              <h3
                className="text-lg font-semibold mb-3"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  color: '#F5F5F5',
                }}
              >
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
