'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Award, Briefcase, Zap, GraduationCap, Building2, FileText, IndianRupee } from 'lucide-react';

const STATS: { value: number; suffix: string; label: string; sub: string; Icon: React.ElementType; decimals?: number; prefix?: string; label2?: string }[] = [
  { value: 2500, suffix: '+',    label: 'Students Trained',  sub: 'Across Programs',       Icon: GraduationCap },
  { value: 100,  suffix: '+',    label: 'Hiring Recruiters', sub: 'Industry Partners',      Icon: Building2 },
  { value: 1.5,  suffix: ' Yrs', label: 'Apprenticeship Duration',      sub: 'Real Work Experience',   Icon: Briefcase, decimals: 1 },
  { value: 12,   suffix: '+',    label: 'Certifications',     sub: 'Industry Recognized',    Icon: FileText },
  { value: 12,   suffix: 'K/mo', label: 'Max Stipend',        prefix: '₹', label2: '₹8K–₹12K', sub: 'Earn While You Learn', Icon: IndianRupee },
];

const BADGES = [
  { icon: ShieldCheck, label: 'SPPU Affiliated', sub: 'Govt. University Degree' },
  { icon: Award, label: 'ISO Certified', sub: 'Quality Education' },
  { icon: Briefcase, label: 'Earn While Learn', sub: 'Apprenticeship + Stipend' },
  { icon: Zap, label: 'AI Ready Curriculum', sub: 'Future-Proof Skills' },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section className="py-8 md:py-12 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl border border-gray-100 hover:border-[#F5B400]/40 hover:shadow-lg transition-all group"
              style={{ background: 'linear-gradient(135deg,#f8f9ff,#fff)' }}>
              <div className="flex justify-center mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0B1F5C,#1a3a8f)' }}>
                  <s.Icon size={16} className="text-[#F5B400]" />
                </div>
              </div>
              <div className="font-black text-[#0B1F5C] text-2xl md:text-3xl leading-none">
                {s.prefix || ''}
                {inView && (
                  <CountUp end={s.value} duration={2.5} delay={i * 0.1}
                    decimals={s.decimals || 0} separator="," />
                )}
                {s.suffix}
              </div>
              <div className="text-[#0B1F5C] font-bold text-xs mt-1">{s.label}</div>
              <div className="text-gray-400 text-[10px]">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BADGES.map((b, i) => (
            <motion.div key={b.label}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-2xl border-2 border-[#0B1F5C]/10 hover:border-[#F5B400] transition-all group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: 'linear-gradient(135deg,#0B1F5C,#1a3a8f)' }}>
                <b.icon size={18} className="text-[#F5B400]" />
              </div>
              <div>
                <div className="text-[#0B1F5C] font-bold text-sm">{b.label}</div>
                <div className="text-gray-400 text-[10px]">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
