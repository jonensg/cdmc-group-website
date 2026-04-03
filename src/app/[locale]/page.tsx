import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import WhyCDMC from '@/components/sections/WhyCDMC';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <WhyCDMC />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
