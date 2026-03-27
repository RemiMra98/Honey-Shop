import HeroSection from '@/components/home/HeroSection';
import ManifestoSection from '@/components/home/ManifestoSection';
import ProduitsSection from '@/components/home/ProduitsSection';
import AdoptionRucheSection from '@/components/home/AdoptionRucheSection';
import CalendrierNectarSection from '@/components/home/CalendrierNectarSection';
import TableAccordSection from '@/components/home/TableAccordSection';
import HistoireSection from '@/components/home/HistoireSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ProduitsSection />
      <AdoptionRucheSection />
      <CalendrierNectarSection />
      <TableAccordSection />
      <HistoireSection />
      <NewsletterSection />
    </>
  );
}
