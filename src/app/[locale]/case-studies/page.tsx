import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { caseStudies } from '@/lib/caseStudies';

export default function CaseStudiesPage() {
  const locale = useLocale();

  const byService = caseStudies.reduce<Record<string, typeof caseStudies>>((acc, c) => {
    if (!acc[c.service]) acc[c.service] = [];
    acc[c.service].push(c);
    return acc;
  }, {});

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Page hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-8 h-px" style={{ background: '#A8842A' }} />
          <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>
            Case Studies
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <h1
            className="text-5xl sm:text-6xl leading-[1.0]"
            style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
          >
            Real Results for Real Brands
          </h1>
          <div className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
              Measured outcomes across KOC seeding, video production, and social media management — for brands ranging from government bodies to international enterprises.
            </p>
          </div>
        </div>
      </div>

      {/* Cases grouped by service */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {Object.entries(byService).map(([service, cases]) => (
          <div key={service} className="mb-16">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-2"
              style={{ color: '#A8842A' }}
            >
              {service}
            </p>
            <div style={{ borderTop: '2px solid rgba(15,15,15,0.15)' }}>
              {cases.map((study) => (
                <Link
                  key={study.slug}
                  href={`/${locale}/case-studies/${study.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 items-center transition-opacity duration-200 hover:opacity-70"
                  style={{ borderBottom: '1px solid rgba(15,15,15,0.08)', textDecoration: 'none' }}
                >
                  {/* Client */}
                  <div className="lg:col-span-3">
                    <p
                      className="text-xl"
                      style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                    >
                      {study.client}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#8A8078' }}>{study.industry}</p>
                  </div>

                  {/* Platform */}
                  <div className="lg:col-span-3">
                    <p className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                      {study.platform}
                    </p>
                    {study.duration && (
                      <p className="text-xs mt-1" style={{ color: '#8A8078' }}>{study.duration}</p>
                    )}
                  </div>

                  {/* Primary metric */}
                  <div className="lg:col-span-4">
                    <span
                      className="text-3xl"
                      style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                    >
                      {study.metrics.primary.value}
                    </span>
                    <span className="text-xs tracking-widest uppercase ml-3" style={{ color: '#8A8078' }}>
                      {study.metrics.primary.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 flex justify-end">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: '#A8842A' }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
