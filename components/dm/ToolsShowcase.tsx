'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AI_TOOL_FILES } from '@/components/skillcamp/constants';

const mid = Math.ceil(AI_TOOL_FILES.length / 2);
const ROW1 = AI_TOOL_FILES.slice(0, mid);
const ROW2 = AI_TOOL_FILES.slice(mid);

function Row({ files, dir }: { files: string[]; dir: 'left' | 'right' }) {
  const doubled = [...files, ...files];
  return (
    <div className="awards-marquee-wrap overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
      }}>
      <div className={`flex gap-3 w-max awards-scroll-${dir}`}>
        {doubled.map((f, i) => (
          <div key={`${f}-${i}`}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex-shrink-0 flex items-center justify-center p-2 transition-all duration-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#F5B400]/50">
            <Image src={`/skillcamp/ai-tools/${f}`} alt="Digital marketing tool covered in the program" width={64} height={64} loading="lazy" className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolsShowcase() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Practical Tool Exposure</span>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-white font-black mt-1 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
          The stack real agencies run.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
          className="text-white/60 text-base sm:text-lg leading-relaxed">
          AI assistants, SEO tools, Google &amp; Social Ads, Analytics &amp; Tag Manager, CMS, Email/CRM,
          dashboards and no-code automation — hands-on, not a slide.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-3">
        <Row files={ROW1} dir="left" />
        <Row files={ROW2} dir="right" />
      </motion.div>
    </section>
  );
}
