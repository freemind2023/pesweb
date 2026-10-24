'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: 'What does the ₹70,000 investment include?', a: 'The full 6-month program: 3 months of live lectures (168 hours), 3 months of paid on-the-job training, your 12 portfolio projects, LMS access, mentor feedback, and career/placement support. Premium third-party tool subscriptions, where required, are additional.' },
  { q: 'Will I really get paid during the internship?', a: 'Yes — the last 3 months are a paid internship where you work on real client campaigns and agency-style briefs under mentor guidance, finishing with an Internship Experience Certificate.' },
  { q: 'Do I need a marketing background to join?', a: 'No. The program is open to students & fresh graduates, career switchers, working professionals, and entrepreneurs or small business teams.' },
  { q: 'How much of this is actually AI?', a: 'AI runs across the whole workflow — research, creation, analysis and automation — not a single "AI week". But the program is marketing-first: you use AI with judgement, you don’t outsource it.' },
  { q: 'What certificates do I get?', a: 'A Practical EduSkills program certificate, plus guidance toward respected free platform certifications (Google Ads, Analytics, SEO, Social Media and more) issued separately by their providers.' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">FAQ</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Good Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: '#f8f9ff' }}>
                <button onClick={() => setOpenIdx(isOpen ? null : i)} aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F5C]/30">
                  <span className="font-semibold text-sm sm:text-base text-[#0B1F5C]">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[#0B1F5C] flex-shrink-0">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-gray-500">{f.a}</p>
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
