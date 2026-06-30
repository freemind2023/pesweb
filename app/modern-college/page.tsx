'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/modern-college/UrgencyBanner';
import Hero from '@/components/modern-college/Hero';
import VideoTestimonials from '@/components/VideoTestimonials';
import SPPURecognition from '@/components/modern-college/SPPURecognition';
import Stats from '@/components/modern-college/Stats';
import Programs from '@/components/modern-college/Programs';
import Timeline from '@/components/modern-college/Timeline';
import WhyUs from '@/components/modern-college/WhyUs';
import Careers from '@/components/modern-college/Careers';
import TestimonialVideos from '@/components/TestimonialVideos';
import AdmissionForm from '@/components/modern-college/AdmissionForm';
import FAQ from '@/components/modern-college/FAQ';
import PageFooter from '@/components/modern-college/PageFooter';
import FloatingCTA from '@/components/modern-college/FloatingCTA';
import AwardsSection from '@/components/AwardsSection';

const MODERN_VIDEOS = [
  { id: 'ELy69gz6Z68', title: 'What is Practical B.Com? by CEO Sanmit Shah', label: 'Sanmit Shah — Founder & CEO explains Practical B.Com' },
  { id: 'bDXEKw1eT38', title: 'Testimonial by Dr. Deepak Shikarpur, AICTE', label: 'Dr. Deepak Shikarpur — National IT Board, AICTE' },
  { id: 'PBi5MT5TO7I', title: 'Testimonial by Mr. Deepak Karandikar, President MCCIA', label: 'Mr. Deepak Karandikar — President, MCCIA' },
  { id: 'VDNnuV5UH6Q', title: 'Parent Testimonial', label: 'Parent Testimonial — Why Practical B.Com is the best choice' },
];

export default function ModernCollegePage() {
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
        videos={MODERN_VIDEOS}
        heading="What Students & Industry Leaders Say"
        subheading="Watch real experiences — not just words on a page"
      />
      <SPPURecognition />
      <Stats />
      <Programs onApply={scrollToForm} />
      <Timeline />
      <WhyUs />
      <Careers />
      <AwardsSection />
      <TestimonialVideos />
      <AdmissionForm ref={formRef} />
      <FAQ />
      <PageFooter />
      <FloatingCTA onApply={scrollToForm} />
    </main>
  );
}
