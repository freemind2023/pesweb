'use client';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, IndianRupee } from 'lucide-react';

const YEARS = [
  {
    year: 'Year 01', title: 'Learn. Practice. Prepare.', icon: BookOpen, color: '#6366F1',
    desc: 'Build a strong foundation in management and corporate readiness.',
    points: ['Advanced Management & Strategy', 'Corporate Communication & Leadership', 'Business Analytics & Reporting', 'Industry Tools & Practical Projects'],
  },
  {
    year: 'Year 02', title: 'Earn. Experience. Excel.', icon: Briefcase, color: '#F5B400',
    desc: 'Gain real experience and become a corporate leader.',
    points: ['18 Months OJT With Stipend', 'Real Projects & Live Assignments', 'Performance Tracking & Mentorship', 'Executive Certifications & Portfolio Building'],
  },
];

export default function TwoYearJourney() {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Your Journey</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Two-Year Journey to Corporate Leadership</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {YEARS.map((y, i) => (
            <motion.div key={y.year}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ background: `linear-gradient(135deg,${y.color},${y.color}99)` }}>
                  <y.icon size={26} className="text-white" />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-black mb-1"
                    style={{ background: y.color, color: y.color === '#F5B400' ? '#0B1F5C' : '#fff' }}>
                    {y.year}
                  </span>
                  <h3 className="text-[#0B1F5C] font-black text-xl">{y.title}</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">{y.desc}</p>
              <ul className="space-y-2">
                {y.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: y.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl p-7 md:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left max-w-3xl mx-auto"
          style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#F5B400' }}>
            <IndianRupee size={26} className="text-[#0B1F5C]" />
          </div>
          <div>
            <div className="text-white font-black text-2xl sm:text-3xl">₹12,000 – ₹18,000 <span className="text-[#F5B400] text-lg font-bold">/ month</span></div>
            <p className="text-white/60 text-sm mt-1">OJT Stipend — Financial support &amp; real independence while you train.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
