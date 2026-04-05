import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const phases = [
  {
    phase: '0–2 Hours',
    title: 'Rapid Assessment',
    description: 'Crisis alert triggers immediate escalation. Our team assesses scope, source, and velocity of negative content. You receive a situation brief within 2 hours of first alert.',
    actions: ['Source identification', 'Severity classification (1–5)', 'Immediate containment options briefed'],
  },
  {
    phase: '2–24 Hours',
    title: 'Containment',
    description: 'Rapid KOC counter-narrative deployment. Authentic voices are mobilised to dilute negative content with genuine positive context — not fake reviews or denial.',
    actions: ['Emergency KOC activation', 'Comment matrix suppression', 'Platform-level escalation where applicable'],
  },
  {
    phase: '24–72 Hours',
    title: 'Narrative Stabilisation',
    description: 'We monitor sentiment recovery in real time. As the crisis subsides, we shift from suppression to brand rehabilitation — rebuilding the positive narrative through sustained KOC seeding.',
    actions: ['Share of Voice recovery tracking', 'Sentiment trend monitoring', 'Media monitoring for pickup escalation'],
  },
  {
    phase: 'Week 2+',
    title: 'Brand Restoration',
    description: 'Long-term reputation restoration through a structured seeding campaign that pushes positive content to the top of XHS search, Google, and AI answer engines. Crisis becomes a managed chapter, not a permanent scar.',
    actions: ['SERM — search result rehabilitation', 'XHS keyword recapture', 'GEO content optimisation for AI engines'],
  },
];

const included = [
  { title: '24/7 Crisis Monitoring', desc: 'Real-time alerts the moment negative content spikes beyond normal baseline — day, night, or weekend.' },
  { title: 'Dedicated Crisis Hotline', desc: 'Direct access to a senior CDMC strategist, not a junior account manager, when you need it most.' },
  { title: 'Emergency KOC Activation', desc: 'Pre-briefed KOCs ready to deploy within 4 hours of crisis classification — no cold outreach delays.' },
  { title: 'Platform Escalation Support', desc: 'We have direct relationships with major platforms. For severe cases, we can escalate content removal requests.' },
  { title: 'Board-Ready Reporting', desc: 'Clear, jargon-free crisis reports designed for executive stakeholders, board presentations, and regulatory disclosures.' },
  { title: 'Post-Crisis Brand Audit', desc: 'A full brand health assessment 30 days after resolution — measuring what recovered, what still needs attention.' },
];

export default async function CrisisManagementPage() {
  const locale = await getLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>04</span>
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>Rapid Response</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Crisis<br />Management
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              When your reputation is under attack, speed and authenticity are everything. We act within hours — not days — combining AI-powered monitoring with a pre-positioned KOC network ready to deploy on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* The reality */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Why This Matters</p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-3xl sm:text-4xl leading-[1.2] mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                A crisis that isn&apos;t contained in the first 24 hours can take 6 months to repair.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                On Xiaohongshu and Threads, negative content spreads through algorithm amplification — not just organic sharing. A single viral complaint can achieve 100,000+ views before your communications team sees it. By the time a traditional PR agency is briefed and a statement drafted, the narrative has set.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                Our approach is different: because we run continuous monitoring and maintain a live KOC network, we can move from alert to counter-narrative deployment within hours — not days.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8" style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}>
                {[
                  { value: '2hrs', label: 'Time to first situation brief' },
                  { value: '4hrs', label: 'Emergency KOC activation' },
                  { value: '72hrs', label: 'Sentiment stabilisation target' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response phases */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Our Crisis Response Protocol
            </h2>
          </div>

          <div>
            {phases.map((phase, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <div className="lg:col-span-2">
                  <span
                    className="text-xs tracking-widest uppercase px-2 py-1 inline-block mb-3"
                    style={{ background: '#080808', color: '#A8842A' }}
                  >
                    {phase.phase}
                  </span>
                  <h3
                    className="text-xl"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {phase.title}
                  </h3>
                </div>
                <div className="lg:col-span-5 lg:col-start-4">
                  <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                    {phase.description}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:col-start-9">
                  <ul className="space-y-2">
                    {phase.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#A8842A' }} />
                        <span className="text-sm" style={{ color: '#4A4540' }}>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Crisis Management Capabilities
            </h2>
          </div>

          <div>
            {included.map((item, i) => (
              <div
                key={i}
                className="flex gap-8 py-6"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <span className="text-xs font-medium tracking-widest shrink-0 pt-0.5" style={{ color: '#A8842A', minWidth: '28px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-base font-medium mb-1" style={{ color: '#0F0F0F' }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Retainer note */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <h2
                className="text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                Crisis Management is a retainer, not a fire engine.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#7A7268' }}>
                The brands that recover fastest from a crisis are the ones that were already on retainer before it hit. Our ORM clients on Plan B and Plan C have crisis response built into their monthly engagement — 24/7 monitoring, pre-positioned KOC network, and a designated strategist who already knows their brand.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#7A7268' }}>
                For brands not yet on retainer, we offer standalone crisis management engagements. Pricing is dependent on severity, scope, and platform. Contact us for a confidential briefing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/qualify`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                  style={{ background: '#F7F4EF', color: '#080808' }}
                >
                  Start ORM Retainer <ArrowRight size={14} />
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                  style={{ border: '1px solid rgba(247,244,239,0.15)', color: '#7A7268' }}
                >
                  Confidential Crisis Enquiry
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="p-6" style={{ border: '1px solid rgba(247,244,239,0.08)' }}>
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#A8842A' }}>Included in</p>
                {[
                  { plan: 'Plan B Growth — HKD 22,800/mo', detail: 'Monitoring + emergency activation' },
                  { plan: 'Plan C Dominance — HKD 42,800/mo', detail: 'Full crisis suite + dedicated strategist' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="py-4"
                    style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}
                  >
                    <p className="text-sm mb-1" style={{ color: '#F7F4EF' }}>{item.plan}</p>
                    <p className="text-xs" style={{ color: '#4A4540' }}>{item.detail}</p>
                  </div>
                ))}
                <div className="pt-4" style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}>
                  <p className="text-xs" style={{ color: '#4A4540' }}>
                    Plan A clients can add crisis monitoring as an add-on. Ask your strategist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16" style={{ background: '#F7F4EF', borderTop: '1px solid rgba(15,15,15,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <Link
              href={`/${locale}/services/koc-seeding-word-of-mouth`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              <ArrowLeft size={12} /> KOC Seeding &amp; Word-of-Mouth
            </Link>
            <Link
              href={`/${locale}/services/online-reputation-management`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              ORM Plans &amp; Pricing <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
