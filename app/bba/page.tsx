'use client';
import { useEffect, useRef, useCallback } from 'react';
import UrgencyBanner from '@/components/bba/UrgencyBanner';
import Hero from '@/components/bba/Hero';
import VideoTestimonials from '@/components/VideoTestimonials';
import Stats from '@/components/bba/Stats';
import Tracks from '@/components/bba/Tracks';
import Curriculum from '@/components/bba/Curriculum';
import ProgramBenefits from '@/components/bba/ProgramBenefits';
import LearnBeyond from '@/components/bba/LearnBeyond';
import Timeline from '@/components/bba/Timeline';
import Achievements from '@/components/bba/Achievements';
import Careers from '@/components/bba/Careers';
import TestimonialVideos from '@/components/TestimonialVideos';
import AdmissionForm from '@/components/bba/AdmissionForm';
import FAQ from '@/components/bba/FAQ';
import PageFooter from '@/components/bba/PageFooter';
import FloatingCTA from '@/components/bba/FloatingCTA';

const BBA_VIDEOS = [
  { id: '8Je_bI8HvQY', title: 'Practical BBA — Course Overview (English)', label: 'Practical BBA · Course Overview · English' },
  { id: 'UAhzT6s-MTk', title: 'Practical BBA — Course Overview (Marathi)', label: 'Practical BBA · Course Overview · Marathi' },
  { id: 'OnOJaMk28qQ', title: 'Practical BBA — Ready for Business World Challenges?', label: 'Practical BBA · Industry Readiness' },
  { id: 'Zbp1Uesl5bA', title: 'Are You Prepared for International Business? — BBA-IB', label: 'Practical BBA-IB · International Business · English' },
  { id: 'vAegfAJtUMc', title: 'BBA-IB — International Business Program (Marathi)', label: 'Practical BBA-IB · Marathi Version' },
  { id: 'yP9l4jxiUlw', title: 'Practical BBA-IB — Transforming India (Marathi)', label: 'Practical BBA-IB · Global Ready · Marathi' },
  { id: 'ytaPuhCjN_Q', title: 'Is Your BBA-IB Equipping You for Global Business?', label: 'Practical BBA-IB · Global Readiness' },
  { id: 'fCsEanchWy8', title: 'Zee 24 Taas Interview — PES BBA-IB, BBA, BCom', label: 'TV Interview · Sanmit Shah · Zee24Taas' },
];

export default function BBAPage() {
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
        videos={BBA_VIDEOS}
        heading="Hear From Students, Faculty & Industry Leaders"
        subheading="Watch real stories — Practical BBA & BBA-IB, in English and Marathi"
      />
      <Stats />
      <Tracks onApply={scrollToForm} />
      <Curriculum />
      <ProgramBenefits />
      <LearnBeyond />
      <Timeline />
      <Achievements />
      <Careers />
      <TestimonialVideos />
      <AdmissionForm ref={formRef} />
      <FAQ />
      <PageFooter />
      <FloatingCTA onApply={scrollToForm} />
    </main>
  );
}
