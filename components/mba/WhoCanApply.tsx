'use client';
import { motion } from 'framer-motion';
import { Sprout, Cpu, LineChart } from 'lucide-react';

const STREAMS = [
  { icon: Sprout, color: '#10B981', bg: '#ecfdf5', title: 'Agriculture Graduates', desc: 'Step into Agri-Business, Supply Chain & Agro-Marketing roles.' },
  { icon: Cpu, color: '#6366F1', bg: '#eef0ff', title: 'Engineering Graduates', desc: 'Drive Enterprise Systems, Data Dashboards & Project Excellence.' },
  { icon: LineChart, color: '#F5B400', bg: '#fffbea', title: 'Commerce & Arts Graduates', desc: 'Transform knowledge into automated workflows & digital operations.' },
];

export default function WhoCanApply() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Open to All Streams</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Who Can Apply?</h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Transform any academic background into corporate leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {STREAMS.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 border border-gray-100 text-center hover:shadow-xl transition-all group"
              whileHover={{ y: -4 }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: s.bg }}>
                <s.icon size={26} style={{ color: s.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
