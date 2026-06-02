'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Award, Briefcase, TrendingUp, Clock } from 'lucide-react';

const WA = 'https://wa.me/919689348709?text=Hi%2C+I+want+to+know+about+Practical+BCom+at+College+of+Practical+Commerce+Baramati';

const TOOLS = [
  { name: 'ZOHO', color: '#e74c3c' },
  { name: 'Advanced Excel', color: '#217346' },
  { name: 'GST Portal', color: '#F5B400' },
  { name: 'Odoo ERP', color: '#714B67' },
  { name: 'Upwork', color: '#14a800' },
  { name: 'Tally Prime', color: '#0B1F5C' },
];

const SUBJECTS = [
  'Financial Accounting (Practical)',
  'GST Filing & Returns',
  'Income Tax & Direct Tax',
  'Tally Prime & ERP',
  'Banking & Finance',
  'Odoo ERP System',
  'ZOHO CRM & Books',
  'Advanced Excel & MIS',
  'Upwork & Freelancing',
  'Digital Accounting Tools',
  'Business Communication',
  'Fintech Fundamentals',
];

const OUTCOMES = ['Fintech Executive', 'Tax Consultant', 'Accounts Manager', 'Digital Accountant', 'ERP Specialist', 'Freelance Bookkeeper'];
const HIGHLIGHTS = [
  { icon: Clock,      text: '3-Year B.COM' },
  { icon: Briefcase,  text: '2 Yrs Apprenticeship' },
  { icon: Award,      text: '6+ Certifications' },
  { icon: TrendingUp, text: '₹8K–10K/mo Stipend' },
];

export default function Programs({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-8 md:py-14 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#f0f4ff 0%,#f8f9ff 50%,#eef3ff 100%)' }}>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">The Program · Baramati</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Practical B.COM</h2>
          <p className="text-[#0B1F5C] font-bold text-lg mt-1">Fintech & Digital Accounting</p>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            Not a regular B.COM — a job-ready program built around live tools, real projects & 2 years of paid Apprenticeship, right here in Baramati.
          </p>

          {/* PES logo bar */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-md border border-gray-100">
              <Image src="/brand/peslogo.png" alt="PES" width={36} height={36} className="h-9 w-auto rounded-lg object-contain" />
              <div className="text-left">
                <p className="text-[#0B1F5C] font-black text-xs leading-tight">Practical EduSkills</p>
                <p className="text-gray-400 text-[10px]">Our Own Flagship Centre</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-xs"
                style={{ background: 'linear-gradient(135deg,#0B1F5C,#1a3a8f)' }}>📍</div>
              <div className="text-left">
                <p className="text-[#0B1F5C] font-black text-xs leading-tight">Baramati Campus</p>
                <p className="text-gray-400 text-[10px]">Vidyanagari MIDC, Baramati</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Program Card */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-4xl mx-auto">

          {/* Image header */}
          <div className="relative w-full h-64 sm:h-72 overflow-hidden">
            <Image src="/brand/centres/baramati-college.jpg" alt="College of Practical Commerce, Baramati" fill
              className="object-cover object-center" priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 20%, #071232ee 100%)' }} />
            <div className="absolute top-3 right-3">
              <div className="bg-white/95 rounded-xl p-1.5 shadow-lg">
                <Image src="/brand/peslogo.png" alt="PES" width={32} height={32} className="h-8 w-8 rounded-lg object-contain" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-black mb-2"
                style={{ background: '#F5B400', color: '#0B1F5C' }}>3 Years · Job Ready · Baramati</span>
              <h3 className="text-white font-black text-2xl md:text-3xl leading-tight drop-shadow-lg">
                Practical B.COM<br />
                <span className="text-[#F5B400]">Fintech & Digital Accounting</span>
              </h3>
            </div>
          </div>

          {/* Highlights strip */}
          <div className="grid grid-cols-4 border-b border-gray-100">
            {HIGHLIGHTS.map((h) => (
              <div key={h.text} className="flex flex-col items-center justify-center py-3 px-1 text-center border-r last:border-r-0 border-gray-100">
                <h.icon size={15} className="text-[#0B1F5C] mb-1" />
                <span className="text-[10px] font-bold text-[#0B1F5C] leading-tight">{h.text}</span>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Subjects */}
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-3">Subjects & Skills</p>
              <div className="grid grid-cols-1 gap-1.5">
                {SUBJECTS.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-[#0B1F5C] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Tools */}
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-3">Live Tools You&apos;ll Use</p>
                <div className="flex flex-wrap gap-2">
                  {TOOLS.map((t) => (
                    <span key={t.name} className="px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm"
                      style={{ background: t.color }}>{t.name}</span>
                  ))}
                </div>
              </div>

              {/* Career outcomes */}
              <div className="p-4 rounded-2xl" style={{ background: '#eef3ff' }}>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2 text-[#0B1F5C]">Career Outcomes</p>
                <div className="flex flex-wrap gap-2">
                  {OUTCOMES.map((o) => (
                    <span key={o} className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: '#0B1F5C' }}>{o}</span>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="flex items-start gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                <Award size={13} className="mt-0.5 flex-shrink-0 text-[#F5B400]" />
                <span><strong className="text-[#0B1F5C]">Eligibility:</strong> Open to Commerce & Arts students who have passed 12th (HSC)</span>
              </div>

              {/* Apprenticeship highlight */}
              <div className="p-4 rounded-2xl border-2 border-[#10B981]/30" style={{ background: '#ecfdf5' }}>
                <p className="text-[#10B981] font-black text-sm mb-1">🎯 SY B.Com पासूनच Apprenticeship सुरू!</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Apprenticeship starts from Second Year — 2 full years of real work experience + ₹8,000–10,000/month stipend.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <button onClick={onApply}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-sm text-white hover:scale-[1.02] active:scale-95 transition-transform shadow-lg"
                  style={{ background: 'linear-gradient(135deg,#0B1F5C,#071232)' }}>
                  Apply Now <ArrowRight size={15} />
                </button>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl font-black text-sm border-2 transition-all hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                  style={{ borderColor: '#25D366', color: '#25D366' }}>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl overflow-hidden shadow-xl relative h-36 sm:h-44">
          <Image src="/brand/centres/baramati-college.jpg" alt="Baramati College Campus" fill
            className="object-cover object-top" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ background: 'rgba(11,31,92,0.78)' }}>
            <div className="bg-white rounded-xl p-1.5 mb-2">
              <Image src="/brand/peslogo.png" alt="PES" width={36} height={36} className="h-8 w-auto rounded-lg object-contain" />
            </div>
            <p className="text-white font-black text-base sm:text-lg">College of Practical Commerce & Management</p>
            <p className="text-[#F5B400] text-xs font-medium mt-0.5">Pencil Square Building · Vidyanagari MIDC · Near Mahindra Showroom · Baramati</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
