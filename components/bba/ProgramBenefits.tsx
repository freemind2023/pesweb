'use client';
import { motion } from 'framer-motion';
import { Briefcase, Award, TrendingUp, Target, CheckCircle2 } from 'lucide-react';

const BENEFITS = [
  { icon: Briefcase, color: '#0B1F5C', bg: '#eef3ff', title: 'Industry-Relevant Skills', desc: 'Gain practical knowledge in core domain software, customer management pipelines, and operational reporting.' },
  { icon: Target, color: '#10B981', bg: '#ecfdf5', title: 'Job-Ready Training', desc: 'Live marketing data, real HR case studies, and hands-on business tools prepare you for immediate workplace integration.' },
  { icon: Award, color: '#F5B400', bg: '#fffbea', title: 'Certifications', desc: 'Earn recognized industry certificates tailored to your chosen functional specialization.' },
  { icon: TrendingUp, color: '#6366F1', bg: '#eef0ff', title: 'Career Growth', desc: 'Build an incredible foundation for modern corporate management, startups, and higher global studies.' },
];

const SPPU_POINTS = [
  'Structured as per Savitribai Phule Pune University (SPPU) guidelines.',
  'Dual focus on solid academic concepts and deep professional skill development.',
  'Continuous learning through actual business situations, live presentations, and corporate interactions.',
];

export default function ProgramBenefits() {
  return (
    <section className="py-8 md:py-14" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Program Benefits &amp; Alignment</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Why Practical BBA Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {BENEFITS.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: b.bg }}>
                <b.icon size={22} style={{ color: b.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-[#0B1F5C] font-black text-lg mb-4 text-center">Aligned With SPPU Curriculum</h3>
          <ul className="space-y-3">
            {SPPU_POINTS.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
