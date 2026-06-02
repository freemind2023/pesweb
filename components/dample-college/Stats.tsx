'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Award, Briefcase, Zap, GraduationCap, Building2, FileText, IndianRupee } from 'lucide-react';

const STATS = [
  { value: 2500, suffix: '+',    label: 'Students Trained',  sub: 'Across PES Programs',    Icon: GraduationCap },
  { value: 100,  suffix: '+',    label: 'Hiring Partners',  sub: 'Industry Recruiters',    Icon: Building2 },
  { value: 2,    suffix: ' Yrs', label: 'Apprenticeship Duration',     sub: 'From SY B.Com',          Icon: Briefcase, decimals: 0 },
  { value: 6,    suffix: '+',    label: 'Certifications',   sub: 'Industry Recognized',    Icon: FileText },
  { value: 10,   suffix: 'K/mo', label: 'Max Stipend',      sub: 'Earn While You Learn',   Icon: IndianRupee, prefix: '₹' },
];

const BADGES = [
  { icon: ShieldCheck, label: 'PES Certified',       sub: '21+ Yrs of Excellence' },
  { icon: Award,       label: 'Job Ready Program',   sub: '100% Skill Development' },
  { icon: Briefcase,   label: 'Earn While Learn',    sub: 'Apprenticeship + ₹8K–10K/month' },
  { icon: Zap,         label: 'Live Tool Training',  sub: 'Tally, ZOHO, Odoo & more' },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section className="py-8 md:py-12 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl border border-gray-100 hover:border-[#F5B400]/40 hover:shadow-lg transition-all group"
              style={{ background: 'linear-gradient(135deg,#f8f9ff,#fff)' }}>
              <div className="flex justify-center mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#0B1F5C,#1a3a8f)' }}>
                  <s.Icon size={16} className="text-[#F5B400]" />
                </div>
              </div>
              <div className="font-black text-[#0B1F5C] text-2xl md:text-3xl leading-none">
                {s.prefix || ''}
                {inView && <CountUp end={s.value} duration={2.5} delay={i * 0.1} decimals={s.decimals ?? 0} separator="," />}
                {s.suffix}
              </div>
              <div className="text-[#0B1F5C] font-bold text-xs mt-1">{s.label}</div>
              <div className="text-gray-400 text-[10px]">{s.sub}</div>
            </motion.div>
          ))}
        </div>
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
