'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calculator, Award, IndianRupee, Users, Zap, Laptop, GraduationCap } from 'lucide-react';

const CARDS = [
  { icon: IndianRupee, color: '#10B981', bg: '#ecfdf5', title: 'Earn While You Learn', marathi: 'शिकताना कमवा', desc: '₹8,000–₹10,000 monthly stipend during 2-year OJT — real salary, real work from SY B.Com.' },
  { icon: Laptop,     color: '#6366F1', bg: '#eef0ff', title: 'Live Tool Training',    marathi: 'प्रत्यक्ष साधनांचे प्रशिक्षण', desc: 'ZOHO, Tally Prime, Odoo, GST portal, Advanced Excel — tools real companies use daily.' },
  { icon: Award,      color: '#F5B400', bg: '#fffbea', title: '6+ Certifications',     marathi: '६+ प्रमाणपत्रे', desc: 'Industry-recognized certs in Tally, GST, Odoo, Excel & more — add weight to your resume.' },
  { icon: Calculator, color: '#0B1F5C', bg: '#eef3ff', title: 'Fintech & Digital Accounting', marathi: 'फिनटेक लेखाकार', desc: 'Learn how modern accounting works — digital, automated, and AI-assisted.' },
  { icon: Briefcase,  color: '#EF4444', bg: '#fef2f2', title: '100+ Hiring Partners', marathi: '१०० + कंपन्या', desc: 'Dedicated placement cell with 100+ recruiters actively hiring Practical B.COM graduates.' },
  { icon: Users,      color: '#8B5CF6', bg: '#f5f3ff', title: 'Personality Development', marathi: 'व्यक्तिमत्व विकास', desc: 'Soft skills, communication, leadership — built into the curriculum from Year 1.' },
  { icon: Zap,        color: '#F59E0B', bg: '#fffbeb', title: 'Industry Mentors',       marathi: 'उद्योग तज्ज्ञ', desc: 'Learn directly from CAs, FinTech executives, and tax professionals — not just textbooks.' },
  { icon: GraduationCap, color: '#14B8A6', bg: '#f0fdfa', title: 'Placement Ready in 3 Years', marathi: '३ वर्षात नोकरी', desc: 'Graduate with job experience, certifications, and a placement offer in hand.' },
];

export default function WhyUs() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Why This Program?</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Why Practical B.COM?</h2>
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
