'use client';

import { useTranslations } from 'next-intl';

const usps = [
  {
    key: 'intelligence' as const,
    accent: '#A8842A',
    gradientFrom: '#1A1612',
    gradientTo: '#0F0F0F',
    decorLine: 'M0,60 Q40,20 80,50 T160,40',
  },
  {
    key: 'advocacy' as const,
    accent: '#8B6914',
    gradientFrom: '#131318',
    gradientTo: '#0F0F0F',
    decorLine: 'M0,40 Q50,10 100,50 T160,30',
  },
  {
    key: 'data' as const,
    accent: '#A8842A',
    gradientFrom: '#121618',
    gradientTo: '#0F0F0F',
    decorLine: 'M0,50 Q60,15 120,45 T160,35',
  },
];

export default function WhyCDMC() {
  const t = useTranslations('why');

  return (
    <section style={{ background: '#EDEAE4' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>
                {t('eyebrow')}
              </p>
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-[1.05]"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usps.map(({ key, accent, gradientFrom, gradientTo, decorLine }, index) => (
            <div
              key={key}
              className="relative overflow-hidden flex flex-col"
              style={{
                background: `linear-gradient(160deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                minHeight: '380px',
              }}
            >
              {/* Top gold border */}
              <div style={{ height: '3px', background: accent }} />

              {/* Decorative SVG wave */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                  <path d={decorLine} fill="none" stroke={accent} strokeWidth="2"/>
                </svg>
              </div>

              {/* Card content */}
              <div className="relative flex flex-col flex-1 p-8 pt-10">
                {/* Number */}
                <div
                  className="text-7xl font-light mb-auto leading-none select-none"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: accent, opacity: 0.25 }}
                >
                  0{index + 1}
                </div>

                {/* Bottom text */}
                <div className="mt-12">
                  <h3
                    className="text-2xl sm:text-3xl leading-tight mb-4"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
                  >
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(247,244,239,0.6)' }}>
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
