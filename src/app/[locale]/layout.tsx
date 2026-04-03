import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "CDMC Group — Asia's Leading MarTech AI & ORM Agency | Hong Kong",
  description: "CDMC Group is Asia's premier MarTech AI & Online Reputation Management agency. Based in Hong Kong, serving enterprise brands across Asia with AI social intelligence, KOC seeding, and ORM. 18 years experience.",
  keywords: "ORM agency Hong Kong, online reputation management Asia, MarTech AI, social intelligence, KOC seeding, word of mouth marketing, CDMC Group",
  openGraph: {
    title: "CDMC Group — Be Seen. Be Chosen. Master Your Digital Reputation.",
    description: "Asia's leading MarTech AI & ORM agency. AI-driven social intelligence, KOC seeding, and reputation management for enterprise brands.",
    type: "website",
    locale: "en_HK",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
