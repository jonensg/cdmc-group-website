import { useTranslations } from 'next-intl';

const usps = ['intelligence', 'advocacy', 'data'] as const;

export default function WhyCDMC() {
  const t = useTranslations('why');

  return (
    <section style={{ background: '#EDEAE4' }}>
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
            <p
              className="text-base leading-relaxed"
              style={{ color: '#4A4540' }}
            >
              {t('subheadline')}
            </p>
          </div>
        </div>

        {/* USP rows */}
        <div>
          {usps.map((key, index) => (
            <div
              key={key}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10"
              style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
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
                  className="text-2xl sm:text-3xl leading-tight"
                  style={{
                    fontFamily: 'var(--font-dm-serif)',
                    color: '#0F0F0F',
                  }}
                >
                  {t(`${key}.title`)}
                </h3>
              </div>

              {/* Right: description */}
              <div className="lg:pl-4">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#4A4540' }}
                >
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
        </div>
      </div>
    </section>
  );
}
