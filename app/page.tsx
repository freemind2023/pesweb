import HeroSection from '@/components/HeroSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import WhyPES from '@/components/WhyPES';
import CoursesSection from '@/components/CoursesSection';
import StatsCounter from '@/components/StatsCounter';
import EventGallery from '@/components/EventGallery';
import TestimonialVideos from '@/components/TestimonialVideos';
import AssociationsSection from '@/components/AssociationsSection';
import InquiryForm from '@/components/InquiryForm';
import VideoTestimonials from '@/components/VideoTestimonials';
import MainFAQ from '@/components/MainFAQ';

const HOME_VIDEOS = [
  { id: 'ELy69gz6Z68', title: 'What is Practical B.Com? by CEO Sanmit Shah', label: 'Sanmit Shah — Founder & CEO explains Practical B.Com' },
  { id: 'CedUT0IRQQ0', title: 'Opportunities in Dubai for Commerce Graduates', label: 'Dubai Career Opportunities for Commerce Graduates' },
  { id: 'PBi5MT5TO7I', title: 'Testimonial by Mr. Deepak Karandikar, President MCCIA', label: 'Mr. Deepak Karandikar — President, MCCIA' },
  { id: 'VDNnuV5UH6Q', title: 'Parent Testimonial', label: 'Parent Testimonial — Why Practical B.Com is the best choice' },
  { id: 'yhwcDimW9Bs', title: 'Success Story — Shraddha Koli', label: 'Shraddha Koli — आत्मनिर्भर मी! Student Success Story' },
  { id: 'btKD_SOFydQ', title: 'Our success speaks — Swarali Vasekar', label: 'Swarali Vasekar — Our Success Speaks for Us' },
  { id: 'fCsEanchWy8', title: 'Zee 24 Taas Interview — Sanmit Shah', label: 'Zee 24 Taas Interview — Sanmit Shah on BBA, BCom & BBA-IB' },
  { id: 'xvbMCDvBKqE', title: 'Industrialist Jayant Pawar Testimonial', label: 'Renowned Industrialist Jayant Pawar on Practical EduSkills' },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoTestimonials
        videos={HOME_VIDEOS}
        heading="Hear From Our Students & Industry Leaders"
        subheading="Real voices. Real results. 2500+ students trained."
      />
      <MarqueeTicker />
      <WhyPES />
      <CoursesSection />
      <StatsCounter />
      <EventGallery limit={6} showViewAll />
      <TestimonialVideos />
      <AssociationsSection />
      <InquiryForm />
      <MainFAQ />
    </>
  );
}
