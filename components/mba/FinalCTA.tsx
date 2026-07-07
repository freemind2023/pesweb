'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA({ onApply }: { onApply: () => void }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg,#071232 0%,#0B1F5C 55%,#0d2570 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(245,180,0,0.12),transparent 70%)' }} />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-white font-black leading-tight mb-4" style={{ fontSize: 'clamp(2rem,6vw,3.5rem)' }}>
          Transform Your Career with <span className="text-[#F5B400]">Practical MBA</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-white/70 text-base md:text-lg mb-10">
          Real Learning. Real Experience. Real Career Growth.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onApply}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0B1F5C] text-base hover:scale-105 active:scale-95 transition-transform shadow-lg"
            style={{ background: 'linear-gradient(135deg,#F5B400,#FFD43B)', boxShadow: '0 0 24px rgba(245,180,0,0.35)' }}>
            Apply Now <ArrowRight size={18} />
          </button>
          <a href="tel:+919890959990"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base border-2 border-white/25 hover:border-[#F5B400] hover:text-[#F5B400] transition-all">
            <Phone size={18} /> Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
