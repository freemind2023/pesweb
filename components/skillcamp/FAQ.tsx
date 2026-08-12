'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SC } from './constants';

const FAQS = [
  {
    q: "What's included in the price?",
    a: 'Return travel from Pune, tent stay, all meals including dinner, the camp kit, certificate, and the guided trek.',
  },
  {
    q: 'What should I pack?',
    a: 'Comfortable trekking shoes, a light jacket, a water bottle, any personal medication, and a fully charged phone/laptop for the AI sessions.',
  },
  {
    q: 'Is this safe for an overnight stay?',
    a: 'Yes — a staff-to-student ratio of 1:15, a trained first-aider on site, signed safety waivers, and a supervised lake and trek policy throughout.',
  },
  {
    q: 'Who can join?',
    a: 'Any college student. School students in 11th/12th can join with a parent/guardian consent form.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: SC.mist }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="sc-eyebrow text-xs font-bold uppercase" style={{ color: SC.accent }}>FAQ</span>
          <h2 className="font-bold mt-2" style={{ color: SC.ink, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            Good questions.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="rounded-2xl bg-white border overflow-hidden" style={{ borderColor: `${SC.slate}33` }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2"
                  style={{ ['--tw-ring-color' as string]: SC.accent }}
                >
                  <span className="font-semibold text-sm sm:text-base" style={{ color: SC.ink }}>{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: SC.accent, flexShrink: 0 }}>
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: SC.slate }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
