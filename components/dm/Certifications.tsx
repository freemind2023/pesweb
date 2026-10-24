'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const SAMPLE_CERTS = [
  { file: 'google-shopping-ads.png', alt: 'Google Shopping Ads certification sample' },
  { file: 'google-ads-measurement.png', alt: 'Google Ads Measurement certification sample' },
  { file: 'hubspot-social-media.png', alt: 'HubSpot Social Media certification sample' },
  { file: 'hubspot-inbound.png', alt: 'HubSpot Inbound certification sample' },
  { file: 'hubspot-content-marketing.png', alt: 'HubSpot Content Marketing certification sample' },
  { file: 'hubspot-seo-ii.png', alt: 'HubSpot SEO II certification sample' },
  { file: 'hubspot-email-marketing.png', alt: 'HubSpot Email Marketing certification sample' },
  { file: 'hubspot-digital-advertising.png', alt: 'HubSpot Digital Advertising certification sample' },
  { file: 'meta-facebook-marketing.png', alt: 'Meta Facebook Marketing certification sample' },
  { file: 'meta-social-media-marketing.png', alt: 'Meta Social Media Marketing certification sample' },
  { file: 'meta-digital-marketing-associate.png', alt: 'Meta Digital Marketing Associate certification sample' },
  { file: 'meta-media-buying-professional.png', alt: 'Meta Media Buying Professional certification sample' },
  { file: 'semrush-content-marketing-seo-ai.png', alt: 'Semrush Content Marketing Essentials for SEO & AI Search certification sample' },
  { file: 'semrush-influencer-marketing.png', alt: 'Semrush Influencer Marketing Campaigns certification sample' },
  { file: 'semrush-social-listening.png', alt: 'Semrush Building a Social Listening Program certification sample' },
  { file: 'semrush-marketing-analytics-roi.png', alt: 'Semrush Maximizing ROI through Marketing Analytics certification sample' },
  { file: 'semrush-getting-started.png', alt: 'Getting Started with Semrush certification sample' },
];

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
  const doubled = [...SAMPLE_CERTS, ...SAMPLE_CERTS];
  return (
    <section className="py-14 md:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">After the Program</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Industry Certification Guidance</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            We guide you toward respected, free platform certifications to strengthen your profile.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Sample Certificates</p>
          <div className="awards-marquee-wrap overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)' }}>
            <div className="flex gap-5 w-max awards-scroll-right">
              {doubled.map((c, i) => (
                <div key={`${c.file}-${i}`}
                  className="relative w-64 sm:w-72 flex-shrink-0 rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{ aspectRatio: '4/3' }}>
                  <Image src={`/dm/certificates/${c.file}`} alt={c.alt} fill sizes="288px" loading="lazy" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}
