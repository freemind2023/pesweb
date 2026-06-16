'use client';
import { motion } from 'framer-motion';
import { Target, Briefcase, IndianRupee, Trophy, Heart } from 'lucide-react';

const ITEMS = [
  { icon: Target, color: '#6366F1', bg: '#eef0ff', title: 'Become Career-Ready in Your Track', desc: 'Walk in prepared to handle your chosen department’s workflow with ease from day one.' },
  { icon: Briefcase, color: '#0B1F5C', bg: '#eef3ff', title: 'Gain 2 Years Experience', desc: 'Stand completely apart from standard graduates with heavy real-world exposure.' },
  { icon: IndianRupee, color: '#10B981', bg: '#ecfdf5', title: 'Stipend-Supported Safety', desc: 'Earn as you learn through our immersive corporate OJT network.' },
  { icon: Trophy, color: '#F5B400', bg: '#fffbea', title: 'Get The Job', desc: 'Step smoothly into high-demand roles across HR, Marketing, Operations, CRM, or Analytics.' },
  { icon: Heart, color: '#EF4444', bg: '#fef2f2', title: 'Make Parents Proud', desc: 'Celebrate completing a highly valuable, truly productive professional degree.' },
];

export default function Achievements() {
  return (
    <section className="py-8 md:py-14" style={{ background: 'linear-gradient(135deg,#071232,#0B1F5C)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">What You Achieve</span>
          <h2 className="text-white text-3xl md:text-4xl font-black mt-1">A Journey of Growth & Success</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ITEMS.map((it, i) => (
            <motion.div key={it.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#F5B400]/40 transition-all"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: it.bg }}>
                <it.icon size={22} style={{ color: it.color }} />
              </div>
              <h3 className="text-white font-black text-sm mb-2 leading-snug">{it.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
