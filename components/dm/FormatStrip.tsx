'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, FileStack, Briefcase } from 'lucide-react';

const STATS = [
  { icon: Calendar, label: '6 Months Program' },
  { icon: Clock, label: '168 Live Hours' },
  { icon: FileStack, label: '12 Portfolio Projects' },
  { icon: Briefcase, label: '3-Month Paid Internship' },
];

export default function FormatStrip() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-center gap-2 text-center">
            <s.icon size={18} className="text-[#F5B400] flex-shrink-0" />
            <span className="text-[#0B1F5C] font-bold text-xs sm:text-sm">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
