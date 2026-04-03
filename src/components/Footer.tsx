import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { MapPin, Mail, Globe } from 'lucide-react';

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

  const globalPresence = ['Hong Kong', 'Malaysia', 'Singapore', 'Taiwan', 'Toronto'];

  return (
    <footer style={{ background: '#0A0A0F', borderTop: '1px solid rgba(201, 168, 76, 0.1)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  color: '#C9A84C',
                }}
              >
                CDMC
              </span>
              <span
                className="text-xs tracking-widest uppercase ml-2"
                style={{ color: '#6B7280' }}
              >
                Group
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
              {t('tagline')}
            </p>

            {/* Global presence */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={13} style={{ color: '#C9A84C' }} />
                <span className="text-xs" style={{ color: '#6B7280' }}>
                  {globalPresence.join(' · ')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} style={{ color: '#C9A84C' }} />
                <a href="mailto:hello@cdmcgroup.com" className="text-xs hover:text-[#C9A84C] transition-colors" style={{ color: '#6B7280' }}>
                  hello@cdmcgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={13} style={{ color: '#C9A84C' }} />
                <span className="text-xs" style={{ color: '#6B7280' }}>cdmcgroup.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C9A84C' }}
            >
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-sm transition-colors hover:text-[#C9A84C]"
                    style={{ color: '#6B7280' }}
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
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C9A84C' }}
            >
              {t('industries')}
            </h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-sm transition-colors hover:text-[#C9A84C]"
                    style={{ color: '#6B7280' }}
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
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C9A84C' }}
            >
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-sm transition-colors hover:text-[#C9A84C]"
                    style={{ color: '#6B7280' }}
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
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(201, 168, 76, 0.08)' }}
        >
          <p className="text-xs" style={{ color: '#4B5563' }}>
            {t('rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-xs transition-colors hover:text-[#C9A84C]"
              style={{ color: '#4B5563' }}
            >
              {t('privacy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-xs transition-colors hover:text-[#C9A84C]"
              style={{ color: '#4B5563' }}
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
