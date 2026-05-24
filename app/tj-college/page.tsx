'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/modern-college/UrgencyBanner';
import Hero from '@/components/tj-college/Hero';
import SPPURecognition from '@/components/modern-college/SPPURecognition';
import Stats from '@/components/modern-college/Stats';
import Programs from '@/components/tj-college/Programs';
import Timeline from '@/components/modern-college/Timeline';
import WhyUs from '@/components/modern-college/WhyUs';
import Careers from '@/components/modern-college/Careers';
import Testimonials from '@/components/tj-college/Testimonials';
import AdmissionForm from '@/components/tj-college/AdmissionForm';
import FAQ from '@/components/modern-college/FAQ';
import PageFooter from '@/components/tj-college/PageFooter';
import FloatingCTA from '@/components/tj-college/FloatingCTA';

export default function TJCollegePage() {
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
      <SPPURecognition />
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
