'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import type { Question } from '@/lib/career-mantra/questions';

const OBJECTIVE_CATEGORIES: Question['category'][] = ['numeracy', 'logic'];

export default function StageModal({
  question,
  stageNumber,
  totalStages,
  onComplete,
  onClose,
}: {
  question: Question;
  stageNumber: number;
  totalStages: number;
  onComplete: (optionId: string) => void;
  onClose: () => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const isObjective = OBJECTIVE_CATEGORIES.includes(question.category);
  const bestWeight = Math.max(...question.options.map((o) => o.weight));
  const bestOptionId = question.options.find((o) => o.weight === bestWeight)?.id;
  const selectedOption = question.options.find((o) => o.id === selectedId);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-dark/70 p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="bg-navy px-5 py-4 flex items-center justify-between gap-3 flex-shrink-0">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-widest uppercase">
              Stage {stageNumber} of {totalStages}
            </p>
            <h2 className="text-white font-serif text-lg font-bold mt-0.5">
              {question.stageIcon} {question.stageTitle}
            </h2>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-white/60 hover:text-white p-1">
            <X size={20} />
          </button>
        </div>

        <div className="px-5 py-5 overflow-y-auto">
          <p className="text-navy font-serif text-base sm:text-lg font-semibold leading-snug mb-4">{question.prompt}</p>

          <div className="space-y-2.5">
            {question.options.map((opt) => {
              const isSelected = selectedId === opt.id;
              const isBest = isObjective && opt.id === bestOptionId;
              const showBestHighlight = isObjective && selectedId && isBest;

              let stateClass = 'border-gray-200 hover:border-gold/50';
              if (selectedId) {
                if (showBestHighlight) stateClass = 'border-success bg-success/10';
                else if (isSelected) stateClass = 'border-gold bg-gold/10';
                else stateClass = 'border-gray-200 opacity-50';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={!!selectedId}
                  onClick={() => setSelectedId(opt.id)}
                  className={`w-full text-left px-4 py-3.5 min-h-[44px] rounded-xl border-2 text-sm sm:text-base text-text-dark font-medium transition-colors ${stateClass}`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {selectedOption && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-bg-light border border-gray-200"
              >
                <div className="flex items-start gap-2">
                  <Sparkles size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-text-dark text-sm leading-relaxed">{question.insight}</p>
                </div>
                <p className="text-navy text-xs font-bold mt-2 pl-6">+{selectedOption.weight * 10} Readiness Points</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {selectedId && (
          <div className="px-5 pb-5 pt-2 flex-shrink-0">
            <button
              onClick={() => onComplete(selectedId)}
              className="w-full py-3.5 bg-gold text-navy font-bold text-sm rounded-xl hover:bg-gold-light transition-all"
            >
              Continue →
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
