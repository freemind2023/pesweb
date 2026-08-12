'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Question } from '@/lib/career-mantra/questions';

export default function QuestionCard({
  question,
  index,
  total,
  onAnswer,
}: {
  question: Question;
  index: number;
  total: number;
  onAnswer: (optionId: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (selected) return;
    setSelected(optionId);
    setTimeout(() => onAnswer(optionId), 350);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -24 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 w-full"
      >
        <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
          Level {index + 1} of {total}
        </p>
        <h3 className="font-serif text-navy text-lg sm:text-xl font-bold mb-5 leading-snug">{question.prompt}</h3>

        <div className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <motion.button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                whileHover={selected ? {} : { scale: 1.01 }}
                whileTap={selected ? {} : { scale: 0.98 }}
                className={`w-full text-left px-4 py-3.5 min-h-[44px] rounded-xl border-2 text-sm sm:text-base transition-colors ${
                  isSelected
                    ? 'border-gold bg-gold/10 text-navy font-semibold'
                    : 'border-gray-200 text-text-dark hover:border-gold/50'
                } ${selected && !isSelected ? 'opacity-50' : ''}`}
                disabled={!!selected}
              >
                {opt.label}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
