'use client';
import { useEffect } from 'react';
import Navbar from '@/components/skillcamp/Navbar';
import Hero from '@/components/skillcamp/Hero';
import StatChips from '@/components/skillcamp/StatChips';
import FeatureBanner from '@/components/skillcamp/FeatureBanner';
import AIToolsShowcase from '@/components/skillcamp/AIToolsShowcase';
import Agenda from '@/components/skillcamp/Agenda';
import Gallery from '@/components/skillcamp/Gallery';
import WhyThisCamp from '@/components/skillcamp/WhyThisCamp';
import Pricing from '@/components/skillcamp/Pricing';
import FAQ from '@/components/skillcamp/FAQ';
import FinalCTA from '@/components/skillcamp/FinalCTA';
import Footer from '@/components/skillcamp/Footer';
import FloatingCTA from '@/components/skillcamp/FloatingCTA';

export default function SkillCampPage() {
  useEffect(() => {
    document.body.dataset.landing = '1';
    return () => { delete document.body.dataset.landing; };
  }, []);

  return (
    <main className="skillcamp-page">
      <Navbar />
      <Hero />
      <StatChips />
      <FeatureBanner />
      <AIToolsShowcase />
      <Agenda />
      <Gallery />
      <WhyThisCamp />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
