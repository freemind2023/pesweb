'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Bot, BarChart2, Settings2, Smartphone, BookOpen, FileText, CreditCard, Landmark } from 'lucide-react';

const PATHS: { title: string; program: string; salary: string; Icon: React.ElementType; color: string; bg: string }[] = [
  { title: 'AI Executive',                   program: 'B.Sc. AI', salary: '₹3–6 LPA',   Icon: Bot,        color: '#6366F1', bg: '#eef0ff' },
  { title: 'Data Analyst',                   program: 'B.Sc. AI', salary: '₹3.5–7 LPA', Icon: BarChart2,  color: '#8B5CF6', bg: '#f5f3ff' },
  { title: 'Business Automation Specialist', program: 'B.Sc. AI', salary: '₹4–8 LPA',   Icon: Settings2,  color: '#10B981', bg: '#ecfdf5' },
  { title: 'Digital Marketing Manager',      program: 'B.Sc. AI', salary: '₹3–6 LPA',   Icon: Smartphone, color: '#F59E0B', bg: '#fffbeb' },
  { title: 'Accounts Executive',             program: 'B.Com',    salary: '₹2.5–5 LPA', Icon: BookOpen,   color: '#0B1F5C', bg: '#eef3ff' },
  { title: 'GST Consultant',                 program: 'B.Com',    salary: '₹3–6 LPA',   Icon: FileText,   color: '#EF4444', bg: '#fef2f2' },
  { title: 'Finance Executive',              program: 'B.Com',    salary: '₹3–5.5 LPA', Icon: CreditCard, color: '#14B8A6', bg: '#f0fdfa' },
  { title: 'CA Article / Tax Analyst',       program: 'B.Com',    salary: '₹2.5–5 LPA', Icon: Landmark,   color: '#F5B400', bg: '#fffbea' },
];

export default function Careers() {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Career Outcomes</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">
            Where Our Graduates Work
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            Real roles. Real companies. Real salaries — starting from Day 1 after graduation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PATHS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: p.bg }}>
                <p.Icon size={22} style={{ color: p.color }} />
              </div>
              <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-2"
                style={{ background: p.bg, color: p.color }}>
                {p.program}
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2 leading-tight">{p.title}</h3>
              <div className="flex items-center gap-1.5" style={{ color: p.color }}>
                <TrendingUp size={13} />
                <span className="font-bold text-sm">{p.salary}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-xs mt-8">
          * Salary ranges are indicative based on industry data. Individual results may vary.
        </motion.p>
      </div>
    </section>
  );
}
