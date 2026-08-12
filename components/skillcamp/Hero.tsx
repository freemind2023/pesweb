'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SC, RESERVE_WA, AI_TOOL_FILES } from './constants';

const DRIFT = AI_TOOL_FILES.slice(0, 24);

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col overflow-hidden" style={{ background: SC.ink }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/skillcamp/gallery/hero-bg.jpg"
          alt="GenAI Basecamp students at the Pawna Lake trek with the SkillCamp banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${SC.ink}66 0%, ${SC.ink}99 45%, ${SC.ink}E6 100%)` }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(60% 55% at 50% 45%, ${SC.ink}CC 0%, transparent 100%)` }} />
      </div>

      {/* Drifting AI-tool collage — framing top & bottom edges only, well clear of the headline */}
      <div className="absolute top-20 sm:top-24 left-0 right-0 opacity-[0.16] pointer-events-none" aria-hidden="true">
        <div className="awards-marquee-wrap overflow-hidden">
          <div className="flex gap-3 w-max awards-scroll-left">
            {[...DRIFT, ...DRIFT].map((f, i) => (
              <div key={`d1-${i}`} className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex-shrink-0" style={{ background: SC.accent, filter: 'saturate(0.5)' }}>
                <Image src={`/skillcamp/ai-tools/${f}`} alt="" width={48} height={48} className="h-full w-full object-contain rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 opacity-[0.16] pointer-events-none" aria-hidden="true">
        <div className="awards-marquee-wrap overflow-hidden">
          <div className="flex gap-3 w-max awards-scroll-right">
            {[...DRIFT.slice().reverse(), ...DRIFT.slice().reverse()].map((f, i) => (
              <div key={`d2-${i}`} className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex-shrink-0" style={{ background: SC.accent, filter: 'saturate(0.5)' }}>
                <Image src={`/skillcamp/ai-tools/${f}`} alt="" width={48} height={48} className="h-full w-full object-contain rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 bg-white rounded-2xl px-5 py-3 shadow-xl inline-block"
        >
          <Image src="/skillcamp/brand/skillcamp-lockup.png" alt="SkillCamp by Practical EduSkills" width={310} height={175} priority className="h-12 sm:h-14 w-auto" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sc-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 border"
          style={{ color: SC.yellow, borderColor: `${SC.yellow}55`, background: `${SC.yellow}14`, letterSpacing: '0.14em' }}
        >
          2 Days · 1 Night · Pawna Lake
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold leading-[1.05] max-w-4xl mb-5"
          style={{ color: SC.mist, fontSize: 'clamp(2.25rem, 6vw, 5.5rem)', letterSpacing: '-0.02em', textShadow: `0 4px 32px ${SC.ink}` }}
        >
          Learn AI. Pitch a startup.
          <br />
          <span style={{ color: SC.orange }}>Sleep under the stars.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-base sm:text-lg leading-relaxed mb-9"
          style={{ color: SC.mist, textShadow: `0 2px 16px ${SC.ink}` }}
        >
          A 2-day AI + startup camp with 3 expert faculty, a real mentor, 100+ AI tools, and a lakeside
          trek — built for students who want more than a certificate.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          href={RESERVE_WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1530]"
          style={{ background: SC.orange, color: SC.mist, boxShadow: `0 0 32px ${SC.orange}55` }}
        >
          Reserve My Seat <ArrowRight size={18} />
        </motion.a>
      </div>

      <motion.div
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1"
        style={{ color: `${SC.mist}55` }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
