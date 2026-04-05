import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const industries = [
  {
    number: '01',
    title: 'Finance & Insurance',
    description: 'Banks, insurers, brokerages, and FinTech firms building trust with Hong Kong\'s mainland Chinese client base — where XHS reputation is the deciding factor before any first contact.',
    href: 'finance-insurance',
    clients: 'OneDegree · HKT · Wi-Fi.HK (OGCIO)',
    tag: 'Plan B / C recommended',
  },
  {
    number: '02',
    title: 'E-Commerce & Retail',
    description: 'Cross-border brands, TCM, natural beauty, fashion, and retail — owning the XHS discovery funnel from desire-seeding through to post-purchase advocacy.',
    href: 'ecommerce',
    clients: '御藥堂 · 草姬 · Esprit · New Town Plaza · Hollywood Plaza',
    tag: 'All plans available',
  },
  {
    number: '03',
    title: 'Aesthetics & Medical Beauty',
    description: 'Aesthetic clinics and medical beauty brands — compliance-safe KOC content, proactive negative review management, and high-value patient acquisition through authentic peer voice.',
    href: 'aesthetics-medical-beauty',
    clients: '香港中文大學醫院',
    tag: 'Plan B / C recommended',
  },
];

export default async function IndustriesPage() {
  const locale = await getLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Industries We Serve</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Industries
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              We specialise in three verticals where reputation is not a marketing consideration — it is a commercial prerequisite. Deep expertise, real results, and a track record that spans 18 years.
            </p>
          </div>
        </div>
      </section>

      {/* Industry list */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={`/${locale}/industries/${industry.href}`}
                className="group block py-12 transition-opacity duration-200 hover:opacity-70"
                style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1">
                    <span className="text-xs font-medium tracking-widest" style={{ color: '#A8842A' }}>
                      {industry.number}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h2
                      className="text-3xl sm:text-4xl leading-tight mb-3"
                      style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                    >
                      {industry.title}
                    </h2>
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ color: '#8A8078' }}
                    >
                      {industry.tag}
                    </span>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7">
                    <p className="text-base leading-relaxed mb-4" style={{ color: '#4A4540' }}>
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs" style={{ color: '#8A8078' }}>
                        {industry.clients}
                      </p>
                      <ArrowRight
                        size={18}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: '#A8842A' }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Cross-industry note */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Beyond These Three</p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-2xl sm:text-3xl leading-[1.3] mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Our methodology applies to any brand where reputation is a commercial asset.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                Over 18 years, we have delivered ORM and KOC campaigns for arts and culture institutions, government bodies, education providers, entertainment and theme parks, F&amp;B, and hospitality brands. If your brand&apos;s reputation matters — which is to say, if you have a brand — we can help.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Arts & Culture', 'Government', 'Education', 'F&B', 'Tourism',
                  'Entertainment', 'Hospitality', 'Telecommunications',
                ].map(tag => (
                  <span
                    key={tag}
                    className="text-xs tracking-widest px-3 py-1"
                    style={{ border: '1px solid rgba(15,15,15,0.15)', color: '#8A8078' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="w-8 h-px mb-8" style={{ background: '#A8842A' }} />
              <h2
                className="text-4xl sm:text-5xl mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                Which plan fits your industry and growth stage?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#7A7268' }}>
                Five questions. We&apos;ll send you a tailored recommendation within 24 hours — including a competitive analysis of how your brand currently appears on Xiaohongshu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/qualify`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                  style={{ background: '#F7F4EF', color: '#080808' }}
                >
                  Get My Recommendation <ArrowRight size={14} />
                </Link>
                <Link
                  href={`/${locale}/case-studies`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                  style={{ border: '1px solid rgba(247,244,239,0.15)', color: '#7A7268' }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
