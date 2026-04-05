import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

const clients = [
  { name: 'Disney', logo: '/logos/disney.svg', w: 90 },
  { name: 'HKT', logo: '/logos/hkt.svg', w: 52 },
  { name: 'OneDegree', logo: '/logos/onedegree.svg', w: 100 },
  { name: 'New Town Plaza', logo: '/logos/newtownplaza.svg', w: 110 },
  { name: 'CUHK Medical Centre', logo: '/logos/cuhkmc.svg', w: 130 },
  { name: 'Wi-Fi.HK', logo: null, w: 0 },
  { name: 'Esprit', logo: '/logos/esprit.png', w: 72 },
  { name: 'HKU SPACE', logo: '/logos/hkuspace.png', w: 100 },
  { name: 'CityU', logo: '/logos/cityu.svg', w: 68 },
  { name: 'HKCO', logo: null, w: 0 },
  { name: 'Hollywood Plaza', logo: '/logos/hollywood.png', w: 100 },
];

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-20">

          {/* Left: copy */}
          <div className="flex flex-col justify-center">
            {/* Gold rule */}
            <div className="w-10 h-px mb-12" style={{ background: '#A8842A' }} />

            {/* Headline */}
            <h1
              className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl leading-[0.92] mb-5 animate-fade-in-up"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}
            >
              {t('subheadline')}
            </h1>
            <p
              className="text-2xl sm:text-3xl leading-tight mb-10 animate-fade-in-up animate-delay-100"
              style={{ fontFamily: 'var(--font-dm-serif)', color: 'rgba(247,244,239,0.4)' }}
            >
              {t('headline')}
            </p>

            {/* Tagline */}
            <p
              className="text-base max-w-md mb-12 leading-relaxed animate-fade-in-up animate-delay-200"
              style={{ color: '#7A7268' }}
            >
              {t('tagline')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-in-up animate-delay-300">
              <Link
                href={`/${locale}/qualify`}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity duration-300 hover:opacity-80"
                style={{ background: '#F7F4EF', color: '#080808' }}
              >
                {t('cta')} <ArrowRight size={14} />
              </Link>
              <Link
                href={`/${locale}/case-studies`}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity duration-300 hover:opacity-80"
                style={{ border: '1px solid rgba(247,244,239,0.15)', color: '#7A7268' }}
              >
                {t('ctaSecondary')}
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-10 pt-10 animate-fade-in-up animate-delay-400"
              style={{ borderTop: '1px solid rgba(247,244,239,0.06)' }}
            >
              {[
                { value: '18+', label: 'Years of Excellence' },
                { value: '10,000+', label: 'Verified KOC Network' },
                { value: '100+', label: 'Enterprise Brands' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-dm-serif)', color: '#F7F4EF' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: '#7A7268' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: founder card */}
          <div className="flex items-center justify-center lg:justify-end animate-fade-in-up animate-delay-200">
            <div className="relative w-full max-w-sm">

              {/* Founder video card */}
              <a
                href="https://www.youtube.com/@jjdigitalchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full transition-opacity duration-300 hover:opacity-90"
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    border: '1px solid rgba(247,244,239,0.1)',
                    background: '#111111',
                    padding: '2rem',
                  }}
                >
                  {/* Circular photo placeholder */}
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className="relative shrink-0 flex items-center justify-center overflow-hidden"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(168,132,42,0.1)',
                        border: '2px solid rgba(168,132,42,0.3)',
                      }}
                    >
                      {/* Replace this div with <Image> when photo is ready */}
                      <span className="text-xs tracking-widest uppercase text-center leading-tight px-2" style={{ color: '#A8842A', fontSize: '9px' }}>
                        Photo<br />coming
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#F7F4EF' }}>Jones Ng</p>
                      <p className="text-xs mt-0.5" style={{ color: '#7A7268' }}>Founder & Director</p>
                      <p className="text-xs" style={{ color: '#7A7268' }}>CDMC Group</p>
                    </div>

                    {/* External link indicator */}
                    <div className="ml-auto">
                      <ArrowRight size={14} style={{ color: '#A8842A' }} />
                    </div>
                  </div>

                  {/* YouTube label */}
                  <div className="flex items-center gap-2 mb-5" style={{ borderTop: '1px solid rgba(247,244,239,0.06)', paddingTop: '1.25rem' }}>
                    <div className="w-4 h-px" style={{ background: '#A8842A' }} />
                    <span className="text-xs tracking-widest uppercase" style={{ color: '#A8842A' }}>
                      YouTube · @jjdigitalchannel
                    </span>
                  </div>

                  {/* YouTube thumbnail */}
                  <div className="relative w-full overflow-hidden" style={{ height: '180px' }}>
                    <Image
                      src="https://img.youtube.com/vi/wW1NNcCCisg/maxresdefault.jpg"
                      alt="Jones Ng — CDMC Group YouTube"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(8,8,8,0.3)' }}>
                      <div
                        className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: '#A8842A', borderRadius: '50%' }}
                      >
                        <Play size={16} fill="#080808" style={{ color: '#080808', marginLeft: '3px' }} />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs mt-4" style={{ color: '#4A4540' }}>
                    小紅書第一人 · 香港媒體認可 · 18年中國數碼營銷經驗
                  </p>
                </div>
              </a>

              {/* Floating quote */}
              <div
                className="absolute -top-5 -right-5 max-w-[180px] p-4 hidden lg:block"
                style={{
                  background: '#F7F4EF',
                  border: '1px solid rgba(15,15,15,0.08)',
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: '#4A4540', fontStyle: 'italic', fontFamily: 'var(--font-dm-serif)' }}>
                  "Authentic voices drive real results — not vanity metrics."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client trust bar */}
      <div className="w-full" style={{ background: '#F0EDE8', borderTop: '1px solid rgba(15,15,15,0.08)' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-5 overflow-x-auto">
          <div className="flex items-center gap-x-6" style={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}>
            <span className="text-xs tracking-widest uppercase shrink-0 font-medium" style={{ color: '#8A8078' }}>
              Trusted by
            </span>
            <div className="w-px h-5 shrink-0" style={{ background: 'rgba(15,15,15,0.15)' }} />
            {clients.map((client) =>
              client.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  style={{
                    height: '26px',
                    width: 'auto',
                    objectFit: 'contain',
                    opacity: 0.82,
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                />
              ) : (
                <span
                  key={client.name}
                  className="text-xs tracking-widest uppercase font-semibold shrink-0"
                  style={{ color: '#7A7268' }}
                >
                  {client.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
