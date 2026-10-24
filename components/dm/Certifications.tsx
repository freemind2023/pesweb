'use client';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const GOOGLE_CERTS = [
  'Google Ads Search', 'Google Analytics', 'Google Ads Display', 'Google Shopping Ads', 'Google Ads Video', 'Google Ads Measurement',
];

const INDUSTRY_CERTS = [
  'Digital Marketing Certificate', 'Digital Advertising', 'Email Marketing', 'SEO Certificate', 'Content Marketing', 'Social Media',
  'Inbound Certificate', 'WhatsApp Marketing Certificate', 'Facebook Marketing Certificate', 'Digital Marketing Associate Certificate',
  'Social Media Marketing Certificate', 'Media Buying Professional Certificate', 'Content Marketing Essentials for SEO & AI Search',
  'Influencer Marketing Campaigns for Beginners', 'Building a Social Listening Program', 'Getting Started with Semrush for Agencies',
  'Maximizing ROI through Marketing Analytics',
];

function Pills({ items, color, bg }: { items: string[]; color: string; bg: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {items.map((c) => (
        <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold" style={{ color, background: bg }}>
          <Award size={11} /> {c}
        </span>
      ))}
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">After the Program</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Industry Certification Guidance</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            We guide you toward respected, free platform certifications to strengthen your profile.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Google Certifications</p>
          <Pills items={GOOGLE_CERTS} color="#0B1F5C" bg="#eef3ff" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Platform & Industry Certifications</p>
          <Pills items={INDUSTRY_CERTS} color="#92400e" bg="#fffbea" />
        </motion.div>

        <p className="text-center text-gray-400 text-[11px] mt-8 max-w-xl mx-auto">
          Platform certifications are issued by the respective providers and are separate from Practical EduSkills certificates.
        </p>
      </div>
    </section>
  );
}
