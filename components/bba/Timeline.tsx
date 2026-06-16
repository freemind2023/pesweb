'use client';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Trophy } from 'lucide-react';

const YEARS = [
  {
    year: 'Year 01', title: 'Building The Foundation', icon: BookOpen, color: '#6366F1',
    marathi: 'पाया रचना', desc: 'Strong academic base in business administration, market mechanisms, and team management.',
    points: ['Classroom Learning', 'Core Operational Software & Etiquette', 'Training by Expert Faculty', 'Public Speaking & Confidence Building'],
  },
  {
    year: 'Year 02', title: 'Gaining Exposure', icon: Briefcase, color: '#F5B400',
    marathi: 'वाढ आणि अनुभव', desc: 'Step into real corporate environments within your selected career path.',
    points: ['On-the-Job Training (OJT) Begins', 'Specialized Functional Tools Mastery', 'Functional Performance Studies & Presentations', 'Interview Preparation & Corporate Grooming'],
  },
  {
    year: 'Year 03', title: 'Becoming Future Ready', icon: Trophy, color: '#10B981',
    marathi: 'करिअर तयार', desc: 'Complete your second continuous year of hands-on industrial execution.',
    points: ['Real-World Experience Continues', 'Independent Operational Coordination', '12+ Industry-Validated Certifications', 'Fully Job Ready for Top-Tier Roles'],
  },
];

export default function Timeline() {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">From Classroom To Career</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Your 3-Year Journey</h2>
          <p className="text-gray-500 text-sm mt-2 devanagari text-lg">शिकणे · अनुभवणे · घडणे</p>
        </motion.div>

        <div className="hidden md:flex items-start gap-0">
          {YEARS.map((y, i) => (
            <div key={y.year} className="flex-1 flex items-start">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="flex-1 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
                    style={{ background: `linear-gradient(135deg,${y.color},${y.color}99)` }}>
                    <y.icon size={22} className="text-white" />
                  </div>
                  {i < YEARS.length - 1 && (
                    <div className="flex-1 h-0.5 mx-3" style={{ background: `linear-gradient(90deg,${y.color},${YEARS[i + 1].color})` }} />
                  )}
                </div>
                <div className="pr-4">
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-black mb-2"
                    style={{ background: y.color, color: y.color === '#F5B400' ? '#0B1F5C' : '#fff' }}>
                    {y.year}
                  </span>
                  <h3 className="text-[#0B1F5C] font-black text-xl mb-0.5">{y.title}</h3>
                  <p className="text-gray-400 text-xs devanagari mb-2">{y.marathi}</p>
                  <p className="text-gray-500 text-sm mb-4">{y.desc}</p>
                  <ul className="space-y-1.5">
                    {y.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: y.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative pl-8 border-l-2 border-gray-100 space-y-10">
          {YEARS.map((y, i) => (
            <motion.div key={y.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-xl shadow"
                style={{ background: y.color }}>
                <y.icon size={18} className="text-white" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-black mb-2"
                style={{ background: y.color, color: y.color === '#F5B400' ? '#0B1F5C' : '#fff' }}>
                {y.year}
              </span>
              <h3 className="text-[#0B1F5C] font-black text-lg mb-1">{y.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{y.desc}</p>
              <ul className="space-y-1">
                {y.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: y.color }} />
                    {pt}
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
