import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const milestones = [
  { year: '2008', text: 'Founded in Hong Kong as a China-focused digital media and marketing consultancy.' },
  { year: '2012', text: 'Expanded into social media marketing as platforms like Weibo reshaped how brands communicate in Greater China.' },
  { year: '2016', text: 'Built one of Hong Kong\'s first dedicated KOC networks, pioneering authentic word-of-mouth marketing on emerging platforms.' },
  { year: '2019', text: 'Launched AI-driven social intelligence capabilities, integrating data diagnostics with campaign execution.' },
  { year: '2022', text: 'Jones Ng recognised by Hong Kong media as 小紅書第一人 — the city\'s foremost Xiaohongshu authority.' },
  { year: '2025', text: 'Operating across Hong Kong, Malaysia, Singapore, Taiwan and Toronto with 10,000+ verified KOC network and 100+ enterprise brands served.' },
];

const departments = [
  {
    id: '01',
    name: "Founder's Office",
    members: ['Jones Ng'],
    description: 'Vision, strategy and key client relationships led directly by the founder.',
    isFounder: true,
  },
  {
    id: '02',
    name: 'Finance & Operations',
    members: [],
    description: 'Financial governance, vendor management and operational infrastructure.',
    isFounder: false,
  },
  {
    id: '03',
    name: 'PR & Communications',
    members: [],
    description: 'Media relations, crisis communications and brand narrative management.',
    isFounder: false,
  },
  {
    id: '04',
    name: 'Technology & AI',
    members: ['Ricky', 'Ryan'],
    description: 'AI social intelligence systems, data pipelines and platform integrations.',
    isFounder: false,
  },
  {
    id: '05',
    name: 'Content & Creative',
    members: ['Ada', 'Tina'],
    description: 'Content strategy, KOC creative direction and cross-platform storytelling.',
    isFounder: false,
  },
  {
    id: '06',
    name: 'Intelligence & Insights',
    members: [],
    description: 'Social listening analysis, competitive benchmarking and client reporting.',
    isFounder: false,
  },
  {
    id: '07',
    name: 'Sales & Business Development',
    members: [],
    description: 'New client acquisition, market expansion and strategic partnerships.',
    isFounder: false,
  },
  {
    id: '08',
    name: 'E-Commerce Growth',
    members: [],
    description: 'Cross-border e-commerce strategy, KOC seeding and conversion optimisation.',
    isFounder: false,
  },
  {
    id: '09',
    name: 'Client Success',
    members: [],
    description: 'Onboarding, retention and ongoing account management for all clients.',
    isFounder: false,
  },
];

const trainingClients = ['Hong Kong TDC', 'HSBC', '香港廠商會', 'HKGCC', 'HKMA'];

export default function AboutPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <div
        className="pt-16"
        style={{ background: '#080808', minHeight: '50vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="w-8 h-px mb-12" style={{ background: '#A8842A' }} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8842A' }}>
                Est. 2008 · Hong Kong
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95]"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                Asia's ORM & Social Intelligence Authority
              </h1>
            </div>
            <div className="flex items-end">
              <p className="text-base leading-relaxed" style={{ color: '#7A7268' }}>
                We are one of the very few companies in Asia that does both — in a single integrated loop. AI-powered diagnosis. 10,000+ KOC execution. In the same retainer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founding story */}
      <div style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-8 h-px" style={{ background: '#A8842A' }} />
                <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>
                  Our Story
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              {/* Draft placeholder — replace with real copy from Jones */}
              <p
                className="text-2xl sm:text-3xl leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Most agencies report on impressions. We built CDMC to report on something that actually matters — trust.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                Founded in Hong Kong in 2008, CDMC Group began as a China-focused digital media consultancy. Over 18 years, we watched the market evolve — from traditional media buying to social platforms, from broadcast advertising to authentic community advocacy.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                What we noticed was a persistent gap. Brands could monitor their reputation, or they could try to fix it — but rarely both, and never in the same breath. SaaS platforms gave them dashboards. Agencies gave them posts. Nobody closed the loop.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                That is what CDMC was built to do. Today we combine an AI social intelligence engine with a 10,000+ verified KOC network — diagnosing brand reputation challenges and executing the fix simultaneously, across Xiaohongshu, Instagram, Threads and beyond.
              </p>
              <p className="text-xs mt-4 italic" style={{ color: '#8A8078' }}>
                * Founding story draft — please update with your own words.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-5 mb-16">
            <div className="w-8 h-px" style={{ background: '#A8842A' }} />
            <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>
              Since 2008
            </p>
          </div>
          <div>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="grid grid-cols-12 gap-8 py-8"
                style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
              >
                <div className="col-span-2 sm:col-span-1">
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#A8842A' }}
                  >
                    {m.year}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-11">
                  <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
          </div>
        </div>
      </div>

      {/* The Sweet Spot */}
      <div style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-5 mb-16">
            <div className="w-8 h-px" style={{ background: '#A8842A' }} />
            <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>
              Why CDMC
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <h2
              className="text-4xl sm:text-5xl leading-[1.05]"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              We are the only company that can find your brand's problem and fix it in the same breath.
            </h2>
            <div className="flex items-center">
              <p className="text-base leading-relaxed" style={{ color: '#7A7268' }}>
                The Hong Kong market has two types of players. SaaS platforms that give you dashboards and stop there. Execution agencies that post content without knowing where or why. CDMC sits in the gap — combining AI intelligence with real execution, in one retainer.
              </p>
            </div>
          </div>

          {/* 3-layer stack */}
          <div>
            {[
              { layer: '01', title: 'AI Social Intelligence', desc: 'We listen before we act. Our AI engine scans your brand, your competitors and your category across every relevant platform — identifying threats, content gaps and opportunities before they become problems.' },
              { layer: '02', title: 'KOC Matrix Seeding', desc: '10,000+ verified KOCs deployed with precision. Every post answers a question real consumers are already asking. No vanity metrics. No blind posting. Authentic advocacy at scale.' },
              { layer: '03', title: 'Online Reputation Management', desc: 'The outcome: a brand reputation that compounds. Share of Voice grows. Negative narratives are countered. Trust is built — measurably — across Xiaohongshu, Instagram and Threads.' },
            ].map((item, i) => (
              <div
                key={item.layer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10"
                style={{ borderTop: '1px solid rgba(247,244,239,0.07)' }}
              >
                <div className="lg:col-span-1">
                  <span className="text-xs tracking-widest" style={{ color: '#A8842A' }}>{item.layer}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed" style={{ color: '#7A7268' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(247,244,239,0.07)' }} />
          </div>
        </div>
      </div>

      {/* Event photos — placeholder strip */}
      <div style={{ background: '#0F0F0F' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'CDMC Group · Exhibition Plus', file: 'jones-speaker.jpg' },
              { label: 'TDC · 香港好物節', file: 'jones-tdc.jpg' },
              { label: 'HKTDC · Marketing Pulse', file: 'jones-hktdc.jpg' },
            ].map(photo => (
              <div
                key={photo.file}
                className="flex items-center justify-center"
                style={{ height: '220px', background: '#1A1A1A', border: '1px dashed rgba(247,244,239,0.08)' }}
              >
                <div className="text-center">
                  <p className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>
                    {photo.label}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#2A2A2A' }}>
                    /public/{photo.file}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training & recognition */}
      <div style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-5 mb-12">
            <div className="w-8 h-px" style={{ background: '#A8842A' }} />
            <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>
              Training & Speaking
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p
                className="text-2xl sm:text-3xl leading-tight mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Trusted by institutions that shape Hong Kong's business community.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                Jones Ng has trained and spoken at some of Hong Kong's most respected organisations — bringing practical, platform-native expertise to executives, entrepreneurs and marketing professionals across the region.
              </p>
            </div>
            <div>
              {trainingClients.map((name, i) => (
                <div
                  key={name}
                  className="flex items-center justify-between py-5"
                  style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
                >
                  <span
                    className="text-xl"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {name}
                  </span>
                  <span className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                    Workshop · Training
                  </span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Team org chart */}
      <div style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-5 mb-16">
            <div className="w-8 h-px" style={{ background: '#A8842A' }} />
            <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>
              Our Team
            </p>
          </div>

          {/* Founder — full width */}
          <div
            className="mb-4 p-10"
            style={{
              background: '#080808',
              border: '1px solid rgba(247,244,239,0.06)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#A8842A' }}>
                  01 · Founder's Office
                </p>
                <p
                  className="text-3xl"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
                >
                  Jones Ng
                </p>
                <p className="text-sm mt-1" style={{ color: '#7A7268' }}>
                  Founder & Director
                </p>
              </div>
              <div className="lg:col-span-2 flex items-center">
                <p className="text-sm leading-relaxed" style={{ color: '#7A7268' }}>
                  18 years of China digital marketing expertise. Recognised by Hong Kong media as 小紅書第一人. Leads strategy, key client relationships and the overall direction of CDMC Group.
                </p>
              </div>
            </div>
          </div>

          {/* Departments grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {departments.filter(d => !d.isFounder).map((dept) => (
              <div
                key={dept.id}
                className="p-7"
                style={{
                  background: '#F7F4EF',
                  border: '1px solid rgba(15,15,15,0.08)',
                }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: '#A8842A' }}
                >
                  {dept.id}
                </p>
                <h3
                  className="text-lg leading-tight mb-3"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                >
                  {dept.name}
                </h3>
                {dept.members.length > 0 && (
                  <div className="mb-3">
                    {dept.members.map(m => (
                      <span
                        key={m}
                        className="inline-block text-xs font-medium mr-2 mb-1 px-2 py-0.5"
                        style={{
                          background: 'rgba(168,132,42,0.08)',
                          color: '#A8842A',
                          border: '1px solid rgba(168,132,42,0.2)',
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-xs leading-relaxed" style={{ color: '#8A8078' }}>
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="w-8 h-px mb-12" style={{ background: '#A8842A' }} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2
              className="text-4xl sm:text-5xl leading-[1.05]"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Ready to find and fix your brand's reputation — simultaneously?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/qualify`}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{ background: '#F7F4EF', color: '#080808' }}
              >
                Start the conversation <ArrowRight size={14} />
              </Link>
              <Link
                href={`/${locale}/case-studies`}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{ border: '1px solid rgba(247,244,239,0.15)', color: '#7A7268' }}
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
