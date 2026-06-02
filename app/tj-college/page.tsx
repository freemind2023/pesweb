'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/modern-college/UrgencyBanner';
import Hero from '@/components/tj-college/Hero';
import VideoTestimonials from '@/components/VideoTestimonials';
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

const TJ_VIDEOS = [
  { id: 'ELy69gz6Z68', title: 'What is Practical B.Com? by CEO Sanmit Shah', label: 'Sanmit Shah — Founder & CEO explains Practical B.Com' },
  { id: 'xvbMCDvBKqE', title: 'Testimonial by Industrialist Jayant Pawar', label: 'Renowned Industrialist Jayant Pawar on Practical EduSkills' },
  { id: 'bDXEKw1eT38', title: 'Testimonial by Dr. Deepak Shikarpur, AICTE', label: 'Dr. Deepak Shikarpur — National IT Board, AICTE' },
  { id: 'btKD_SOFydQ', title: 'Our success speaks — Swarali Vasekar', label: 'Swarali Vasekar — Our Success Speaks for Us' },
];

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
      <VideoTestimonials
        videos={TJ_VIDEOS}
        heading="What Students & Industry Leaders Say"
        subheading="Watch real experiences — not just words on a page"
      />
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
