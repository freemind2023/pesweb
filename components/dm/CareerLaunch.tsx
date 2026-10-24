'use client';
import { motion } from 'framer-motion';
import { FileText, FolderCheck, Mic, Users2 } from 'lucide-react';

const SUPPORT = [
  { icon: FileText, title: 'Resume & LinkedIn', desc: 'Role-focused resume and profile building.' },
  { icon: FolderCheck, title: 'Portfolio Review', desc: 'Mentor feedback on your 12 real projects.' },
  { icon: Mic, title: 'Mock Interviews', desc: 'Practice rounds with HR and domain questions.' },
  { icon: Users2, title: 'Interview Opportunities', desc: 'Introductions to our hiring partners.' },
];

const PATHWAYS = [
  'Digital Marketing Executive', 'SEO Executive', 'Performance Marketing Executive', 'Social Media / Content Executive',
  'CRM / Email Executive', 'Marketing Analytics Executive', 'Digital Account Executive',
];

export default function CareerLaunch() {
  return (
    <section className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Career Launch</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Placement Support</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
            From your first portfolio piece to your final interview, our team supports you at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {SUPPORT.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: '#eef0ff' }}>
                <s.icon size={22} className="text-[#6366F1]" />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-7 md:p-8 border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-[#0B1F5C] font-black text-lg mb-4 text-center">Career Pathways</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {PATHWAYS.map((p) => (
              <span key={p} className="px-3 py-1.5 rounded-full text-xs font-bold text-[#0B1F5C]" style={{ background: '#eef3ff' }}>{p}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
