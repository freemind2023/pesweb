'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SC, RESERVE_WA } from './constants';

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 text-center overflow-hidden" style={{ background: SC.ink }}>
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 30%, ${SC.orange}33, transparent 60%)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold mb-8"
          style={{ color: SC.mist, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
        >
          Seats are limited. <span style={{ color: SC.orange }}>Basecamp won&apos;t wait.</span>
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          href={RESERVE_WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-base transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10171F]"
          style={{ background: SC.orange, color: SC.mist, boxShadow: `0 0 32px ${SC.orange}55` }}
        >
          Reserve My Seat <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}
