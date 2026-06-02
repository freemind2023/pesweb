'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, BookOpen } from 'lucide-react';

const TRUST_POINTS = [
  { icon: ShieldCheck, text: '21+ Years of Excellence', sub: 'Trusted by 2500+ students' },
  { icon: BadgeCheck,  text: 'Industry-Recognized',     sub: 'Certifications accepted everywhere' },
  { icon: BookOpen,    text: 'Practical First',          sub: 'Learn by doing, not just theory' },
];

export default function PESRecognition() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ background: 'linear-gradient(135deg,#0B1F5C 0%,#1a3a8f 100%)' }} />
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse at right,#F5B400,transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* PES Logo */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex flex-col items-center gap-3">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center overflow-hidden"
              style={{ boxShadow: '0 0 0 6px rgba(11,31,92,0.08), 0 0 0 14px rgba(11,31,92,0.04), 0 20px 60px rgba(11,31,92,0.15)', border: '3px solid rgba(11,31,92,0.12)' }}>
              <Image src="/brand/logo.png" alt="Practical EduSkills" width={160} height={160}
                className="w-full h-full object-contain p-4" />
            </div>
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
              style={{ background: 'rgba(11,31,92,0.07)', color: '#0B1F5C' }}>Est. 2003</span>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left flex-1">
            <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: '#F5B400' }}>
              Powered by Practical EduSkills
            </p>
            <h2 className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', color: '#0B1F5C', fontFamily: "'DM Sans',sans-serif" }}>
              A Course Built by Industry,<br />
              <span style={{ color: '#0B1F5C' }}>For the Industry</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Practical EduSkills (PES) has been transforming commerce education since 2003.
              The <strong>Practical B.COM — Fintech & Digital Accounting</strong> program at
              Maharashtriya Mandal College is designed with real hiring managers in mind.
              Students work with live tools — ZOHO, Tally Prime, Odoo, GST portals —
              from Day 1, not just textbooks. Every skill you learn is a skill companies are hiring for right now.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {TRUST_POINTS.map(({ icon: Icon, text, sub }) => (
                <div key={text} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border"
                  style={{ background: '#f8f9ff', borderColor: 'rgba(11,31,92,0.1)' }}>
                  <Icon size={15} style={{ color: '#0B1F5C' }} className="flex-shrink-0" />
                  <div>
                    <p className="font-bold text-xs" style={{ color: '#0B1F5C' }}>{text}</p>
                    <p className="text-gray-400 text-[10px]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
