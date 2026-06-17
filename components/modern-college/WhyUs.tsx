'use client';
import { motion } from 'framer-motion';
import { Briefcase, Brain, Award, IndianRupee, Users, Zap, GraduationCap, Building2 } from 'lucide-react';

const CARDS = [
  {
    icon: IndianRupee, color: '#10B981', bg: '#ecfdf5',
    title: 'Earn While You Learn',
    marathi: 'शिकताना कमवा',
    desc: '₹8,000–₹12,000 monthly stipend during 1.5-year Apprenticeship — real salary, real work.',
  },
  {
    icon: Brain, color: '#6366F1', bg: '#eef0ff',
    title: 'AI-Ready Curriculum',
    marathi: 'AI आधारित शिक्षण',
    desc: 'Claude AI, Python, ML, automation tools — skills companies are hiring for right now.',
  },
  {
    icon: Award, color: '#F5B400', bg: '#fffbea',
    title: '12+ Certifications',
    marathi: '१२+ प्रमाणपत्रे',
    desc: 'Industry-recognized certs in AI, Tally, Cloud, Digital Marketing & more.',
  },
  {
    icon: Building2, color: '#0B1F5C', bg: '#eef3ff',
    title: 'SPPU Degree',
    marathi: 'SPPU पदवी',
    desc: 'Government university degree — valid across India for higher studies and jobs.',
  },
  {
    icon: Briefcase, color: '#EF4444', bg: '#fef2f2',
    title: '1000+ Hiring Partners',
    marathi: '१०००+ कंपन्या',
    desc: 'Dedicated placement cell with 1000+ recruiters actively hiring our students.',
  },
  {
    icon: Users, color: '#8B5CF6', bg: '#f5f3ff',
    title: 'Personality Development',
    marathi: 'व्यक्तिमत्व विकास',
    desc: 'Soft skills, public speaking, leadership — built into the curriculum, not an afterthought.',
  },
  {
    icon: Zap, color: '#F59E0B', bg: '#fffbeb',
    title: 'Industry Mentors',
    marathi: 'उद्योग तज्ज्ञ मार्गदर्शक',
    desc: 'Learn directly from working professionals and industry veterans, not just textbooks.',
  },
  {
    icon: GraduationCap, color: '#14B8A6', bg: '#f0fdfa',
    title: 'Placement Ready in 3 Years',
    marathi: '३ वर्षात नोकरी',
    desc: 'Graduate with a job offer — placement preparation starts from Year 1.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Why AEDP?</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">
            Why Choose Modern College AEDP
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto devanagari text-base">
            फक्त डिग्री नाही — करिअर बनवा
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group p-5 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all cursor-default"
              style={{ background: '#fff' }}
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: c.bg }}>
                <c.icon size={22} style={{ color: c.color }} />
              </div>
              <h3 className="text-[#0B1F5C] font-black text-base mb-0.5">{c.title}</h3>
              <p className="text-gray-400 text-xs devanagari mb-2">{c.marathi}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
