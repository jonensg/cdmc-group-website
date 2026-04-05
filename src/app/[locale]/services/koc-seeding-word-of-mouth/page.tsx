import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const howItWorks = [
  {
    step: '01',
    title: 'Brief & Match',
    description: 'We analyse your brand, category, and target consumer profile. Our AI matches you to verified KOCs in our 10,000+ network who have genuine relevance — not just follower count.',
  },
  {
    step: '02',
    title: 'Content Strategy',
    description: 'Based on Social Intelligence findings, we brief KOCs on the specific keywords, themes, and questions to address. Every post is strategically positioned — never scripted or fake.',
  },
  {
    step: '03',
    title: 'Matrix Deployment',
    description: 'Posts go live in coordinated waves across XHS, IG, and Threads. Comment Matrix activates simultaneously — placing authentic community dialogue around key content.',
  },
  {
    step: '04',
    title: 'Amplification',
    description: 'High-performing organic KOC content is identified and boosted with paid amplification where applicable, maximising reach without sacrificing authenticity signals.',
  },
  {
    step: '05',
    title: 'Reporting & Optimisation',
    description: 'Full performance dashboard: reach, engagement, sentiment, Share of Voice shift. We refine briefs monthly based on what\'s converting — not just what\'s trending.',
  },
];

const platforms = [
  {
    name: '小紅書 Xiaohongshu',
    note: 'Primary platform',
    description: 'The highest-intent discovery platform in Asia. A verified KOC post on XHS carries more purchase influence than a paid ad — because consumers know the difference.',
  },
  {
    name: 'Instagram',
    note: 'Visual authority',
    description: 'Lifestyle and aesthetic brands gain credibility through IG KOC content. We coordinate Reels, Stories, and grid posts with consistent brand narrative.',
  },
  {
    name: 'Threads',
    note: 'Emerging momentum',
    description: 'Threads users are text-driven, opinion-forming, and highly engaged. In Hong Kong, 81% use it daily. Our Comment Matrix is particularly effective here for narrative building.',
  },
];

export default async function KOCSeedingPage() {
  const locale = await getLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>03</span>
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>The Fix Module</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              KOC Seeding &amp;<br />Word-of-Mouth
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              10,000+ verified real consumers — not influencers — creating authentic content that places your brand at the exact moment consumers are deciding. This is the &ldquo;Fix&rdquo; that no monitoring tool can replace.
            </p>
          </div>
        </div>
      </section>

      {/* KOC vs KOL */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Why KOC, Not KOL</p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-3xl sm:text-4xl leading-[1.2] mb-10"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Consumers trust consumers. Not celebrities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mb-10">
                {/* KOL */}
                <div className="py-6 pr-6" style={{ borderRight: '1px solid rgba(15,15,15,0.1)' }}>
                  <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#8A8078' }}>KOL (Key Opinion Leader)</p>
                  {[
                    'High follower count, low credibility signal',
                    'Audience knows it\'s paid content',
                    'Expensive per post, poor ROI at scale',
                    'Brand safety risk — one controversy ruins the campaign',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 py-3" style={{ borderTop: '1px solid rgba(15,15,15,0.06)' }}>
                      <span className="text-sm" style={{ color: '#8A8078' }}>—</span>
                      <span className="text-sm" style={{ color: '#4A4540' }}>{point}</span>
                    </div>
                  ))}
                </div>

                {/* KOC */}
                <div className="py-6 pl-6">
                  <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8842A' }}>KOC (Key Opinion Consumer)</p>
                  {[
                    'Verified real consumers — trusted by peers',
                    'Content reads as genuine experience',
                    'Scalable: 8–24 posts per month within plan price',
                    'No single point of failure — network diversification',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 py-3" style={{ borderTop: '1px solid rgba(15,15,15,0.06)' }}>
                      <span className="text-sm" style={{ color: '#A8842A' }}>✓</span>
                      <span className="text-sm" style={{ color: '#4A4540' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                CDMC has been building and managing its verified KOC network since 2008. We vet every consumer for genuine usage behaviour, category relevance, and content quality — then maintain an active relationship with 10,000+ verified members across Hong Kong, mainland China, and the Asia-Pacific region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              How Matrix Seeding Works
            </h2>
          </div>

          <div>
            {howItWorks.map((item, i) => (
              <div
                key={i}
                className="flex gap-8 py-8"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <span
                  className="text-xs font-medium tracking-widest shrink-0 pt-1"
                  style={{ color: '#A8842A', minWidth: '28px' }}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.description}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Where We Seed
            </h2>
            <p className="text-base max-w-xl" style={{ color: '#4A4540' }}>
              We operate across the three platforms that drive the most authentic consumer discovery in Hong Kong and Asia.
            </p>
          </div>

          <div>
            {platforms.map((platform, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10"
                style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
              >
                <div className="lg:col-span-4">
                  <h3
                    className="text-2xl sm:text-3xl mb-2"
                    style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                  >
                    {platform.name}
                  </h3>
                  <span
                    className="text-xs tracking-widest uppercase px-2 py-0.5"
                    style={{ background: 'rgba(168,132,42,0.1)', color: '#A8842A' }}
                  >
                    {platform.note}
                  </span>
                </div>
                <div className="lg:col-span-7 lg:col-start-6 flex items-center">
                  <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>{platform.description}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <h2
                className="text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                KOC Seeding is at the heart of every ORM plan.
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#7A7268' }}>
                KOC Matrix Seeding is included in all three ORM plans. The scale of deployment — number of posts, platforms, and amplification — increases with each tier. See full pricing on our ORM page.
              </p>
              <div className="flex flex-wrap gap-8">
                {[
                  { plan: 'Plan A', posts: '8 KOC posts', price: 'HKD 9,800 / mo' },
                  { plan: 'Plan B', posts: '16 KOC posts', price: 'HKD 22,800 / mo' },
                  { plan: 'Plan C', posts: '24 KOC posts', price: 'HKD 42,800 / mo' },
                ].map(tier => (
                  <div key={tier.plan} className="py-4 pr-8" style={{ borderRight: '1px solid rgba(247,244,239,0.06)' }}>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#A8842A' }}>{tier.plan}</p>
                    <p className="text-sm mb-0.5" style={{ color: '#F7F4EF' }}>{tier.posts}</p>
                    <p className="text-xs" style={{ color: '#4A4540' }}>{tier.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              {/* Case study callout */}
              <div className="p-8" style={{ border: '1px solid rgba(247,244,239,0.08)' }}>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8842A' }}>Case in Point</p>
                <p
                  className="text-4xl mb-3"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
                >
                  2.16M
                </p>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4A4540' }}>
                  Total reads — 香港鼓樂節 XHS Campaign
                </p>
                <div className="w-full h-px mb-6" style={{ background: 'rgba(247,244,239,0.06)' }} />
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#7A7268' }}>
                  A coordinated KOC matrix seeding campaign for Hong Kong Drum Festival generated over 2.16 million reads on Xiaohongshu — without a single paid advertisement.
                </p>
                <Link
                  href={`/${locale}/case-studies/hk-drum-festival`}
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                  style={{ color: '#A8842A' }}
                >
                  Read Case Study <ArrowRight size={12} />
                </Link>
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
              href={`/${locale}/services/social-intelligence-analytics`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              <ArrowLeft size={12} /> Social Intelligence &amp; Analytics
            </Link>
            <Link
              href={`/${locale}/services/crisis-management`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              Next: Crisis Management <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
