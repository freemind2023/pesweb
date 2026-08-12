'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SC } from './constants';

export default function FeatureBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative h-[42vh] sm:h-[60vh] min-h-[280px]">
          <Image
            src="/skillcamp/gallery/feature-1.jpg"
            alt="Students working together on laptops during the Hands-on AI Lab"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${SC.ink}33 0%, ${SC.ink}CC 100%)` }} />
        </div>
        <div className="relative h-[42vh] sm:h-[60vh] min-h-[280px]">
          <Image
            src="/skillcamp/gallery/feature-2.jpg"
            alt="Faculty leading a packed GenAI Foundations session at the lakeside camp"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${SC.ink}33 0%, ${SC.ink}CC 100%)` }} />
        </div>
      </div>

      {/* Overlaid text, centered across both halves */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6" style={{ background: `${SC.ink}22` }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sc-eyebrow text-xs font-bold uppercase mb-3"
          style={{ color: SC.yellow, letterSpacing: '0.14em' }}
        >
          No slides-only sessions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-bold max-w-2xl"
          style={{ color: SC.mist, fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', lineHeight: 1.1, textShadow: `0 2px 24px ${SC.ink}` }}
        >
          Hands-on from <span style={{ color: SC.orange }}>hour one.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="max-w-md mt-4 text-sm sm:text-base"
          style={{ color: SC.mist, textShadow: `0 2px 12px ${SC.ink}` }}
        >
          Every session puts an AI tool in your hands — not on a slide.
        </motion.p>
      </div>
    </section>
  );
}
