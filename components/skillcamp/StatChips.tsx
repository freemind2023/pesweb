'use client';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Tent } from 'lucide-react';
import { SC } from './constants';

const STATS = [
  { icon: Sparkles, label: '100+ AI Tools' },
  { icon: Clock, label: '7 Hours Hands-On' },
  { icon: Tent, label: '1 Night, 1 Trek' },
];

export default function StatChips() {
  return (
    <section className="relative -mt-10 sm:-mt-12 z-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center justify-center gap-2.5 rounded-2xl px-5 py-4 border"
            style={{ background: `${SC.ink}F2`, borderColor: `${SC.accent}44`, boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
          >
            <s.icon size={20} style={{ color: SC.accent }} />
            <span className="font-bold text-sm sm:text-base" style={{ color: SC.mist }}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
