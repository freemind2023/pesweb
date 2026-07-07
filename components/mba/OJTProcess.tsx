'use client';
import { motion } from 'framer-motion';
import { Eye, Play, ClipboardList, LineChart, Rocket, Presentation } from 'lucide-react';

const STEPS = [
  { label: 'Observe', icon: Eye, color: '#0B1F5C' },
  { label: 'Execute', icon: Play, color: '#6366F1' },
  { label: 'Record', icon: ClipboardList, color: '#F5B400' },
  { label: 'Analyse', icon: LineChart, color: '#10B981' },
  { label: 'Improve', icon: Rocket, color: '#F97316' },
  { label: 'Present', icon: Presentation, color: '#0B1F5C' },
];

export default function OJTProcess() {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">MBA OJT Process Flow</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">You Don&apos;t Just Learn Management — You Live It</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Our proven OJT flow ensures you don&apos;t just study leadership — you practise it, lead it &amp; create real impact.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-y-8">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 w-28 sm:w-32 text-center group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: `linear-gradient(135deg,${s.color},${s.color}99)` }}>
                  <s.icon size={26} className="text-white" />
                </div>
                <span className="text-[#0B1F5C] font-black text-sm">{s.label}</span>
              </motion.div>
              {i < STEPS.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.05 }}
                  className="text-gray-300 text-2xl mx-1 sm:mx-2 hidden sm:inline-block">→</motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
