import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const services = [
  {
    number: '01',
    title: 'Online Reputation Management',
    subtitle: 'The complete Find + Fix cycle',
    description: 'AI-powered diagnosis of your brand\'s reputation position, combined with KOC matrix execution to protect and grow your narrative across every platform that matters.',
    href: 'online-reputation-management',
    tag: 'Core service · Plans A / B / C',
  },
  {
    number: '02',
    title: 'Social Intelligence & Analytics',
    subtitle: 'The Find module',
    description: 'Real-time AI monitoring across Xiaohongshu, Instagram, Threads, forums, and news — translated into competitor intelligence, sentiment trends, and actionable content briefs.',
    href: 'social-intelligence-analytics',
    tag: 'Included in all plans · Standalone available',
  },
  {
    number: '03',
    title: 'KOC Seeding & Word-of-Mouth',
    subtitle: 'The Fix module',
    description: '10,000+ verified real consumers creating authentic content that places your brand at the moment of decision — on XHS, IG, and Threads, with comment matrix included.',
    href: 'koc-seeding-word-of-mouth',
    tag: 'Included in all plans',
  },
  {
    number: '04',
    title: 'Crisis Management',
    subtitle: 'Rapid response ORM',
    description: '24/7 monitoring, emergency KOC activation within 4 hours, and a structured brand restoration protocol for when your reputation comes under attack.',
    href: 'crisis-management',
    tag: 'Included in Plans B & C · Standalone available',
  },
];

const addOns = [
  {
    title: 'GEO — Generative Engine Optimisation',
    description: 'Ensure your brand appears accurately when consumers search ChatGPT, Perplexity, and Google AI Overviews. The next frontier of SERM.',
    price: 'From HKD 30,000',
    note: 'One-time project',
  },
  {
    title: 'Instagram Official Account Management',
    description: 'Content strategy, creation, and publishing for your IG brand account — coordinated with your KOC seeding for maximum narrative coherence.',
    price: 'HKD 12,000 – 25,000',
    note: '/ month',
  },
  {
    title: 'Enterprise Revenue Share',
    description: 'For brands with established commerce channels — a performance-based KOL / KOC seeding model where we share in the results we generate.',
    price: '15 – 20% commission',
    note: 'Performance model',
  },
];

export default async function ServicesPage() {
  const locale = await getLocale();

  return (
    <main className="min-h-screen" style={{ background: '#F7F4EF' }}>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>What We Do</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              Services
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A7268' }}>
              Every engagement combines two things most agencies offer separately: the intelligence to know where your reputation stands, and the authentic community network to change it. Find + Fix. One agency. Full accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24" style={{ background: '#F7F4EF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#8A8078' }}>The Find + Fix Framework</p>
            <p className="text-base max-w-2xl leading-relaxed" style={{ color: '#4A4540' }}>
              We are the only agency in Hong Kong that combines AI social intelligence with a live KOC execution network. You don&apos;t need a listening tool and a seeding agency — you need one team that does both.
            </p>
          </div>

          <div>
            {services.map((service) => (
              <Link
                key={service.href}
                href={`/${locale}/services/${service.href}`}
                className="group block py-10 transition-opacity duration-200 hover:opacity-70"
                style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-1">
                    <span className="text-xs font-medium tracking-widest" style={{ color: '#A8842A' }}>
                      {service.number}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h2
                      className="text-2xl sm:text-3xl mb-2 leading-tight"
                      style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#4A4540' }}>
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className="text-xs tracking-widest"
                        style={{ color: '#8A8078' }}
                      >
                        {service.tag}
                      </span>
                      <ArrowRight
                        size={16}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: '#A8842A' }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24" style={{ background: '#EDEAE4' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3">
              <div className="w-8 h-px mb-6" style={{ background: '#A8842A' }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>Add-ons</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="text-3xl sm:text-4xl"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
              >
                Extend Your Engagement
              </h2>
            </div>
          </div>

          <div>
            {addOns.map((addon, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8"
                style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
              >
                <div className="lg:col-span-4">
                  <h3 className="text-lg font-medium mb-1" style={{ color: '#0F0F0F' }}>{addon.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>{addon.description}</p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <p className="text-base font-medium" style={{ color: '#0F0F0F' }}>{addon.price}</p>
                  <p className="text-xs" style={{ color: '#8A8078' }}>{addon.note}</p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="w-8 h-px mb-8" style={{ background: '#A8842A' }} />
              <h2
                className="text-4xl sm:text-5xl mb-6"
                style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
              >
                Not sure which service fits your brand?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#7A7268' }}>
                Answer 5 questions about your brand, competitors, and goals. Our strategists will recommend the right plan and send you a tailored brief within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/qualify`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                  style={{ background: '#F7F4EF', color: '#080808' }}
                >
                  Get My Recommendation <ArrowRight size={14} />
                </Link>
                <Link
                  href={`/${locale}/case-studies`}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                  style={{ border: '1px solid rgba(247,244,239,0.15)', color: '#7A7268' }}
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
