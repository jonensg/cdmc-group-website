import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(zh-HK|zh-CN|en)/:path*']
};
