'use client';
import { motion } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';
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
      <AlertCircle size={14} className="flex-shrink-0" />
      <span className="devanagari">मर्यादित जागा —</span>
      <span>Limited Admissions Open 2026–27 | Apply Before Seats Fill!</span>
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
