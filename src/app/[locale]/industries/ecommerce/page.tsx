import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const funnelStages = [
  {
    stage: 'Discovery',
    platform: 'Xiaohongshu',
    description: 'Where purchase decisions begin. KOC seeding places your product into the organic search results that high-intent shoppers see first. We own the keywords before your competitors do.',
    tactics: ['種草 — desire-seeding posts', 'Keyword-density clustering', 'Store-visit (探店) content'],
  },
  {
    stage: 'Consideration',
    platform: 'IG · Threads',
    description: 'KOC content on Instagram and Threads builds the social proof layer — peer endorsement that transforms a discovery into an active consideration. Comment Matrix creates the community dialogue.',
    tactics: ['Lifestyle integration posts', 'Before/after authentic reviews', 'Community comment activation'],
  },
  {
    stage: 'Validation',
    platform: 'Forums · XHS Comments',
    description: 'Before a cross-border purchase, consumers check forums and comment sections for reassurance. We seed validation content at exactly these trust-verification touchpoints.',
    tactics: ['LIHKG / HKGolden seeding', 'XHS comment matrix', 'Peer Q&A responses'],
  },
  {
    stage: 'Post-Purchase',
    platform: 'All Platforms',
    description: 'The best e-commerce brands turn customers into advocates. We help you activate real buyers as KOCs — converting genuine satisfaction into organic discovery content for the next consumer.',
    tactics: ['Customer KOC conversion', 'Unboxing content coordination', 'Review amplification'],
  },
];

const clients = [
  { name: '御藥堂', en: 'Yu Yat Tong', category: 'Traditional Chinese Medicine · E-Commerce' },
  { name: '草姬', en: 'Cho Ji', category: 'Natural Beauty · Cross-border E-Commerce' },
  { name: 'Esprit', en: 'Esprit Holdings', category: 'Fashion & Retail' },
  { name: 'New Town Plaza', en: 'New Town Plaza (Shatin)', category: 'Retail & Shopping Mall' },
  { name: 'Hollywood Plaza', en: 'Hollywood Plaza', category: 'Retail & Shopping Mall' },
];

export default async function EcommercePage() {
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
              <span className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>Industry</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              E-Commerce<br />&amp; Retail
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              Cross-border e-commerce lives and dies on Xiaohongshu. We place your products at the exact moment consumers are researching, comparing, and deciding — with authentic KOC voices that paid ads can never replicate.
            </p>
          </div>
        </div>
      </section>

      {/* Why XHS is the e-commerce battlefield */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>The Battlefield</p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-3xl sm:text-4xl leading-[1.2] mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Xiaohongshu is where 2 million Hong Kong consumers decide what to buy. Most brands are not even on the consideration list.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                Unlike Instagram or Facebook, Xiaohongshu is a search-first platform. When a consumer wants to buy a skincare product, a TCM supplement, or a fashion item, they search XHS first — not Google. The brands that appear in those results get the sale. The ones that don&apos;t, don&apos;t.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                Our e-commerce clients — from traditional Chinese medicine brands like 御藥堂 to natural beauty brands like 草姬 — use our KOC Matrix Seeding to dominate XHS discovery, build authentic review velocity, and convert mainland Chinese consumers at every stage of the cross-border purchase funnel.
              </p>

              <div className="flex flex-wrap gap-10 mt-10 pt-8" style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}>
                {[
                  { value: '2M+', label: 'XHS monthly active users in HK' },
                  { value: '85%', label: 'Of XHS users research before purchase' },
                  { value: '18+', label: 'Years serving retail & e-commerce' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs max-w-[130px] leading-relaxed tracking-widest uppercase" style={{ color: '#8A8078' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce funnel */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              We Own Every Stage of the Purchase Funnel
            </h2>
            <p className="text-base max-w-xl" style={{ color: '#4A4540' }}>
              Most agencies target one stage. We build presence from first discovery through to post-purchase advocacy — creating a compounding flywheel of authentic content.
            </p>
          </div>

          <div>
            {funnelStages.map((stage, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <div className="lg:col-span-2">
                  <p
                    className="text-xl mb-1"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {stage.stage}
                  </p>
                  <p className="text-xs tracking-widest" style={{ color: '#A8842A' }}>{stage.platform}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{stage.description}</p>
                </div>
                <div className="lg:col-span-4 lg:col-start-9">
                  <ul className="space-y-2">
                    {stage.tactics.map((tactic, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#A8842A' }} />
                        <span className="text-sm" style={{ color: '#4A4540' }}>{tactic}</span>
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

      {/* Client spotlight */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Clients We Serve</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="text-3xl sm:text-4xl"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Brands that trust CDMC with their e-commerce reputation
              </h2>
            </div>
          </div>

          <div>
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <div>
                  <p
                    className="text-2xl mb-1"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {client.name}
                  </p>
                  <p className="text-sm" style={{ color: '#7A7268' }}>{client.en}</p>
                </div>
                <span
                  className="text-xs tracking-widest uppercase px-3 py-1 shrink-0"
                  style={{ background: 'rgba(168,132,42,0.1)', color: '#A8842A' }}
                >
                  {client.category}
                </span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Cross-border seeding note */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <h2
                className="text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                Cross-Border E-Commerce: HK &rarr; Mainland China
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#7A7268' }}>
                Hong Kong brands with cross-border ambitions face a specific challenge: mainland Chinese consumers trust peer content over any form of advertising. Our KOC network includes verified members on both sides of the border — enabling authentic seeding that reads as local for mainland audiences.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#7A7268' }}>
                We work with brands in TCM, natural beauty, health supplements, fashion, and lifestyle — helping them build the organic XHS presence that converts mainland Chinese shoppers who have never been to Hong Kong.
              </p>
              <div className="flex flex-wrap gap-6">
                {['小紅書 Seeding', '跨境 Cross-Border', '種草 KOC Content', '口碑 Word-of-Mouth'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs tracking-widest uppercase px-3 py-1"
                    style={{ border: '1px solid rgba(247,244,239,0.15)', color: '#7A7268' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="p-6" style={{ border: '1px solid rgba(247,244,239,0.08)' }}>
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#A8842A' }}>
                  Recommended for E-Commerce
                </p>
                {[
                  { plan: 'Plan B Growth', price: 'HKD 22,800 / mo', note: 'For brands scaling XHS presence' },
                  { plan: 'Plan C Dominance', price: 'HKD 42,800 / mo', note: 'For cross-border market leaders' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="py-4"
                    style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}
                  >
                    <p className="text-sm mb-1" style={{ color: '#F7F4EF' }}>{item.plan}</p>
                    <p className="text-xs mb-1" style={{ color: '#A8842A' }}>{item.price}</p>
                    <p className="text-xs" style={{ color: '#4A4540' }}>{item.note}</p>
                  </div>
                ))}
                <div className="pt-6" style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}>
                  <Link
                    href={`/${locale}/services/online-reputation-management`}
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                    style={{ color: '#A8842A' }}
                  >
                    View Full Pricing <ArrowRight size={12} />
                  </Link>
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
              href={`/${locale}/industries/finance-insurance`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              <ArrowLeft size={12} /> Finance &amp; Insurance
            </Link>
            <Link
              href={`/${locale}/industries/aesthetics-medical-beauty`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              Next: Aesthetics &amp; Medical Beauty <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
