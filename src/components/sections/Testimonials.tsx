import { useTranslations } from 'next-intl';

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
    <section style={{ background: '#F7F4EF' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Section header */}
        <div className="flex items-center gap-5 mb-6">
          <div className="w-8 h-px" style={{ background: '#A8842A' }} />
          <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>
            {t('eyebrow')}
          </p>
        </div>
        <h2
          className="text-4xl sm:text-5xl leading-[1.05] mb-20"
          style={{
            fontFamily: 'var(--font-dm-serif)',
            color: '#0F0F0F',
          }}
        >
          {t('headline')}
        </h2>

        {/* Testimonials */}
        <div>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12"
              style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
            >
              {/* Left: gold rule */}
              <div className="hidden lg:flex lg:col-span-1 pt-1">
                <div className="w-px self-stretch" style={{ background: '#A8842A', opacity: 0.4 }} />
              </div>

              {/* Quote */}
              <div className="lg:col-span-7">
                <p
                  className="text-xl sm:text-2xl leading-relaxed mb-8"
                  style={{
                    fontFamily: 'var(--font-dm-serif)',
                    color: '#0F0F0F',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="lg:col-span-4 flex flex-col justify-center lg:pl-8">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: '#0F0F0F' }}
                >
                  {item.author}
                </p>
                <p className="text-xs mb-3" style={{ color: '#8A8078' }}>{item.company}</p>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: '#A8842A' }}
                >
                  {item.industry}
                </span>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
        </div>
      </div>
    </section>
  );
}
