import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const plans = [
  {
    letter: 'A',
    name: 'Starter',
    price: 'HKD 9,800',
    period: '/ month',
    target: 'Local F&B, retail, salons and growing SMEs entering digital for the first time.',
    find: [
      'One-time AI brand health audit',
      'Competitor gap analysis (3 brands)',
      'Xiaohongshu keyword opportunity mapping',
      'Monthly sentiment snapshot report',
    ],
    fix: [
      '8 verified KOC posts (XHS + IG)',
      '200 Hashtag seedings on IG / Threads',
      'Comment matrix on key posts',
      'Monthly performance dashboard',
    ],
  },
  {
    letter: 'B',
    name: 'Growth',
    price: 'HKD 22,800',
    period: '/ month',
    target: 'Cross-border e-commerce brands, mid-size retailers and lifestyle brands scaling to mainland China.',
    find: [
      'Ongoing AI social listening (monthly)',
      'Share of Voice tracking vs 5 competitors',
      'Content gap analysis with priority topics',
      'Sentiment trend & anomaly alerts',
    ],
    fix: [
      '16 verified KOC posts (XHS + IG + Threads)',
      '500 Hashtag seedings across platforms',
      'Full comment matrix + forum seeding',
      'Bi-weekly strategy calls + detailed reporting',
    ],
  },
  {
    letter: 'C',
    name: 'Dominance',
    price: 'HKD 42,800',
    period: '/ month',
    target: 'Regional and enterprise brands — Finance, Healthcare, Aesthetics — where reputation is a commercial asset.',
    find: [
      'Real-time AI ORM monitoring dashboard',
      'Crisis early-warning alert system',
      'Multi-market competitor intelligence (APAC)',
      'Quarterly brand reputation audit & strategy',
    ],
    fix: [
      '24 verified KOC posts (XHS + IG + Threads)',
      '1,000 Hashtag seedings across all platforms',
      'Full matrix seeding + SERM management',
      'Dedicated account strategist + weekly reporting',
    ],
  },
];

const addOns = [
  { name: 'GEO — Generative Engine Optimisation', price: 'From HKD 30,000', note: 'One-time project' },
  { name: 'Instagram Official Account Management', price: 'HKD 12,000 – 25,000', note: '/ month' },
  { name: 'Enterprise Revenue Share (KOL Commerce)', price: '15 – 20% commission', note: 'Performance model' },
];

export default async function ORMPage() {
  const locale = await getLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <section
        className="pt-32 pb-24"
        style={{ background: '#080808' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>01</span>
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>Core Service</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Online Reputation<br />Management
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              We are the only agency in Hong Kong that can diagnose your brand&apos;s reputation problem with AI precision — and fix it with authentic community advocacy — in the same engagement.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>The Problem</p>
            </div>
            <div className="lg:col-span-7">
              <p
                className="text-3xl sm:text-4xl leading-[1.2] mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Your competitors are shaping what consumers find about your brand — and you don&apos;t know it yet.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                Most brands discover reputation damage only after a crisis. By then, negative content has been indexed, shared, and trusted. Most ORM agencies either monitor (but don&apos;t fix) or post content (but can&apos;t measure). Neither approach closes the loop.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                CDMC operates the complete cycle: AI-powered discovery → strategic positioning → authentic KOC execution → measurable outcome. One agency. Full accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find + Fix Framework */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Our Find + Fix Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Find */}
            <div className="py-12 pr-0 lg:pr-12" style={{ borderRight: '1px solid rgba(15,15,15,0.1)' }}>
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1"
                  style={{ background: '#080808', color: '#F7F4EF' }}
                >
                  Find
                </span>
                <span className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                  AI Social Intelligence
                </span>
              </div>
              <p
                className="text-2xl mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                We diagnose before we prescribe.
              </p>
              {[
                { label: 'Brand Audit', desc: 'Full scan of what your brand looks like on XHS, IG, Threads, forums and search — before we touch anything.' },
                { label: 'Gap Analysis', desc: 'AI maps the questions consumers ask that your competitors haven\'t answered. These are your opportunities.' },
                { label: 'Sentiment Mapping', desc: 'We classify every mention — positive, neutral, negative — and track how it shifts over time.' },
                { label: 'Competitor Intelligence', desc: 'Share of Voice, engagement quality, content velocity — we know their playbook before you brief us.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 py-5"
                  style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
                >
                  <span className="text-xs font-medium tracking-widest shrink-0 pt-0.5" style={{ color: '#A8842A' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#0F0F0F' }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
            </div>

            {/* Fix */}
            <div className="py-12 pl-0 lg:pl-12">
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1"
                  style={{ background: '#A8842A', color: '#F7F4EF' }}
                >
                  Fix
                </span>
                <span className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                  KOC Execution & ORM
                </span>
              </div>
              <p
                className="text-2xl mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                We execute with authentic voices at scale.
              </p>
              {[
                { label: 'KOC Matrix Seeding', desc: 'We deploy verified real consumers — not influencers — to create authentic content that ranks and converts.' },
                { label: 'Comment Matrix', desc: 'Strategic comment placement turns neutral content into social proof. We create the conversation your brand needs.' },
                { label: 'SERM & Platform ORM', desc: 'Search Engine Reputation Management: we push positive narratives to the top of XHS search, Google, and AI answer engines.' },
                { label: 'Crisis Containment', desc: 'When negative content surfaces, we activate rapid-response seeding to dilute and suppress — within hours.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 py-5"
                  style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
                >
                  <span className="text-xs font-medium tracking-widest shrink-0 pt-0.5" style={{ color: '#A8842A' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#0F0F0F' }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Investment</p>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="text-3xl sm:text-4xl mb-4"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Structured for Every Stage of Growth
              </h2>
              <p className="text-base" style={{ color: '#4A4540' }}>
                Every plan includes both Find and Fix. The scale of intelligence and execution increases with each tier.
              </p>
            </div>
          </div>

          {/* Plan rows */}
          <div>
            {plans.map((plan, i) => (
              <div
                key={plan.letter}
                className="py-10"
                style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Plan label */}
                  <div className="lg:col-span-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="text-4xl"
                        style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                      >
                        Plan {plan.letter}
                      </span>
                    </div>
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#8A8078' }}>{plan.name}</p>
                    <div>
                      <p className="text-2xl font-light mb-0.5" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                        {plan.price}
                      </p>
                      <p className="text-xs" style={{ color: '#8A8078' }}>{plan.period}</p>
                    </div>
                  </div>

                  {/* Target */}
                  <div className="lg:col-span-3 lg:pl-4">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#A8842A' }}>Best for</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{plan.target}</p>
                  </div>

                  {/* Find list */}
                  <div className="lg:col-span-3 lg:pl-4">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#8A8078' }}>Find — Intelligence</p>
                    <ul className="space-y-2">
                      {plan.find.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#A8842A' }} />
                          <span className="text-sm" style={{ color: '#4A4540' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fix list */}
                  <div className="lg:col-span-3 lg:pl-4">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#8A8078' }}>Fix — Execution</p>
                    <ul className="space-y-2">
                      {plan.fix.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#A8842A' }} />
                          <span className="text-sm" style={{ color: '#4A4540' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
          </div>

          {/* Add-ons */}
          <div className="mt-16">
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: '#A8842A' }}>Add-ons available across all plans</p>
            {addOns.map((addon, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <p className="text-sm" style={{ color: '#4A4540' }}>{addon.name}</p>
                <div className="flex items-baseline gap-2 shrink-0">
                  <span className="text-sm font-medium" style={{ color: '#0F0F0F' }}>{addon.price}</span>
                  <span className="text-xs" style={{ color: '#8A8078' }}>{addon.note}</span>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Results callout */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <h2
                className="text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                Results Our Clients Have Achieved
              </h2>
              <div className="flex flex-wrap gap-12 mb-8">
                {[
                  { value: '2.16M', label: 'Total reads for 香港鼓樂節 Xiaohongshu campaign' },
                  { value: '128K', label: 'Platform reach for HKT in 10 days' },
                  { value: '84K', label: 'Verified reach for OneDegree in 10 days' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs max-w-[150px] leading-relaxed" style={{ color: '#4A4540' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={`/${locale}/case-studies`}
                className="inline-flex items-center gap-3 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                style={{ color: '#A8842A' }}
              >
                View All Case Studies <ArrowRight size={12} />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="p-8" style={{ border: '1px solid rgba(247,244,239,0.08)' }}>
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#A8842A' }}>Get Started</p>
                <p
                  className="text-2xl mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
                >
                  Book a free ORM audit for your brand.
                </p>
                <p className="text-sm mb-8 leading-relaxed" style={{ color: '#7A7268' }}>
                  In 30 minutes, our strategists will show you exactly where your reputation stands — and where your competitors are winning without you knowing.
                </p>
                <Link
                  href={`/${locale}/qualify`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                  style={{ background: '#F7F4EF', color: '#080808' }}
                >
                  Apply for Free Audit <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other services */}
      <section className="py-16" style={{ background: '#F7F4EF', borderTop: '1px solid rgba(15,15,15,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              <ArrowLeft size={12} /> All Services
            </Link>
            <Link
              href={`/${locale}/services/social-intelligence-analytics`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              Next: Social Intelligence & Analytics <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
