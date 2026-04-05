import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const serviceLinks = [
    { label: 'Online Reputation Management', href: 'services/online-reputation-management' },
    { label: 'Social Intelligence & Analytics', href: 'services/social-intelligence-analytics' },
    { label: 'KOC Seeding & Word-of-Mouth', href: 'services/koc-seeding-word-of-mouth' },
    { label: 'Crisis Management', href: 'services/crisis-management' },
  ];

  const industryLinks = [
    { label: 'Finance & Insurance', href: 'industries/finance-insurance' },
    { label: 'E-commerce', href: 'industries/ecommerce' },
    { label: 'Aesthetics & Medical Beauty', href: 'industries/aesthetics-medical-beauty' },
  ];

  const companyLinks = [
    { label: 'About Us', href: 'about' },
    { label: 'Case Studies', href: 'case-studies' },
    { label: 'Insights', href: 'insights' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(247,244,239,0.06)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Gold rule */}
        <div className="w-8 h-px mb-14" style={{ background: '#A8842A' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span
                className="text-base font-bold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-inter)', color: '#A8842A' }}
              >
                CDMC
              </span>
              <span
                className="text-[9px] tracking-[0.2em] uppercase ml-2"
                style={{ color: 'rgba(247,244,239,0.25)' }}
              >
                Group
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#4A4540' }}>
              {t('tagline')}
            </p>
            <div className="space-y-1.5">
              <p className="text-xs" style={{ color: '#4A4540' }}>
                HK · MY · SG · TW · Toronto
              </p>
              <a
                href="mailto:hello@cdmcgroup.com"
                className="block text-xs transition-colors hover:opacity-80"
                style={{ color: '#4A4540' }}
              >
                hello@cdmcgroup.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: 'rgba(247,244,239,0.3)' }}
            >
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: '#4A4540' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: 'rgba(247,244,239,0.3)' }}
            >
              {t('industries')}
            </h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: '#4A4540' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: 'rgba(247,244,239,0.3)' }}
            >
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: '#4A4540' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(247,244,239,0.05)' }}
        >
          <p className="text-xs" style={{ color: '#2A2A2A' }}>
            {t('rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-xs transition-colors hover:opacity-80"
              style={{ color: '#2A2A2A' }}
            >
              {t('privacy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-xs transition-colors hover:opacity-80"
              style={{ color: '#2A2A2A' }}
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
