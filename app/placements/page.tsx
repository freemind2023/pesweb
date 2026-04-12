'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import StatsCounter from '@/components/StatsCounter';
import EventGallery from '@/components/EventGallery';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const hiringPartners = [
  'Deloitte', 'KPMG', 'PwC', 'EY', 'Grant Thornton', 'BDO India',
  'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra',
  'Reliance Industries', 'Infosys BPO', 'TCS BPS', 'Wipro',
  'CA Firms (50+ partners)', 'Dubai MNCs', 'Hospitality Chains', 'Startups',
];

export default function PlacementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold font-semibold text-sm uppercase tracking-widest">
            Career Success
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">
            Our Placements Speak for Themselves
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-base md:text-lg">
            2000+ students placed in CA firms, corporates, and international companies over 21+ years
          </motion.p>
        </div>
      </section>

      <StatsCounter />

      {/* Placement highlights */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: '2000+ Students Placed', desc: 'Over two decades of consistent placement success across CA firms, corporates, and international companies.' },
              { icon: '🌍', title: 'Dubai International', desc: 'Top-performing students get opportunities to work in Dubai, opening global career pathways.' },
              { icon: '💰', title: 'OJT Stipend During Study', desc: 'Earn ₹8,000–₹15,000/month during your On-the-Job Training in Years 2 & 3.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-bg-light rounded-2xl border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-navy font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring partners */}
      <section className="py-14 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-serif text-navy text-2xl md:text-3xl font-bold mb-2">Our Hiring Partners</h2>
            <p className="text-text-muted text-sm">50+ industry partners trust our students</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {hiringPartners.map((partner, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="px-4 py-2 bg-white border border-gray-200 text-navy text-sm font-semibold rounded-full shadow-sm hover:border-gold hover:text-gold transition-all">
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <EventGallery limit={6} showViewAll={false} />

      <div className="py-10 bg-white text-center">
        <Link href="/admissions" className="inline-block px-8 py-4 bg-gold text-navy font-bold text-lg rounded-xl pulse-gold hover:bg-gold-light transition-all">
          Start Your Success Journey →
        </Link>
      </div>
    </>
  );
}
