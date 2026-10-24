'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const PHASES = [
  {
    phase: 'Phase 1', title: 'Foundation & Creative',
    topics: ['Digital Marketing Foundations & AI Shift', 'Marketing Strategy & Prompt Systems', 'AI-Assisted Content & Copywriting', 'Visual Content & Short-Form Video'],
  },
  {
    phase: 'Phase 2', title: 'Traffic & Growth',
    topics: ['SEO Foundations & Keyword Strategy', 'Technical SEO, Local SEO & AI Search', 'Search Advertising & Performance Marketing', 'Paid Social & Creative Testing', 'Social Media Management & Community'],
  },
  {
    phase: 'Phase 3', title: 'Convert, Automate & Measure',
    topics: ['Landing Pages, CRO & Lead Generation', 'Email, CRM & Lifecycle Marketing', 'Marketing Automation & WhatsApp/Workflow Logic', 'Analytics, Tracking & Dashboarding', 'Reporting, Budgeting & Optimisation'],
  },
  {
    phase: 'Phase 4', title: 'Capstone & Career',
    topics: ['Agency Simulation & Capstone Strategy', 'Capstone Execution & Optimisation', 'Portfolio, Presentation & Career Readiness'],
  },
  {
    phase: 'Phase 5', title: 'On-the-Job Training (Paid Internship)',
    topics: ['3 months applying everything you’ve learned on real client campaigns', 'Live responsibilities under mentor guidance', 'Graduate with an Internship Experience Certificate'],
  },
];

export default function Curriculum() {
  const [open, setOpen] = useState(0);

  return (
    <section id="curriculum" className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">The Curriculum</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Four Phases, One Capstone</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3">From marketing foundations to capstone and career readiness.</p>
        </motion.div>

        <div className="space-y-3">
          {PHASES.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.title} className="rounded-2xl bg-white border border-gray-100 overflow-hidden">
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F5C]/30">
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#F5B400]">{p.phase}</span>
                    <span className="font-black text-[#0B1F5C] text-sm sm:text-base">{p.title}</span>
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[#0B1F5C] flex-shrink-0">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }} className="overflow-hidden">
                      <ul className="px-5 pb-4 space-y-2">
                        {p.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#F5B400' }} />
                            {t}
                          </li>
                        ))}
                      </ul>
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
