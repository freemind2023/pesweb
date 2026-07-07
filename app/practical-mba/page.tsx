'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/mba/UrgencyBanner';
import Hero from '@/components/mba/Hero';
import ProgramHighlights from '@/components/mba/ProgramHighlights';
import OJTProcess from '@/components/mba/OJTProcess';
import TwoYearJourney from '@/components/mba/TwoYearJourney';
import WhoCanApply from '@/components/mba/WhoCanApply';
import AssociationsSection from '@/components/AssociationsSection';
import AwardsSection from '@/components/AwardsSection';
import Outcomes from '@/components/mba/Outcomes';
import AdmissionForm from '@/components/mba/AdmissionForm';
import FinalCTA from '@/components/mba/FinalCTA';
import PageFooter from '@/components/mba/PageFooter';
import FloatingCTA from '@/components/mba/FloatingCTA';

export default function PracticalMBAPage() {
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
      <ProgramHighlights />
      <OJTProcess />
      <TwoYearJourney />
      <WhoCanApply />
      <AssociationsSection />
      <AwardsSection />
      <Outcomes />
      <AdmissionForm ref={formRef} />
      <FinalCTA onApply={scrollToForm} />
      <PageFooter />
      <FloatingCTA onApply={scrollToForm} />
    </main>
  );
}
