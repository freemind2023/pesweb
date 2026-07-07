'use client';
import { useEffect, useRef, useCallback } from 'react';
import TickerNav from '@/components/mba/TickerNav';
import Hero from '@/components/mba/Hero';
import GapSection from '@/components/mba/GapSection';
import ModelSection from '@/components/mba/ModelSection';
import ProgramSection from '@/components/mba/ProgramSection';
import JourneySection from '@/components/mba/JourneySection';
import NumbersSection from '@/components/mba/NumbersSection';
import RecognitionSection from '@/components/mba/RecognitionSection';
import WhoCanApply from '@/components/mba/WhoCanApply';
import ApplySection from '@/components/mba/ApplySection';
import FinalCall from '@/components/mba/FinalCall';
import Footer from '@/components/mba/Footer';
import WhatsAppFAB from '@/components/mba/WhatsAppFAB';

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
    <main className="mba-page mba-grain overflow-x-hidden">
      <TickerNav onApply={scrollToForm} />
      <Hero onApply={scrollToForm} />
      <GapSection />
      <ModelSection />
      <ProgramSection />
      <JourneySection />
      <NumbersSection />
      <RecognitionSection />
      <WhoCanApply />
      <ApplySection ref={formRef} />
      <FinalCall onApply={scrollToForm} />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
