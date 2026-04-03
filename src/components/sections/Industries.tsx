import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, TrendingUp, ShoppingCart, Sparkles } from 'lucide-react';

const industries = [
  { key: 'finance', icon: TrendingUp, href: 'finance-insurance', color: '#2D6BE4' },
  { key: 'ecommerce', icon: ShoppingCart, href: 'ecommerce', color: '#C9A84C' },
  { key: 'aesthetics', icon: Sparkles, href: 'aesthetics-medical-beauty', color: '#A855F7' },
] as const;

export default function Industries() {
  const t = useTranslations('industries');
  const locale = useLocale();

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
          <p className="text-base sm:text-lg" style={{ color: '#9CA3AF' }}>
            {t('subheadline')}
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map(({ key, icon: Icon, href, color }) => (
            <Link
              key={key}
              href={`/${locale}/industries/${href}`}
              className="group relative p-8 rounded-2xl border-gold-glow hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              style={{ background: '#16161F' }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-2xl pointer-events-none"
                style={{ background: color }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon size={26} style={{ color }} />
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  color: '#F5F5F5',
                }}
              >
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                {t(`${key}.description`)}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
                style={{ color }}
              >
                {t('learnMore')}
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
