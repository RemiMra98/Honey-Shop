import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ManifestoSection from '@/components/home/ManifestoSection';
import ProduitsSection from '@/components/home/ProduitsSection';
import AdoptionRucheSection from '@/components/home/AdoptionRucheSection';
import CalendrierNectarSection from '@/components/home/CalendrierNectarSection';
import TableAccordSection from '@/components/home/TableAccordSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HistoireSection from '@/components/home/HistoireSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ManifestoSection />
      <ProduitsSection />
      <AdoptionRucheSection />
      <CalendrierNectarSection />
      <TableAccordSection />
      <TestimonialsSection />
      <HistoireSection />
      <NewsletterSection />
    </>
  );
}
