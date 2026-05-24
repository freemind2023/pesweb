'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/modern-college/UrgencyBanner';
import Hero from '@/components/baramati/Hero';
import PESRecognition from '@/components/baramati/PESRecognition';
import Stats from '@/components/dample-college/Stats';
import Programs from '@/components/baramati/Programs';
import Timeline from '@/components/modern-college/Timeline';
import WhyUs from '@/components/dample-college/WhyUs';
import Careers from '@/components/dample-college/Careers';
import Testimonials from '@/components/dample-college/Testimonials';
import AdmissionForm from '@/components/baramati/AdmissionForm';
import FAQ from '@/components/dample-college/FAQ';
import PageFooter from '@/components/baramati/PageFooter';
import FloatingCTA from '@/components/baramati/FloatingCTA';

export default function BaramatiPage() {
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
