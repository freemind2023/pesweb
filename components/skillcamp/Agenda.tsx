'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SC } from './constants';

const DAY1 = [
  { time: 'Morning', title: 'Departure from Pune + arrival at Pawna Lake' },
  { time: 'Midday', title: 'GenAI Foundations + Hands-on AI Lab' },
  { time: 'Afternoon', title: 'Startup Ideation Sprint + Mentor Connect' },
  { time: 'Evening', title: 'Pitch Showcase, dinner, bonfire, tents' },
];

const DAY2 = [
  { time: 'Morning', title: 'Breakfast + guided trek' },
  { time: 'Midday', title: 'Return to camp, lunch, pack-up' },
  { time: 'Afternoon', title: 'Bus back to Pune, certificates handed out' },
];

export default function Agenda() {
  const [day, setDay] = useState<1 | 2>(1);
  const items = day === 1 ? DAY1 : DAY2;

  return (
    <section id="agenda" className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: SC.mist }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="sc-eyebrow text-xs font-bold uppercase" style={{ color: SC.accent }}>The Agenda</span>
          <h2 className="font-bold mt-2" style={{ color: SC.ink, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            Two days. Zero downtime.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-12 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/skillcamp/gallery/feature-1.jpg"
              alt="Students working together on laptops during the Hands-on AI Lab"
              fill
              sizes="(max-width: 640px) 45vw, 260px"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mt-6"
          >
            <Image
              src="/skillcamp/gallery/feature-2.jpg"
              alt="Faculty leading a packed GenAI Foundations session at the lakeside camp"
              fill
              sizes="(max-width: 640px) 45vw, 260px"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {([1, 2] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className="px-6 py-2.5 rounded-full font-bold text-sm transition-all focus:outline-none focus-visible:ring-2"
              style={
                day === d
                  ? { background: SC.orange, color: SC.mist, boxShadow: `0 0 18px ${SC.orange}44` }
                  : { background: '#ffffff', color: SC.ink, border: `1px solid ${SC.slate}44` }
              }
            >
              Day {d} — {d === 1 ? 'Skill Camp + Stay' : 'Trek + Return'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative pl-8"
          >
            <div className="absolute left-[9px] top-2 bottom-2 w-0.5" style={{ background: `${SC.accent}44` }} />
            {items.map((it, i) => (
              <div key={it.time} className={`relative ${i !== items.length - 1 ? 'pb-9' : ''}`}>
                <div
                  className="absolute -left-8 top-1 h-5 w-5 rounded-full flex items-center justify-center"
                  style={{ background: SC.ink }}
                >
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: SC.accent }} />
                </div>
                <span className="sc-eyebrow block text-xs font-bold uppercase mb-1" style={{ color: SC.orange, letterSpacing: '0.1em' }}>
                  {it.time}
                </span>
                <p className="font-semibold text-base sm:text-lg" style={{ color: SC.ink }}>{it.title}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
