'use client';
import { useEffect, useRef, useCallback } from 'react';
import IntroVideo from '@/components/mba/IntroVideo';
import VideoTestimonials from '@/components/VideoTestimonials';
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
      <IntroVideo />
      <VideoTestimonials
        videos={[
          { id: '9t46OXfGOUQ', title: 'Practical MBA — Student Journey', label: 'Practical MBA · Student Journey' },
          { id: 'Sh_g_3rLVDc', title: 'Practical MBA — Corporate OJT Experience', label: 'Practical MBA · Corporate OJT Experience' },
          { id: '7fsb6ZESyzE', title: 'Practical MBA — Why Practical EduSkills', label: 'Practical MBA · Why Practical EduSkills' },
        ]}
        heading="More From Our Practical MBA Students"
        subheading="Real journeys. Real OJT. Real growth."
      />
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
