'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Award, Briefcase, TrendingUp, Clock } from 'lucide-react';

const WA = 'https://wa.me/917666676358?text=Hi%2C+I+want+to+know+about+AEDP+admissions+at+TJ+College+Kirkee';

const PROGRAMS = [
  {
    title: 'B.Sc. AI & Business Automation',
    short: 'AEDP – B.Sc.',
    badge: '3 Years · SPPU',
    image: '/tj-college/tj-bsc.png',
    color: '#6366F1',
    light: '#eef0ff',
    darkColor: '#4f46e5',
    highlights: [
      { icon: Clock, text: '3-Year SPPU Degree' },
      { icon: Briefcase, text: '1.5 Yrs Paid OJT' },
      { icon: Award, text: '12+ Certifications' },
      { icon: TrendingUp, text: '₹8K–₹12K Stipend/mo' },
    ],
    subjects: [
      'Python & Programming',
      'Artificial Intelligence',
      'ML & Data Science',
      'Cloud Platforms',
      'Claude & Generative AI',
      'Advanced Excel & Analytics',
      'Business Automation Tools',
      'Digital Marketing Automation',
    ],
    outcome: ['AI Executive', 'Data Analyst', 'Automation Specialist', 'Business Analyst'],
    eligibility: 'Open to Science & Commerce students who have passed 12th (HSC)',
    fees: 'Affordable annual fees with scholarship options available',
  },
  {
    title: 'B.Com Accounting & Business Practices',
    short: 'AEDP – B.Com',
    badge: '3 Years · SPPU',
    image: '/tj-college/tj1.png',
    color: '#0B1F5C',
    light: '#eef3ff',
    darkColor: '#071232',
    highlights: [
      { icon: Clock, text: '3-Year SPPU Degree' },
      { icon: Briefcase, text: '1.5 Yrs Paid OJT' },
      { icon: Award, text: '12+ Certifications' },
      { icon: TrendingUp, text: '₹8K–₹12K Stipend/mo' },
    ],
    subjects: [
      'Financial Accounting',
      'GST & Indirect Tax',
      'Tally ERP & Prime',
      'Direct Tax & Taxation',
      'Banking & Finance',
      'AI Accounting Tools',
      'Corporate Law Basics',
      'Business Communication',
    ],
    outcome: ['Accounts Executive', 'GST Consultant', 'Finance Executive', 'CA Article'],
    eligibility: 'Open to Commerce & Arts students who have passed 12th (HSC)',
    fees: 'Affordable annual fees with scholarship options available',
  },
];

export default function Programs({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-14 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#f0f4ff 0%,#f8f9ff 50%,#eef3ff 100%)' }}>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Our AEDP Programs</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Choose Your Career Path</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            SPPU-affiliated programs designed with industry input — combining degree education with real skills and OJT.
          </p>

          {/* Trust logos bar */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-md border border-gray-100">
              <Image src="/modern-college/sppu-logo.jpg" alt="SPPU" width={36} height={36} className="h-9 w-auto rounded-lg object-contain" />
              <div className="text-left">
                <p className="text-[#0B1F5C] font-black text-xs leading-tight">SPPU Affiliated</p>
                <p className="text-gray-400 text-[10px]">Govt. University Degree</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-md border border-gray-100">
              <Image src="/tj-college/tj-logo.png" alt="TJ College" width={36} height={36} className="h-9 w-auto rounded-lg object-contain" />
              <div className="text-left">
                <p className="text-[#0B1F5C] font-black text-xs leading-tight">TJ College</p>
                <p className="text-gray-400 text-[10px]">Kirkee, Pune</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Program cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {PROGRAMS.map((p, i) => (
            <motion.div key={p.short}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col">

              {/* Full program image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden flex-shrink-0">
                <Image src={p.image} alt={p.title} fill className="object-cover object-top" priority={i === 0} />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 30%, ${p.darkColor}ee 100%)` }} />
                {/* Top-right SPPU + TJ logos */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <div className="bg-white/95 rounded-xl p-1 shadow-lg">
                    <Image src="/modern-college/sppu-logo.jpg" alt="SPPU" width={28} height={28} className="h-7 w-7 rounded-lg object-contain" />
                  </div>
                  <div className="bg-white/95 rounded-xl p-1 shadow-lg">
                    <Image src="/tj-college/tj-logo.png" alt="TJ College" width={28} height={28} className="h-7 w-7 rounded-lg object-contain" />
                  </div>
                </div>
                {/* Badge + title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-black mb-2"
                    style={{ background: '#F5B400', color: '#0B1F5C' }}>{p.badge}</span>
                  <h3 className="text-white font-black text-xl md:text-2xl leading-tight drop-shadow-lg">{p.title}</h3>
                </div>
              </div>

              {/* Highlights strip */}
              <div className="grid grid-cols-4 border-b border-gray-100">
                {p.highlights.map((h) => (
                  <div key={h.text} className="flex flex-col items-center justify-center py-3 px-1 text-center border-r last:border-r-0 border-gray-100">
                    <h.icon size={15} style={{ color: p.color }} className="mb-1" />
                    <span className="text-[10px] font-bold text-[#0B1F5C] leading-tight">{h.text}</span>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col gap-5">

                {/* Subjects */}
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

                {/* Career outcomes */}
                <div className="p-4 rounded-2xl" style={{ background: p.light }}>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: p.color }}>Career Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {p.outcome.map((o) => (
                      <span key={o} className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: p.color }}>{o}</span>
                    ))}
                  </div>
                </div>

                {/* Eligibility */}
                <div className="flex items-start gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <Award size={13} className="mt-0.5 flex-shrink-0 text-[#F5B400]" />
                  <span><strong className="text-[#0B1F5C]">Eligibility:</strong> {p.eligibility}</span>
                </div>

                {/* CTAs */}
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

        {/* Bottom TJ College strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl overflow-hidden shadow-xl relative h-36 sm:h-44"
          style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white rounded-xl p-1">
                <Image src="/modern-college/sppu-logo.jpg" alt="SPPU" width={36} height={36} className="h-8 w-auto rounded-lg object-contain" />
              </div>
              <div className="w-px h-8 bg-white/30" />
              <div className="bg-white rounded-xl p-1">
                <Image src="/tj-college/tj-logo.png" alt="TJ College" width={36} height={36} className="h-8 w-auto rounded-lg object-contain" />
              </div>
            </div>
            <p className="text-white font-black text-base sm:text-lg">Tikaram Jagannath College, Kirkee, Pune</p>
            <p className="text-[#F5B400] text-xs font-medium mt-0.5">491 Elphinstone Road, Kirkee, Maharashtra 411003 · Affiliated to SPPU</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
