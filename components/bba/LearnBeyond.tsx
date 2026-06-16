'use client';
import { motion } from 'framer-motion';
import { Eye, PlayCircle, ClipboardList, BarChart3, TrendingUp, Presentation, ArrowRight, Target, Activity, Settings2, Brain, MessageSquare } from 'lucide-react';

const FLOW = [
  { label: 'Observe', icon: Eye },
  { label: 'Execute', icon: PlayCircle },
  { label: 'Record', icon: ClipboardList },
  { label: 'Analyse', icon: BarChart3 },
  { label: 'Improve', icon: TrendingUp },
  { label: 'Present', icon: Presentation },
];

const TOOLS = [
  { name: 'Business Spreadsheet Software', desc: 'For general operational calculations and data tracking.' },
  { name: 'Reporting & Dashboard Tools', desc: 'For monitoring performance indicators and business results.' },
  { name: 'Customer Relationship Management (CRM)', desc: 'For tracking client interactions, sales stages, and engagement.' },
  { name: 'HR Management Applications', desc: 'Handling corporate hiring workflows and employee database analytics.' },
  { name: 'Digital Advertising Dashboards', desc: 'Setting up and analyzing performance marketing frameworks.' },
  { name: 'Workflow Integration Engines', desc: 'Managing standard automated workflows across office teams.' },
];

const SKILLS = [
  { icon: Settings2, title: 'Operational Proficiency', desc: 'Run day-to-day corporate workflows in your chosen business department.' },
  { icon: Activity, title: 'Performance Tracking', desc: 'Set up, view, and interpret professional progress reports and status updates.' },
  { icon: Target, title: 'Process Excellence', desc: 'Understand, design, and execute standard operating procedures within a corporate structure.' },
  { icon: Brain, title: 'Problem Solving', desc: 'Develop deep logical skills to identify workflow bottlenecks and recommend improvements.' },
  { icon: MessageSquare, title: 'Communication & Presentation', desc: 'Express goals clearly, manage team dynamics, and present domain performance confidently.' },
];

export default function LearnBeyond() {
  return (
    <section className="py-8 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Learn Beyond The Classroom</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Experience. Apply. Excel.</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            We believe in learning that goes far beyond theory — hands-on practice, continuous corporate connect, and specialized track training.
          </p>
        </motion.div>

        {/* OJT Process Flow */}
        <div className="mb-16">
          <p className="text-center text-[#0B1F5C] font-black text-sm uppercase tracking-widest mb-6">🔄 The OJT Process Flow</p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {FLOW.map((f, i) => (
              <div key={f.label} className="flex items-center">
                <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 px-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ background: 'linear-gradient(135deg,#0B1F5C,#1a3a8f)' }}>
                    <f.icon size={22} className="text-[#F5B400]" />
                  </div>
                  <span className="text-xs font-bold text-[#0B1F5C]">{f.label}</span>
                </motion.div>
                {i < FLOW.length - 1 && (
                  <ArrowRight size={16} className="text-gray-300 hidden sm:block mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Tools */}
          <div>
            <h3 className="text-[#0B1F5C] font-black text-lg mb-4">Tools &amp; Platforms You&apos;ll Work With</h3>
            <div className="space-y-2.5">
              {TOOLS.map((t, i) => (
                <motion.div key={t.name}
                  initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="p-3.5 rounded-xl bg-[#f8f9ff] border border-gray-100">
                  <p className="text-[#0B1F5C] font-bold text-sm mb-0.5">{t.name}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h3 className="text-[#0B1F5C] font-black text-lg mb-4">Core Skills You Will Build</h3>
            <div className="space-y-2.5">
              {SKILLS.map((s, i) => (
                <motion.div key={s.title}
                  initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#fffbea] border border-[#F5B400]/20">
                  <s.icon size={18} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#0B1F5C] font-bold text-sm mb-0.5">{s.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
