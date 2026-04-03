import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Shield, Radar, MessageSquare, Zap } from 'lucide-react';

const services = [
  { key: 'orm', icon: Shield, href: 'online-reputation-management' },
  { key: 'social', icon: Radar, href: 'social-intelligence-analytics' },
  { key: 'wom', icon: MessageSquare, href: 'koc-seeding-word-of-mouth' },
  { key: 'crisis', icon: Zap, href: 'crisis-management' },
] as const;

export default function Services() {
  const t = useTranslations('services');
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
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

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ key, icon: Icon, href }) => (
            <Link
              key={key}
              href={`/${locale}/services/${href}`}
              className="group relative p-6 rounded-2xl border-gold-glow hover:scale-[1.02] transition-all duration-300"
              style={{ background: '#16161F' }}
            >
              {/* Top gold border on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.6), transparent)' }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(201, 168, 76, 0.08)', border: '1px solid rgba(201, 168, 76, 0.2)' }}
              >
                <Icon size={20} style={{ color: '#C9A84C' }} />
              </div>

              <h3
                className="text-base font-semibold mb-3"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  color: '#F5F5F5',
                }}
              >
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>
                {t(`${key}.description`)}
              </p>
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                style={{ color: '#C9A84C' }}
              >
                {t('learnMore')}
                <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
