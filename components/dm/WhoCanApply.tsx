'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Repeat, Briefcase, Store } from 'lucide-react';

const WHO = [
  { icon: GraduationCap, color: '#0B1F5C', bg: '#eef3ff', title: 'Students & Fresh Graduates', desc: 'Build job-ready skills and a portfolio before you graduate.' },
  { icon: Repeat, color: '#6366F1', bg: '#eef0ff', title: 'Career Switchers', desc: 'Move into digital marketing with real evidence, not just a certificate.' },
  { icon: Briefcase, color: '#F5B400', bg: '#fffbea', title: 'Working Professionals', desc: 'Upgrade your skillset with AI-native marketing practice.' },
  { icon: Store, color: '#10B981', bg: '#ecfdf5', title: 'Entrepreneurs & Small Business Teams', desc: 'Run your own marketing with agency-grade tools and process.' },
];

export default function WhoCanApply() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Who Should Join?</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Open to Every Background</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHO.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 border border-gray-100 text-center hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: s.bg }}>
                <s.icon size={26} style={{ color: s.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
