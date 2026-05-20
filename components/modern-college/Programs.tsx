'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const WA = 'https://wa.me/917972401596?text=Hi%2C+I+want+to+know+about+AEDP+admissions+at+Modern+College+Ganeshkhind';

const PROGRAMS = [
  {
    title: 'B.Sc. AI & Business Automation',
    short: 'AEDP – B.Sc.',
    badge: '3 Years · SPPU',
    image: '/modern-college/bsc-ai.png',
    color: '#6366F1',
    light: '#eef0ff',
    subjects: ['Python & Programming', 'Artificial Intelligence', 'ML & Data Science', 'Cloud Platforms', 'Claude & Generative AI', 'Advanced Excel & Analytics', 'Business Automation Tools', 'Digital Marketing Automation'],
    outcome: 'AI Executive · Data Analyst · Automation Specialist · Business Analyst',
  },
  {
    title: 'B.Com Accounting & Business Practices',
    short: 'AEDP – B.Com',
    badge: '3 Years · SPPU',
    image: '/modern-college/bcom-aedp.png',
    color: '#0B1F5C',
    light: '#eef3ff',
    subjects: ['Financial Accounting', 'GST & Indirect Tax', 'Tally ERP & Prime', 'Direct Tax & Taxation', 'Banking & Finance', 'AI Accounting Tools', 'Corporate Law Basics', 'Business Communication'],
    outcome: 'Accounts Executive · GST Consultant · Finance Executive · CA Article',
  },
];

export default function Programs({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Our AEDP Programs</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">
            Choose Your Career Path
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            SPPU-affiliated programs designed with industry input — combining degree education with real skills and OJT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROGRAMS.map((p, i) => (
            <motion.div key={p.short}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-gray-100">
              {/* Header image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom,${p.color}99,${p.color}ee)` }} />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 w-fit"
                    style={{ background: '#F5B400', color: '#0B1F5C' }}>{p.badge}</span>
                  <h3 className="text-white font-black text-lg leading-tight">{p.title}</h3>
                </div>
              </div>

              {/* Subjects */}
              <div className="p-6">
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-3">Subjects & Skills</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                  {p.subjects.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle size={13} style={{ color: p.color, flexShrink: 0 }} />
                      <span className="text-sm text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl mb-5 text-xs font-medium" style={{ background: p.light }}>
                  <span className="text-gray-500 font-semibold">Career Outcomes: </span>
                  <span style={{ color: p.color }}>{p.outcome}</span>
                </div>

                <div className="flex gap-3">
                  <button onClick={onApply}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white hover:scale-105 transition-transform"
                    style={{ background: `linear-gradient(135deg,${p.color},#1a3a8f)` }}>
                    Apply Now <ArrowRight size={15} />
                  </button>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-bold text-sm border-2 transition-colors hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                    style={{ borderColor: '#25D366', color: '#25D366' }}>
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
