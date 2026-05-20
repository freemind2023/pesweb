'use client';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative z-[70] flex items-center justify-center gap-2 px-4 py-2 text-[#0B1F5C] text-xs sm:text-sm font-bold text-center"
      style={{ background: 'linear-gradient(90deg,#F5B400,#FFD43B,#F5B400)', backgroundSize: '200% 100%' }}
    >
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        🎓
      </motion.span>
      <span className="devanagari">मर्यादित जागा —</span>
      <span>Limited Admissions Open 2025–26 | Apply Before Seats Fill!</span>
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, delay: 0.4 }}
      >
        🔥
      </motion.span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100"
        aria-label="Close"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}
