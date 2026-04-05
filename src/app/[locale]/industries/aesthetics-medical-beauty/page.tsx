import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const sensitivities = [
  {
    title: 'Regulatory Compliance',
    description: 'Medical and aesthetic content in Hong Kong is regulated by the Medical Council, DHCE, and advertising codes. Our KOC briefs are structured to share genuine personal experience — not claims — keeping every piece of content compliant.',
  },
  {
    title: 'Patient Privacy',
    description: 'Before-and-after content, procedure descriptions, and treatment reviews require careful handling. We manage KOC content to share authentic perspective without breaching patient confidentiality or creating medico-legal exposure.',
  },
  {
    title: 'Negative Review Management',
    description: 'A single negative review of a medical procedure carries outsized emotional and commercial weight. Our ORM monitoring flags negative content immediately, and our suppression protocol activates within hours.',
  },
  {
    title: 'High-Value Client Acquisition',
    description: 'Aesthetics and medical beauty clients spend significantly more per visit than other consumer categories. A single converted client from a well-placed KOC post can generate HKD 30,000+ in lifetime value.',
  },
];

const contentTypes = [
  {
    type: '種草 · Desire Seeding',
    description: 'KOC posts that authentically share treatment journeys, product results, and clinic experiences — inspiring consideration without overpromising.',
    platforms: 'Xiaohongshu · Instagram',
  },
  {
    type: '口碑 · Reputation Building',
    description: 'Sustained positive mentions across forums and comment sections that create a trust halo around your clinic or brand — visible to every prospective patient who searches.',
    platforms: 'LIHKG · XHS Comments',
  },
  {
    type: 'SERM · Search Reputation',
    description: 'Proactive seeding to ensure the top XHS search results for your clinic name, treatment type, and key competitors are populated with accurate, positive content.',
    platforms: 'Xiaohongshu SEO',
  },
  {
    type: 'ORM · Crisis Suppression',
    description: 'When a negative review or complaint surfaces, rapid KOC counter-narrative deployment dilutes its visibility and restores balanced perspective in the search results.',
    platforms: 'All Platforms',
  },
];

export default async function AestheticsPage() {
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
              <span className="text-xs tracking-widest uppercase" style={{ color: '#4A4540' }}>Industry</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Aesthetics &amp;<br />Medical Beauty
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              Aesthetic clinics and medical beauty brands operate in the most reputation-sensitive vertical in our portfolio. We combine compliance-safe KOC content with proactive ORM to protect what you&apos;ve built — and attract the high-value clients your treatments deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Why reputation is everything */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Why Reputation is Everything</p>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-3xl sm:text-4xl leading-[1.2] mb-8"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Patients do not book procedures from ads. They book from trust — and trust is built peer-to-peer on Xiaohongshu.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                A prospective patient considering laser treatment, filler, or a surgical procedure will spend weeks researching on XHS before making contact. They read treatment diaries, real recovery accounts, and clinic comparisons from people they perceive as genuine. A clinic that has a rich, authentic KOC presence on XHS wins these patients before the competitor&apos;s ad even loads.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                Equally, a single negative review on XHS — if not managed — can suppress new patient acquisition for months. Our ORM monitoring catches these within hours, and our response protocol is calibrated specifically for the sensitivity of medical and aesthetic services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry sensitivities */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Industry Sensitivities We Manage
            </h2>
          </div>

          <div>
            {sensitivities.map((item, i) => (
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
                <div className="lg:col-span-6">
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.description}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Content types */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Four Content Strategies for Aesthetic Brands
            </h2>
            <p className="text-base max-w-xl" style={{ color: '#4A4540' }}>
              Every engagement combines at least two of these approaches — calibrated to your specific clinic needs, client profile, and risk tolerance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {contentTypes.map((item, i) => (
              <div
                key={i}
                className="py-10 px-0"
                style={{
                  borderTop: '1px solid rgba(15,15,15,0.1)',
                  borderLeft: i % 2 === 1 ? '1px solid rgba(15,15,15,0.1)' : 'none',
                  paddingLeft: i % 2 === 1 ? '2.5rem' : '0',
                  paddingRight: i % 2 === 0 ? '2.5rem' : '0',
                }}
              >
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                >
                  {item.type}
                </h3>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8842A' }}>
                  {item.platforms}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{item.description}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
        </div>
      </section>

      {/* CUHK Hospital case note */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="w-8 h-px mb-8" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8842A' }}>
                Healthcare Client — CDMC
              </p>
              <h2
                className="text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                香港中文大學醫院
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#7A7268' }}>
                CUHK Medical Centre engaged CDMC to build authentic XHS presence targeting mainland Chinese residents in Hong Kong seeking trusted medical providers. Our approach prioritised genuine patient voice content within strict medical communication guidelines.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#7A7268' }}>
                We selected KOCs with health and wellness audiences, developed sensitivity-compliant content formats, and delivered a seeding campaign that generated qualified patient enquiries from the mainland Chinese community.
              </p>
              <Link
                href={`/${locale}/case-studies/cuhk-hospital`}
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                style={{ color: '#A8842A' }}
              >
                View Case Study <ArrowRight size={12} />
              </Link>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="p-6" style={{ border: '1px solid rgba(247,244,239,0.08)' }}>
                <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#A8842A' }}>
                  Recommended Plan
                </p>
                <div className="py-4" style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}>
                  <p className="text-sm mb-1" style={{ color: '#F7F4EF' }}>Plan C Dominance</p>
                  <p className="text-xs mb-1" style={{ color: '#A8842A' }}>HKD 42,800 / month</p>
                  <p className="text-xs" style={{ color: '#4A4540' }}>
                    Recommended for premium clinics, hospitals, and medical beauty brands with complex reputation requirements
                  </p>
                </div>
                <div className="py-4" style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}>
                  <p className="text-sm mb-1" style={{ color: '#F7F4EF' }}>Plan B Growth</p>
                  <p className="text-xs mb-1" style={{ color: '#A8842A' }}>HKD 22,800 / month</p>
                  <p className="text-xs" style={{ color: '#4A4540' }}>
                    For aesthetic clinics building initial XHS presence and KOC trust layer
                  </p>
                </div>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}>
                  <Link
                    href={`/${locale}/qualify`}
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-80 px-5 py-3"
                    style={{ background: '#F7F4EF', color: '#080808' }}
                  >
                    Apply for Consultation <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs tracking-widest uppercase mr-4 shrink-0" style={{ color: '#4A4540' }}>
              Healthcare &amp; aesthetics clients
            </span>
            {['香港中文大學醫院 CUHK Medical Centre', 'ABC Pathways School', 'HKU SPACE'].map((name, i, arr) => (
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

      {/* Navigation */}
      <section className="py-16" style={{ background: '#F7F4EF', borderTop: '1px solid rgba(15,15,15,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <Link
              href={`/${locale}/industries/ecommerce`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              <ArrowLeft size={12} /> E-Commerce &amp; Retail
            </Link>
            <Link
              href={`/${locale}/qualify`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: '#8A8078' }}
            >
              Apply for Free Audit <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
