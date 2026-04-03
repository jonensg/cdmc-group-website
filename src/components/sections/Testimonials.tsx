import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "CDMC's social intelligence reports gave us a clear picture of our brand's perception across Greater China. Their ORM strategy recovered our reputation faster than we thought possible.",
    author: 'Chief Marketing Officer',
    company: 'Regional Financial Institution',
    industry: 'Finance & Insurance',
  },
  {
    id: 2,
    quote: "Their KOC seeding network is extraordinary. We saw authentic engagement that converted into real sales — not vanity metrics. CDMC understands the Asian consumer mindset deeply.",
    author: 'Head of E-commerce',
    company: 'Cross-border Retail Brand',
    industry: 'E-commerce',
  },
  {
    id: 3,
    quote: "When a crisis hit our clinic, CDMC responded within hours. The Comment Matrix strategy contained the damage before it spread. We have never felt more protected.",
    author: 'Founder & Medical Director',
    company: 'Premium Aesthetic Clinic',
    industry: 'Aesthetics & 醫美',
  },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');

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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              color: '#F5F5F5',
            }}
          >
            {t('headline')}
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl border-gold-glow"
              style={{ background: '#16161F' }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="mb-6 opacity-30"
                style={{ color: '#C9A84C' }}
              />

              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: '#9CA3AF' }}
              >
                "{item.quote}"
              </p>

              <div
                className="pt-5"
                style={{ borderTop: '1px solid rgba(201, 168, 76, 0.1)' }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    color: '#F5F5F5',
                  }}
                >
                  {item.author}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{item.company}</p>
                <div
                  className="inline-block mt-3 px-2.5 py-0.5 rounded-full text-xs"
                  style={{
                    background: 'rgba(201, 168, 76, 0.08)',
                    color: '#C9A84C',
                    border: '1px solid rgba(201, 168, 76, 0.2)',
                  }}
                >
                  {item.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
