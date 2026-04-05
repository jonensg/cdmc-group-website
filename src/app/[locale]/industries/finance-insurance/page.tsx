import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const challenges = [
  {
    title: 'Regulatory Environment',
    description: 'Every consumer-facing claim is under regulatory scrutiny. A single misstep in content — even by a third-party KOC — can trigger compliance risk. We operate within SFC, HKMA, and IA guidelines by design.',
  },
  {
    title: 'Trust as a Purchase Driver',
    description: 'In Finance and Insurance, trust is not just a brand value — it is the purchase trigger. A client who cannot find reassuring peer voices about your firm online will choose a competitor who has them.',
  },
  {
    title: 'Mainland Chinese Clients',
    description: 'HK\'s fastest-growing wealth and insurance client segment arrives from mainland China. They research entirely on Xiaohongshu before walking into a branch or calling a broker. If you are not visible there, you do not exist.',
  },
  {
    title: 'Silent Reputation Erosion',
    description: 'Unlike a viral crisis, financial services reputation damage is usually quiet and slow. Negative forum threads, unanswered comparisons, and absent search results erode trust month by month — invisibly.',
  },
];

const approach = [
  {
    label: 'Find',
    title: 'Compliance-Safe Social Listening',
    points: [
      'Monitor brand mentions across XHS, forums, financial news, and social — with flagging for regulatory risk signals',
      'Track competitor SOV: which banks, brokers, and insurers are dominating the XHS discovery feed',
      'Map the specific financial questions new HK arrivals are searching — and which brands are answering them',
      'Monthly sentiment and Share of Voice report with executive-grade commentary',
    ],
  },
  {
    label: 'Fix',
    title: 'Authentic Peer-Voice Advocacy',
    points: [
      'KOC content that shares genuine product experience — not sales copy — within regulatory boundaries',
      'Xiaohongshu SEO seeding: place your brand at the top of high-intent search terms like "香港保險推薦", "新移民保險"',
      'Comment Matrix on competitor and category content — authentic community voices redirecting consideration',
      'Forum seeding on LIHKG, HKGolden, and Discuss.com.hk to reach the trust-seeking consumer at research stage',
    ],
  },
];

export default async function FinanceInsurancePage() {
  const locale = await getLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>01</span>
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>Industry</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Finance &amp;<br />Insurance
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              In financial services, your reputation is your licence to operate. We help banks, insurers, brokerages, and FinTech firms build verified consumer trust — particularly with Hong Kong&apos;s fast-growing mainland Chinese client base.
            </p>
          </div>
        </div>
      </section>

      {/* Stakes */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>The Stakes</p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-3xl sm:text-4xl leading-[1.2] mb-10"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                A wealth client who can&apos;t find peer-verified proof of your firm&apos;s quality will choose a competitor who has it.
              </p>
              <div className="flex flex-wrap gap-12 pt-8" style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}>
                {[
                  { value: '2M+', label: 'Mainland Chinese XHS users in HK' },
                  { value: '84K', label: 'Reads for OneDegree in 10 days' },
                  { value: '18+', label: 'Years serving Financial sector' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs max-w-[140px] leading-relaxed tracking-widest uppercase" style={{ color: '#8A8078' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry challenges */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Why Finance &amp; Insurance is Different
            </h2>
          </div>
          <div>
            {challenges.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <div className="lg:col-span-1">
                  <span className="text-xs font-medium tracking-widest" style={{ color: '#A8842A' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3
                    className="text-lg"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.description}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Find + Fix for Finance */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Our Approach for Financial Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {approach.map((block, i) => (
              <div
                key={i}
                className={`py-10 ${i === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
                style={i === 0 ? { borderRight: '1px solid rgba(15,15,15,0.1)' } : {}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1"
                    style={{ background: i === 0 ? '#080808' : '#A8842A', color: '#F7F4EF' }}
                  >
                    {block.label}
                  </span>
                </div>
                <h3
                  className="text-2xl mb-6"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                >
                  {block.title}
                </h3>
                <ul className="space-y-4">
                  {block.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#A8842A' }} />
                      <span className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study — OneDegree */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-8 h-px mb-8" style={{ background: '#A8842A' }} />
          <p className="text-xs tracking-widest uppercase mb-12" style={{ color: '#A8842A' }}>
            Case Study — Finance &amp; Insurance
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#4A4540' }}>
                InsurTech · Xiaohongshu · 10 days
              </p>
              <h2
                className="text-4xl sm:text-5xl mb-4"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                OneDegree
              </h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: '#7A7268' }}>
                Hong Kong&apos;s first fully digital insurer needed to build trust with mainland Chinese new arrivals — a demographic that researches insurance entirely through peer content on Xiaohongshu. Within 10 days of KOC deployment, the campaign generated 84,000 reads and 1,536 interactions.
              </p>
              <Link
                href={`/${locale}/case-studies/onedegree`}
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                style={{ color: '#A8842A' }}
              >
                Read Full Case Study <ArrowRight size={12} />
              </Link>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="space-y-8">
                {[
                  { value: '84K', label: 'Total reads in 10 days' },
                  { value: '1,536', label: 'Genuine consumer interactions' },
                  { value: '10 days', label: 'From brief to live results' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between py-6"
                    style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}
                  >
                    <span className="text-4xl" style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}>
                      {stat.value}
                    </span>
                    <span className="text-xs tracking-widest uppercase text-right max-w-[160px]" style={{ color: '#4A4540' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients served */}
      <section className="py-16" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs tracking-widest uppercase mr-4 shrink-0" style={{ color: '#4A4540' }}>
              Financial brands served
            </span>
            {['OneDegree', 'HKT', 'Wi-Fi.HK (OGCIO)'].map((name, i, arr) => (
              <span key={name} className="flex items-center gap-3">
                <span className="text-sm" style={{ color: '#7A7268' }}>{name}</span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(15,15,15,0.15)', fontSize: '10px' }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#EDEAE4', borderTop: '1px solid rgba(15,15,15,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2
                className="text-3xl sm:text-4xl mb-4"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Ready to be the financial brand new arrivals trust first?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#4A4540' }}>
                Book a free brand audit. We&apos;ll show you exactly where your firm appears — and doesn&apos;t appear — when mainland Chinese consumers search for financial services in Hong Kong.
              </p>
              <Link
                href={`/${locale}/qualify`}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{ background: '#080808', color: '#F7F4EF' }}
              >
                Apply for Free Audit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16" style={{ background: '#F7F4EF', borderTop: '1px solid rgba(15,15,15,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <Link
              href={`/${locale}/industries`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              <ArrowLeft size={12} /> All Industries
            </Link>
            <Link
              href={`/${locale}/industries/ecommerce`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              Next: E-Commerce &amp; Retail <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
