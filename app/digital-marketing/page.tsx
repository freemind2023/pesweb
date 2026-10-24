'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/dm/UrgencyBanner';
import Hero from '@/components/dm/Hero';
import FormatStrip from '@/components/dm/FormatStrip';
import ProgramPromise from '@/components/dm/ProgramPromise';
import ToolsShowcase from '@/components/dm/ToolsShowcase';
import Outcomes from '@/components/dm/Outcomes';
import Curriculum from '@/components/dm/Curriculum';
import Portfolio from '@/components/dm/Portfolio';
import Certifications from '@/components/dm/Certifications';
import WhoCanApply from '@/components/dm/WhoCanApply';
import CareerLaunch from '@/components/dm/CareerLaunch';
import Faculty from '@/components/dm/Faculty';
import AssociationsSection from '@/components/AssociationsSection';
import AwardsSection from '@/components/AwardsSection';
import ProgramInfo from '@/components/dm/ProgramInfo';
import FAQ from '@/components/dm/FAQ';
import AdmissionForm from '@/components/dm/AdmissionForm';
import FinalCTA from '@/components/dm/FinalCTA';
import PageFooter from '@/components/dm/PageFooter';
import FloatingCTA from '@/components/dm/FloatingCTA';

export default function DigitalMarketingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.dataset.landing = '1';
    return () => { delete document.body.dataset.landing; };
  }, []);

  const scrollToForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <main>
      <UrgencyBanner />
      <Hero onApply={scrollToForm} />
      <FormatStrip />
      <ProgramPromise />
      <ToolsShowcase />
      <Outcomes />
      <Curriculum />
      <Portfolio />
      <Certifications />
      <WhoCanApply />
      <CareerLaunch />
      <Faculty />
      <AssociationsSection />
      <AwardsSection />
      <ProgramInfo onApply={scrollToForm} />
      <FAQ />
      <AdmissionForm ref={formRef} />
      <FinalCTA onApply={scrollToForm} />
      <PageFooter />
      <FloatingCTA onApply={scrollToForm} />
    </main>
  );
}
