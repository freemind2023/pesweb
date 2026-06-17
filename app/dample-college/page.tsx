'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/modern-college/UrgencyBanner';
import Hero from '@/components/dample-college/Hero';
import VideoTestimonials from '@/components/VideoTestimonials';
import PESRecognition from '@/components/dample-college/PESRecognition';
import Stats from '@/components/dample-college/Stats';
import Programs from '@/components/dample-college/Programs';
import Timeline from '@/components/modern-college/Timeline';
import WhyUs from '@/components/dample-college/WhyUs';
import Careers from '@/components/dample-college/Careers';
import TestimonialVideos from '@/components/TestimonialVideos';
import AdmissionForm from '@/components/dample-college/AdmissionForm';
import FAQ from '@/components/dample-college/FAQ';
import PageFooter from '@/components/dample-college/PageFooter';
import FloatingCTA from '@/components/dample-college/FloatingCTA';

const DAMPLE_VIDEOS = [
  { id: 'ELy69gz6Z68', title: 'What is Practical B.Com? by CEO Sanmit Shah', label: 'Sanmit Shah — Founder & CEO explains Practical B.Com' },
  { id: 'VDNnuV5UH6Q', title: 'Parent Testimonial', label: 'Parent Testimonial — कॉमर्स मध्ये करिअर करायचं असेल तर...' },
  { id: 'yhwcDimW9Bs', title: 'Success Story — Shraddha Koli', label: 'Shraddha Koli — आत्मनिर्भर मी! Student Success Story' },
  { id: 'VdJY6_cU90E', title: 'रिक्षाचालकाची मुलगी झाली आत्मनिर्भर', label: 'रिक्षाचालकाची मुलगी झाली आत्मनिर्भर — Practical B.Com' },
];

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
      <VideoTestimonials
        videos={DAMPLE_VIDEOS}
        heading="What Students & Parents Say"
        subheading="Real stories from students who chose the practical path"
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
