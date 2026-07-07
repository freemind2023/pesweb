'use client';
import { motion } from 'framer-motion';
import { Building2, FileText, TrendingUp, Users2, ShieldCheck } from 'lucide-react';

const OUTCOMES = [
  { icon: Building2, color: '#0B1F5C', title: 'Industry Experience', desc: 'Real corporate exposure before you graduate.' },
  { icon: FileText, color: '#6366F1', title: 'Better Resume', desc: 'Stand out with 18 months of documented OJT work.' },
  { icon: TrendingUp, color: '#F5B400', title: 'Higher Packages', desc: 'Enter placements with a genuine performance track record.' },
  { icon: Users2, color: '#10B981', title: 'Leadership Skills', desc: 'Mentored by C-level leaders to lead from day one.' },
  { icon: ShieldCheck, color: '#F97316', title: 'Corporate Readiness', desc: 'Confidence and skills to operate in any corporate environment.' },
];

export default function Outcomes() {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">What You Achieve</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Two Years That Transform Your Future</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {OUTCOMES.map((o, i) => (
            <motion.div key={o.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 text-center hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                style={{ background: `${o.color}1a` }}>
                <o.icon size={20} style={{ color: o.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-sm mb-1">{o.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
