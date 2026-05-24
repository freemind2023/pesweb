'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/modern-college/UrgencyBanner';
import Hero from '@/components/dample-college/Hero';
import PESRecognition from '@/components/dample-college/PESRecognition';
import Stats from '@/components/dample-college/Stats';
import Programs from '@/components/dample-college/Programs';
import Timeline from '@/components/modern-college/Timeline';
import WhyUs from '@/components/dample-college/WhyUs';
import Careers from '@/components/dample-college/Careers';
import Testimonials from '@/components/dample-college/Testimonials';
import AdmissionForm from '@/components/dample-college/AdmissionForm';
import FAQ from '@/components/dample-college/FAQ';
import PageFooter from '@/components/dample-college/PageFooter';
import FloatingCTA from '@/components/dample-college/FloatingCTA';

export default function DampleCollegePage() {
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
      <PESRecognition />
      <Stats />
      <Programs onApply={scrollToForm} />
      <Timeline />
      <WhyUs />
      <Careers />
      <Testimonials />
      <AdmissionForm ref={formRef} />
      <FAQ />
      <PageFooter />
      <FloatingCTA onApply={scrollToForm} />
    </main>
  );
}
