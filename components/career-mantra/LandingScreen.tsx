'use client';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Trophy } from 'lucide-react';

export default function LandingScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-[100dvh] navy-gradient relative overflow-hidden flex items-center justify-center px-4 pt-24 pb-16 sm:pt-28">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #C9A84C 0%, transparent 45%), radial-gradient(circle at 80% 70%, #C9A84C 0%, transparent 45%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold flex items-center justify-center"
        >
          <Compass className="text-navy" size={30} />
        </motion.div>

        <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Mission: Career Mantra</p>
        <h1 className="font-serif text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          What’s Your Commerce Readiness Score?
        </h1>
        <p className="text-white/70 text-sm sm:text-base mb-8">
          A 2-minute gamified mission for 12th students. Answer 10 quick challenges, level up on the map, and get an
          instant personalized report on your commerce career readiness.
        </p>

        <div className="flex justify-center gap-6 mb-8 text-white/80 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Sparkles size={16} className="text-gold" /> 10 quick levels
          </div>
          <div className="flex items-center gap-1.5">
            <Trophy size={16} className="text-gold" /> Instant report
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full sm:w-auto px-10 py-4 bg-gold text-navy font-bold text-base rounded-xl hover:bg-gold-light transition-all pulse-gold"
        >
          Start the Mission →
        </motion.button>
        <p className="text-white/40 text-xs mt-4">Takes less than 2 minutes. No right or wrong answers.</p>
      </motion.div>
    </div>
  );
}
