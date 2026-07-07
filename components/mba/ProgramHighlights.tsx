'use client';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Award, Layers, Target } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Briefcase, color: '#0B1F5C', bg: '#eef3ff', title: '18 Months OJT', desc: 'Real industry exposure with dedicated stipend support, embedded directly into your two-year program.' },
  { icon: TrendingUp, color: '#F5B400', bg: '#fffbea', title: 'Executive Career Path', desc: 'Step into mid & senior management roles faster with a structured, corporate-first learning track.' },
  { icon: Users, color: '#6366F1', bg: '#eef0ff', title: 'Leadership Mentorship', desc: 'Learn directly from C-level leaders and industry veterans throughout your journey.' },
  { icon: Award, color: '#10B981', bg: '#ecfdf5', title: 'Industry Certifications', desc: 'Boost your profile with globally recognized certifications aligned to real corporate roles.' },
  { icon: Layers, color: '#0B1F5C', bg: '#eef3ff', title: 'Multi-Domain Exposure', desc: 'Work across HR, Marketing, Operations, CRM, and Analytics to find where you lead best.' },
  { icon: Target, color: '#F5B400', bg: '#fffbea', title: 'Assured Placement Path', desc: 'Get access to premium corporate opportunities built from your OJT performance and portfolio.' },
];

export default function ProgramHighlights() {
  return (
    <section id="why-mba" className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Why Choose Practical MBA?</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Program Highlights</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            A future-ready MBA that blends advanced management learning with real corporate experience &amp; leadership development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: b.bg }}>
                <b.icon size={22} style={{ color: b.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
