'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Award, Briefcase, TrendingUp, Clock } from 'lucide-react';

const WA = 'https://wa.me/919890959990?text=Hi%2C+I+want+to+know+about+Practical+BBA%2FBBA-IB+admissions+at+Practical+EduSkills+Head+Office';

const PROGRAMS = [
  {
    title: 'Practical BBA',
    subtitle: 'Strategic Operations & Business Administration',
    short: 'BBA',
    badge: '3 Years · SPPU Curriculum',
    image: '/brand/courses/bba.jpg',
    color: '#0B1F5C',
    light: '#eef3ff',
    darkColor: '#071232',
    highlights: [
      { icon: Clock, text: '3-Year Program' },
      { icon: Briefcase, text: '2 Yrs OJT' },
      { icon: Award, text: '12+ Certifications' },
      { icon: TrendingUp, text: 'Stipend Support' },
    ],
    subjects: [
      'Principles of Management',
      'Marketing Fundamentals & Digital Marketing',
      'HR Operations & People Analytics',
      'CRM & Customer Lifecycle Management',
      'Business Finance & Reporting',
      'Business Laws & Corporate Compliance',
      'Business Communication & Etiquette',
      'Entrepreneurship & Startup Execution',
    ],
    outcome: ['HR Executive', 'Marketing Manager', 'Operations Lead', 'CRM Manager', 'Business Analyst'],
    eligibility: 'Open to all streams who have passed 12th (HSC)',
  },
  {
    title: 'Practical BBA-IB',
    subtitle: 'International Business',
    short: 'BBA-IB',
    badge: '3 Years · Global Track',
    image: '/brand/courses/bba-ib.jpg',
    color: '#6366F1',
    light: '#eef0ff',
    darkColor: '#4338CA',
    highlights: [
      { icon: Clock, text: '3-Year Program' },
      { icon: Briefcase, text: '2 Yrs OJT' },
      { icon: Award, text: '12+ Certifications' },
      { icon: TrendingUp, text: 'Dubai Track' },
    ],
    subjects: [
      'International Business Fundamentals',
      'Import-Export Essentials',
      'Cross-Culture Communication & Negotiation',
      'International Sales & Marketing',
      'Global Digital Marketing & Data Analytics',
      'International Business Laws',
      'Supply Chain Management',
      'Business Financial Mastery',
    ],
    outcome: ['Import-Export Manager', 'International Sales Executive', 'Supply Chain Specialist', 'Global Trade Analyst'],
    eligibility: 'Open to all streams who have passed 12th (HSC)',
  },
];

const DOMAIN_TABLE = [
  { domain: 'Core Management', items: ['Principles of Management', 'Business Organisation', 'Business Laws'] },
  { domain: 'Sales & Customer Relations', items: ['Marketing Fundamentals', 'Digital Marketing', 'CRM & Lifecycle Management'] },
  { domain: 'People & Operations', items: ['HR Operations', 'Human Behaviour', 'Corporate Compliance'] },
  { domain: 'Analytics & Performance', items: ['Business Finance', 'Data & Reporting Labs', 'Performance Analytics'] },
];

export default function Tracks({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-8 md:py-14 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#f0f4ff 0%,#f8f9ff 50%,#eef3ff 100%)' }}>
      <div className="relative max-w-6xl mx-auto px-4">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Choose Your Track</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Practical BBA Programs</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            Smart Learning. Strong Foundation. Successful Career — aligned with Savitribai Phule Pune University (SPPU) guidelines.
          </p>
        </motion.div>

        {/* Program cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          {PROGRAMS.map((p, i) => (
            <motion.div key={p.short}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col">

              <div className="relative w-full h-56 sm:h-64 overflow-hidden flex-shrink-0">
                <Image src={p.image} alt={p.title} fill className="object-cover object-top" priority={i === 0} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 30%, ${p.darkColor}ee 100%)` }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-black mb-2"
                    style={{ background: '#F5B400', color: '#0B1F5C' }}>{p.badge}</span>
                  <h3 className="text-white font-black text-xl md:text-2xl leading-tight drop-shadow-lg">{p.title}</h3>
                  <p className="text-white/80 text-xs font-semibold mt-0.5">{p.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 border-b border-gray-100">
                {p.highlights.map((h) => (
                  <div key={h.text} className="flex flex-col items-center justify-center py-3 px-1 text-center border-r last:border-r-0 border-gray-100">
                    <h.icon size={15} style={{ color: p.color }} className="mb-1" />
                    <span className="text-[10px] font-bold text-[#0B1F5C] leading-tight">{h.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col gap-5">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-3">Subjects & Skills</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {p.subjects.map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <CheckCircle size={13} style={{ color: p.color, flexShrink: 0 }} />
                        <span className="text-sm text-gray-700">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl" style={{ background: p.light }}>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: p.color }}>Career Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {p.outcome.map((o) => (
                      <span key={o} className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: p.color }}>{o}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <Award size={13} className="mt-0.5 flex-shrink-0 text-[#F5B400]" />
                  <span><strong className="text-[#0B1F5C]">Eligibility:</strong> {p.eligibility}</span>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button onClick={onApply}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-sm text-white hover:scale-[1.02] active:scale-95 transition-transform shadow-lg"
                    style={{ background: `linear-gradient(135deg,${p.color},${p.darkColor})` }}>
                    Apply Now <ArrowRight size={15} />
                  </button>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl font-black text-sm border-2 transition-all hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                    style={{ borderColor: '#25D366', color: '#25D366' }}>
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Domain table */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-8">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Key Subjects By Domain</span>
          <h3 className="text-[#0B1F5C] text-2xl md:text-3xl font-black mt-1">What You&apos;ll Study</h3>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DOMAIN_TABLE.map((d, i) => (
            <motion.div key={d.domain}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h4 className="text-[#0B1F5C] font-black text-sm mb-3">{d.domain}</h4>
              <ul className="space-y-1.5">
                {d.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5B400] mt-1.5 flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
