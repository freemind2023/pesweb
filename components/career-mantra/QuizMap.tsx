'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin } from 'lucide-react';
import { questions } from '@/lib/career-mantra/questions';
import QuestionCard from './QuestionCard';

export default function QuizMap({
  currentIndex,
  onAnswer,
}: {
  currentIndex: number;
  onAnswer: (optionId: string) => void;
}) {
  const total = questions.length;
  const progressFraction = total > 1 ? currentIndex / (total - 1) : 0;
  const currentQuestion = questions[currentIndex];
  const trackRef = useRef<HTMLDivElement>(null);
  const activeNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    activeNodeRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [currentIndex]);

  return (
    <div className="min-h-[100dvh] bg-bg-light px-4 pt-24 pb-8 sm:pt-28 sm:pb-12">
      <div className="max-w-2xl mx-auto">
        {/* Horizontal progress map — scrollable on narrow viewports */}
        <div ref={trackRef} className="relative mb-6 overflow-x-auto scrollbar-hide">
          <div className="relative pt-2 pb-1 min-w-max px-2">
            <div className="absolute left-2 right-2 top-[19px] h-1 bg-gray-200 rounded-full overflow-hidden" style={{ width: `calc(100% - 16px)` }}>
              <motion.div
                className="h-full bg-gold origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progressFraction }}
                transition={{ type: 'spring', stiffness: 90, damping: 18 }}
              />
            </div>
            <div className="relative flex gap-5 sm:gap-8">
              {questions.map((q, i) => (
                <div key={q.id} ref={i === currentIndex ? activeNodeRef : undefined}>
                  <MapNode state={nodeState(i, currentIndex)} label={`${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-navy/70 text-sm font-medium mb-4">
          {currentIndex + 1} of {total} — keep going, you’re doing great!
        </p>

        <QuestionCard key={currentQuestion.id} question={currentQuestion} index={currentIndex} total={total} onAnswer={onAnswer} />
      </div>
    </div>
  );
}

function nodeState(i: number, currentIndex: number): 'done' | 'current' | 'locked' {
  if (i < currentIndex) return 'done';
  if (i === currentIndex) return 'current';
  return 'locked';
}

function MapNode({ state, label }: { state: 'done' | 'current' | 'locked'; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <motion.div
        animate={state === 'current' ? { scale: [1, 1.12, 1] } : { scale: 1 }}
        transition={state === 'current' ? { duration: 1.4, repeat: Infinity } : {}}
        className={`relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
          state === 'done'
            ? 'bg-gold border-gold'
            : state === 'current'
            ? 'bg-navy border-gold ring-4 ring-gold/30'
            : 'bg-white border-gray-300'
        }`}
      >
        {state === 'done' ? (
          <Check size={15} className="text-navy" />
        ) : state === 'current' ? (
          <MapPin size={14} className="text-gold" />
        ) : (
          <span className="text-gray-400 text-[10px] font-bold">{label}</span>
        )}
      </motion.div>
    </div>
  );
}
