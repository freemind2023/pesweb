'use client';
import { motion } from 'framer-motion';
import { Map, PenTool, TrendingUp, LineChart, Workflow, MessagesSquare } from 'lucide-react';

const OUTCOMES = [
  { icon: Map, color: '#0B1F5C', title: 'Plan', desc: 'Turn business objectives into audience, funnel, channel, campaign and measurement plans.' },
  { icon: PenTool, color: '#6366F1', title: 'Create', desc: 'Develop content, ad concepts, landing-page briefs, email sequences and social calendars.' },
  { icon: TrendingUp, color: '#F5B400', title: 'Optimise', desc: 'Read campaign data, find issues, form hypotheses and recommend actions.' },
  { icon: LineChart, color: '#10B981', title: 'Measure', desc: 'Work with analytics, KPIs, dashboards and performance reports.' },
  { icon: Workflow, color: '#F97316', title: 'Automate', desc: 'Map marketing workflows and automate repetitive tasks with no-code/AI tools.' },
  { icon: MessagesSquare, color: '#0B1F5C', title: 'Communicate', desc: 'Present recommendations and handle agency-style briefs and feedback.' },
];

export default function Outcomes() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Outcomes</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">What You Will Be Able to Do</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {OUTCOMES.map((o, i) => (
            <motion.div key={o.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `${o.color}1a` }}>
                <o.icon size={22} style={{ color: o.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2">{o.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
