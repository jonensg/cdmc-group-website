import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';

export function generateStaticParams() {
  return caseStudies.map(c => ({ slug: c.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const locale = useLocale();

  const currentIndex = caseStudies.findIndex(c => c.slug === study.slug);
  const prev = caseStudies[currentIndex - 1];
  const next = caseStudies[currentIndex + 1];

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero image placeholder */}
      <div
        className="w-full flex items-center justify-center pt-16"
        style={{ background: '#0F0F0F', height: '55vh', minHeight: '360px' }}
      >
        <div className="text-center">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8842A' }}>
            {study.service} · {study.platform}
          </p>
          <p
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-dm-serif)', color: 'rgba(247,244,239,0.15)' }}
          >
            {study.client}
          </p>
          <p className="text-xs mt-6 tracking-widest uppercase" style={{ color: '#4A4540' }}>
            Photo coming soon
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Back link */}
        <Link
          href={`/${locale}/case-studies`}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-16 transition-opacity hover:opacity-60"
          style={{ color: '#8A8078' }}
        >
          <ArrowLeft size={12} /> All Case Studies
        </Link>

        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 pb-20" style={{ borderBottom: '1px solid rgba(15,15,15,0.1)' }}>

          {/* Left: client info */}
          <div className="lg:col-span-7">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#8A8078' }}>
              {study.industry}
            </p>
            <h1
              className="text-5xl sm:text-6xl leading-[1.0] mb-6"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              {study.client}
            </h1>
            <p className="text-base" style={{ color: '#4A4540' }}>{study.clientEn}</p>

            {/* Intro */}
            <div className="mt-10">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-lg leading-relaxed" style={{ color: '#4A4540', fontStyle: 'italic' }}>
                {study.intro}
              </p>
            </div>
          </div>

          {/* Right: metrics */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="space-y-10">

              {/* Primary metric */}
              <div>
                <div
                  className="text-6xl sm:text-7xl mb-2"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                >
                  {study.metrics.primary.value}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                  {study.metrics.primary.label}
                </div>
              </div>

              {/* Secondary metric */}
              {study.metrics.secondary && (
                <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)', paddingTop: '2.5rem' }}>
                  <div
                    className="text-4xl mb-2"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {study.metrics.secondary.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                    {study.metrics.secondary.label}
                  </div>
                </div>
              )}

              {/* Meta */}
              <div className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}>
                {[
                  { label: 'Service', value: study.service },
                  { label: 'Platform', value: study.platform },
                  ...(study.duration ? [{ label: 'Duration', value: study.duration }] : []),
                ].map(item => (
                  <div key={item.label} className="flex gap-6">
                    <span className="text-xs tracking-widest uppercase w-20 shrink-0" style={{ color: '#8A8078' }}>
                      {item.label}
                    </span>
                    <span className="text-sm" style={{ color: '#4A4540' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>
              Our Approach
            </p>
          </div>
          <div className="lg:col-span-7">
            <div>
              {study.approach.map((point, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-5"
                  style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
                >
                  <span
                    className="text-xs font-medium tracking-widest shrink-0 pt-0.5"
                    style={{ color: '#A8842A' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                    {point}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-0 pt-16"
          style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
        >
          {prev ? (
            <Link
              href={`/${locale}/case-studies/${prev.slug}`}
              className="group flex flex-col gap-2 py-8 pr-8 transition-opacity hover:opacity-60"
              style={{ borderRight: '1px solid rgba(15,15,15,0.08)' }}
            >
              <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                <ArrowLeft size={12} /> Previous
              </span>
              <span className="text-xl" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                {prev.client}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/${locale}/case-studies/${next.slug}`}
              className="group flex flex-col gap-2 py-8 pl-8 text-right transition-opacity hover:opacity-60"
            >
              <span className="inline-flex items-center justify-end gap-2 text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                Next <ArrowRight size={12} />
              </span>
              <span className="text-xl" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                {next.client}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>

      <Footer />
    </main>
  );
}
