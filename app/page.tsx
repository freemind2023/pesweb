import HeroSection from '@/components/HeroSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import WhyPES from '@/components/WhyPES';
import CoursesSection from '@/components/CoursesSection';
import StatsCounter from '@/components/StatsCounter';
import EventGallery from '@/components/EventGallery';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AssociationsSection from '@/components/AssociationsSection';
import InquiryForm from '@/components/InquiryForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <WhyPES />
      <CoursesSection />
      <StatsCounter />
      <EventGallery limit={6} showViewAll />
      <TestimonialCarousel />
      <AssociationsSection />
      <InquiryForm />
    </>
  );
}
