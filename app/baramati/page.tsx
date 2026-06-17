'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/modern-college/UrgencyBanner';
import Hero from '@/components/baramati/Hero';
import VideoTestimonials from '@/components/VideoTestimonials';
import PESRecognition from '@/components/baramati/PESRecognition';
import Stats from '@/components/dample-college/Stats';
import Programs from '@/components/baramati/Programs';
import Timeline from '@/components/modern-college/Timeline';
import WhyUs from '@/components/dample-college/WhyUs';
import Careers from '@/components/dample-college/Careers';
import TestimonialVideos from '@/components/TestimonialVideos';
import AdmissionForm from '@/components/baramati/AdmissionForm';
import FAQ from '@/components/baramati/FAQ';
import PageFooter from '@/components/baramati/PageFooter';
import FloatingCTA from '@/components/baramati/FloatingCTA';

const BARAMATI_VIDEOS = [
  { id: '0X6lDB6QXZw', title: 'Testimonial by Nishigandha Bhosale, Baramati', label: 'Nishigandha Bhosale — 1st Year Student, Baramati Campus' },
  { id: 'levFiRaC0HA', title: 'Parent Testimonial — Baramati', label: 'Parent Testimonial — Mueez Maniyar\'s Father, Baramati Campus' },
  { id: 'vY63DeLeiNw', title: 'Switched from BBA to Practical B.Com — Baramati', label: 'Mr. Doshi — Switched from BBA to Practical B.Com, Baramati' },
  { id: 'NFQEIzJuiN8', title: 'Testimonial by Lanisa Shaikh, Baramati', label: 'Lanisa Shaikh — 1st Year Student, Baramati Campus' },
];

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
      <VideoTestimonials
        videos={BARAMATI_VIDEOS}
        heading="What Our Baramati Students Say"
        subheading="Hear directly from students and parents at our Baramati campus"
      />
      <PESRecognition />
      <Stats />
      <Programs onApply={scrollToForm} />
      <Timeline />
      <WhyUs />
      <Careers />
      <TestimonialVideos />
      <AdmissionForm ref={formRef} />
      <FAQ />
      <PageFooter />
      <FloatingCTA onApply={scrollToForm} />
    </main>
  );
}
