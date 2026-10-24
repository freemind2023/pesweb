'use client';
import { motion } from 'framer-motion';
import { Target, Wrench, Brain, Building2 } from 'lucide-react';

const PROMISE = [
  { icon: Target, color: '#0B1F5C', bg: '#eef3ff', title: 'Foundation', desc: 'Build a foundation in marketing strategy, customer journeys, funnels and campaign planning.' },
  { icon: Wrench, color: '#F5B400', bg: '#fffbea', title: 'Practice', desc: 'Develop practical skills across SEO, paid ads, social media, content, CRM, analytics and conversion optimisation.' },
  { icon: Brain, color: '#6366F1', bg: '#eef0ff', title: 'AI With Judgement', desc: 'Use AI for research, ideation, production, analysis and automation — without outsourcing judgement.' },
  { icon: Building2, color: '#10B981', bg: '#ecfdf5', title: 'Agency Readiness', desc: 'Work through agency-style briefs, deadlines, reporting and client communication for interview-ready evidence.' },
];

export default function ProgramPromise() {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Marketing First. AI Second.</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">The Program Promise</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            You graduate as digital marketing professionals, not just someone who completed a syllabus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROMISE.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: b.bg }}>
                <b.icon size={22} style={{ color: b.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
