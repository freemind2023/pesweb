'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SC, AI_TOOL_FILES } from './constants';

const mid = Math.ceil(AI_TOOL_FILES.length / 2);
const ROW1 = AI_TOOL_FILES.slice(0, mid);
const ROW2 = AI_TOOL_FILES.slice(mid);

function Row({ files, dir }: { files: string[]; dir: 'left' | 'right' }) {
  const doubled = [...files, ...files];
  return (
    <div
      className="awards-marquee-wrap overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
      }}
    >
      <div className={`flex gap-3 w-max awards-scroll-${dir}`}>
        {doubled.map((f, i) => (
          <div
            key={`${f}-${i}`}
            className="group h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex-shrink-0 flex items-center justify-center p-2 transition-all duration-300 border"
            style={{ background: SC.mist, borderColor: `${SC.accent}33` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 2px ${SC.accent}, 0 8px 24px ${SC.accent}44`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
          >
            <Image
              src={`/skillcamp/ai-tools/${f}`}
              alt="AI tool covered at GenAI Basecamp"
              width={64}
              height={64}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AIToolsShowcase() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: SC.ink }}>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold mb-4"
          style={{ color: SC.mist, fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          One toolkit. <span style={{ color: SC.accent }}>Always growing.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: SC.slate }}
        >
          We&apos;re building a library of 100+ AI tools spanning every field — from HR to marketing to
          tech — and adding more each month. Every camp goes hands-on with a working set from it.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-3">
        <Row files={ROW1} dir="left" />
        <Row files={ROW2} dir="right" />
      </motion.div>
    </section>
  );
}
