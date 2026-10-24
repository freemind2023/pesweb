'use client';
import { motion } from 'framer-motion';
import { FileText, Search, Megaphone, LayoutTemplate, Mail, Workflow, TrendingUp, BarChart3, Presentation } from 'lucide-react';

const PROJECTS = [
  { icon: FileText, title: 'Strategy brief & customer journey' },
  { icon: LayoutTemplate, title: 'Landing-page wireframe & CRO' },
  { icon: Mail, title: 'Email/CRM nurture workflow' },
  { icon: Megaphone, title: 'AI content system & calendar' },
  { icon: Workflow, title: 'Lead-generation automation SOP' },
  { icon: Search, title: 'SEO keyword map & audit' },
  { icon: TrendingUp, title: 'Search ads campaign plan' },
  { icon: Megaphone, title: 'Paid social plan & testing matrix' },
  { icon: BarChart3, title: 'Analytics dashboard & client report' },
  { icon: Presentation, title: 'Integrated capstone campaign & presentation' },
];

export default function Portfolio() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#0B1F5C] text-xs font-bold mb-3" style={{ background: '#F5B400' }}>
            12 Real Projects
          </span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Your Portfolio, Not Just a Syllabus</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Walk into interviews with evidence, not a certificate alone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all"
              style={{ background: '#f8f9ff' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#eef0ff' }}>
                <p.icon size={18} className="text-[#6366F1]" />
              </div>
              <span className="text-[#0B1F5C] font-bold text-sm leading-tight">{p.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
