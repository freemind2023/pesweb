'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Megaphone, Settings2, HeartHandshake, BarChart2, Globe2, Ship } from 'lucide-react';

const PATHS: { title: string; program: string; salary: string; Icon: React.ElementType; color: string; bg: string }[] = [
  { title: 'HR Executive',               program: 'BBA', salary: '₹2.5–5 LPA', Icon: Users,          color: '#0B1F5C', bg: '#eef3ff' },
  { title: 'Marketing Manager',          program: 'BBA', salary: '₹3–6 LPA',   Icon: Megaphone,       color: '#F5B400', bg: '#fffbea' },
  { title: 'Operations Coordinator',     program: 'BBA', salary: '₹3–5.5 LPA', Icon: Settings2,       color: '#10B981', bg: '#ecfdf5' },
  { title: 'CRM Manager',                program: 'BBA', salary: '₹3–6 LPA',   Icon: HeartHandshake,  color: '#EF4444', bg: '#fef2f2' },
  { title: 'Business Analyst',           program: 'BBA', salary: '₹3.5–7 LPA', Icon: BarChart2,       color: '#8B5CF6', bg: '#f5f3ff' },
  { title: 'Import-Export Manager',      program: 'BBA-IB', salary: '₹3.5–7 LPA', Icon: Ship,         color: '#6366F1', bg: '#eef0ff' },
  { title: 'International Sales Exec.',  program: 'BBA-IB', salary: '₹3–6 LPA', Icon: Globe2,         color: '#14B8A6', bg: '#f0fdfa' },
  { title: 'Global Trade Analyst',       program: 'BBA-IB', salary: '₹3.5–7 LPA', Icon: TrendingUp,   color: '#F59E0B', bg: '#fffbeb' },
];

export default function Careers() {
  return (
    <section className="py-8 md:py-12" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Career Outcomes</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Where Our Graduates Work</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            HR, Marketing, Operations, CRM, Analytics, or International Business — choose the role that fits you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PATHS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
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
