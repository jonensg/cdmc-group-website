import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const capabilities = [
  {
    title: 'Multi-Platform Monitoring',
    description: 'Real-time listening across Xiaohongshu, Instagram, Threads, Facebook, major HK forums (LIHKG, HKGolden), Weibo, WeChat public accounts, and online news.',
    metric: '15+ channels',
  },
  {
    title: 'AI Sentiment Analysis',
    description: 'NLP-powered classification of every brand mention into positive, neutral, and negative with contextual nuance — not just keyword matching.',
    metric: '中英文 bilingual',
  },
  {
    title: 'Share of Voice Tracking',
    description: 'We benchmark your brand\'s share of conversation against up to 5 named competitors — updated weekly. You see exactly how much of the conversation you own.',
    metric: 'vs 5 competitors',
  },
  {
    title: 'Content Gap Intelligence',
    description: 'Our AI identifies the questions consumers are actively asking that neither you nor your competitors have answered. These are your fastest growth opportunities.',
    metric: 'Weekly briefs',
  },
  {
    title: 'Crisis Early Warning',
    description: 'Anomaly detection flags unusual spikes in negative sentiment before a story gains traction — giving you hours of lead time to respond.',
    metric: 'Real-time alerts',
  },
  {
    title: 'Hashtag & Keyword Landscape',
    description: 'Comprehensive mapping of which hashtags and keywords are driving discovery in your category on XHS, IG, and Threads — updated monthly.',
    metric: 'Discovery-ready',
  },
];

const deliverables = [
  { name: 'Monthly Intelligence Report', desc: 'Executive-ready PDF with brand health score, sentiment trends, Share of Voice, top mentions, and strategic recommendations.' },
  { name: 'Competitor Playbook', desc: 'A running analysis of what your closest competitors are posting, seeding, and saying — and what\'s working for them.' },
  { name: 'Content Opportunity Brief', desc: 'Top 5 content topics your brand should own, based on live search and engagement data. Ready for your creative team.' },
  { name: 'Crisis Alert Dashboard', desc: 'A live monitoring feed you can access anytime, with automated WhatsApp/email alerts when unusual activity is detected.' },
];

export default async function SocialIntelligencePage() {
  const locale = await getLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>02</span>
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>The Find Module</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Social Intelligence<br />&amp; Analytics
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              Most brands are flying blind. Our AI monitors what your consumers, your critics, and your competitors are saying — across every platform that matters in Asia — and translates it into decisions.
            </p>
          </div>
        </div>
      </section>

      {/* What this is */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>What It Is</p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-3xl sm:text-4xl leading-[1.2] mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                AI-powered intelligence that tells you what to do — not just what happened.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 pt-8" style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}>
                {[
                  { value: '15+', label: 'Platforms monitored' },
                  { value: '24/7', label: 'Real-time tracking' },
                  { value: '中英', label: 'Bilingual NLP analysis' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                Social Intelligence is the &ldquo;Find&rdquo; half of our core framework. It runs continuously, surfacing threats before they become crises and opportunities before your competitors can capitalise on them. Standalone for enterprises that already have execution teams, or bundled into every ORM retainer plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Intelligence Capabilities
            </h2>
          </div>

          <div>
            {capabilities.map((cap, i) => (
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
                <div className="lg:col-span-5">
                  <h3 className="text-lg font-medium mb-2" style={{ color: '#0F0F0F', fontFamily: 'var(--font-dm-serif)' }}>
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{cap.description}</p>
                </div>
                <div className="lg:col-span-3 lg:col-start-10 flex items-start justify-end">
                  <span
                    className="text-xs tracking-widest uppercase px-3 py-1"
                    style={{ background: 'rgba(168,132,42,0.1)', color: '#A8842A' }}
                  >
                    {cap.metric}
                  </span>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>What You Receive</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="text-3xl sm:text-4xl mb-12"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Monthly Deliverables
              </h2>
              <div>
                {deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 py-6"
                    style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
                  >
                    <span className="text-xs font-medium tracking-widest shrink-0 pt-0.5" style={{ color: '#A8842A' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-base font-medium mb-2" style={{ color: '#0F0F0F' }}>{item.name}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms section */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Platforms We Monitor
            </h2>
            <p className="text-sm" style={{ color: '#7A7268' }}>
              Unlike global social listening tools, we are built for the Asian digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              { category: 'Chinese Social', platforms: '小紅書 Xiaohongshu · 微博 Weibo · 微信 WeChat' },
              { category: 'Meta Ecosystem', platforms: 'Instagram · Threads · Facebook' },
              { category: 'HK Forums', platforms: 'LIHKG · HKGolden · Discuss.com.hk' },
              { category: 'Video', platforms: 'YouTube · 抖音 Douyin · 視頻號' },
              { category: 'Search & GEO', platforms: 'Google · Bing · ChatGPT · Perplexity' },
              { category: 'News & Media', platforms: 'TVB News · RTHK · HK01 · 明報 · 星島' },
            ].map((item, i) => (
              <div
                key={i}
                className="py-6 px-6"
                style={{
                  borderTop: '1px solid rgba(247,244,239,0.06)',
                  borderLeft: i % 3 !== 0 ? '1px solid rgba(247,244,239,0.06)' : 'none',
                }}
              >
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#A8842A' }}>{item.category}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.platforms}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}>
            <p className="text-sm mb-8" style={{ color: '#7A7268' }}>
              Social Intelligence is included in all ORM retainer plans, or available as a standalone advisory engagement. Pricing on application.
            </p>
            <Link
              href={`/${locale}/qualify`}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ background: '#F7F4EF', color: '#080808' }}
            >
              Request an Intelligence Demo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16" style={{ background: '#F7F4EF', borderTop: '1px solid rgba(15,15,15,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <Link
              href={`/${locale}/services/online-reputation-management`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              <ArrowLeft size={12} /> Online Reputation Management
            </Link>
            <Link
              href={`/${locale}/services/koc-seeding-word-of-mouth`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              Next: KOC Seeding &amp; Word-of-Mouth <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
