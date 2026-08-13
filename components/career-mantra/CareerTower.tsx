'use client';
import { motion } from 'framer-motion';
import { questions } from '@/lib/career-mantra/questions';

export default function CareerTower({ completedCount }: { completedCount: number }) {
  const total = questions.length;
  const floors = Array.from({ length: total }, (_, i) => total - i); // top floor first

  return (
    <div className="hidden sm:flex flex-col items-center justify-end gap-3 px-4 py-6">
      <p className="text-gold text-[10px] font-bold tracking-widest uppercase text-center">Your Career Tower</p>

      <div className="relative w-24 flex flex-col-reverse gap-1.5 p-1.5 rounded-t-lg border border-gold/30 bg-gradient-to-b from-navy-dark to-navy" style={{ height: 320 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: completedCount === total ? 1 : 0 }}
          className="absolute -top-7 left-1/2 -translate-x-1/2 text-2xl"
        >
          🎓
        </motion.div>

        {floors.map((floorNum) => {
          const lit = floorNum <= completedCount;
          return (
            <motion.div
              key={floorNum}
              animate={{ backgroundColor: lit ? 'rgba(201,168,76,0.85)' : 'rgba(255,255,255,0.04)' }}
              transition={{ duration: 0.4 }}
              className="flex-1 rounded-sm flex items-center justify-evenly"
            >
              <span className={`w-1.5 h-1.5 rounded-sm ${lit ? 'bg-navy/40' : 'bg-white/10'}`} />
              <span className={`w-1.5 h-1.5 rounded-sm ${lit ? 'bg-navy/40' : 'bg-white/10'}`} />
              <span className={`w-1.5 h-1.5 rounded-sm ${lit ? 'bg-navy/40' : 'bg-white/10'}`} />
            </motion.div>
          );
        })}
      </div>
      <div className="w-32 h-3.5 bg-navy-dark rounded-b-md -mt-3" />

      <p className="text-text-muted text-xs font-mono text-center">
        <b className="text-gold">{completedCount}</b> of {total} floors built
      </p>
    </div>
  );
}
