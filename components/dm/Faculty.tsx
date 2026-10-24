'use client';
import { motion } from 'framer-motion';

const FACULTY = [
  { name: 'Nikhil Shaha', role: 'Growth Marketing Consultant, Agency Owner', exp: '17+ Years of Experience', initials: 'NS' },
  { name: 'Rohan Bankar', role: 'Digital Marketing Specialist, Agency Owner', exp: '11+ Years of Experience', initials: 'RB' },
  { name: 'Maitriyee Bapat', role: 'Specializing in Digital Content & SEO, Guest Faculty', exp: '8+ Years of Experience', initials: 'MB' },
];

export default function Faculty() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Meet Your Faculty</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Learn From People Who Run Agencies</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FACULTY.map((f, i) => (
            <motion.div key={f.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 border border-gray-100 text-center hover:shadow-xl transition-all">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-xl"
                style={{ background: 'linear-gradient(135deg,#0B1F5C,#6366F1)' }}>
                {f.initials}
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-1">{f.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{f.role}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#0B1F5C]" style={{ background: '#fffbea' }}>{f.exp}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
