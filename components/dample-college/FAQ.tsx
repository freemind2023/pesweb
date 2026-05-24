'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is Practical B.COM – Fintech & Digital Accounting?',
    a: 'Practical B.COM is a 3-year B.COM program where students learn live industry tools — ZOHO, Tally Prime, Odoo ERP, GST filing, Advanced Excel — alongside their regular syllabus. Unlike a regular B.COM, this program gives you 2 years of paid On-the-Job Training (OJT) starting from Second Year, so you graduate with real experience.',
  },
  {
    q: 'When does OJT start and how does the stipend work?',
    a: 'OJT (On-the-Job Training) starts from SY B.Com (Second Year). Students are placed with industry partners and receive ₹8,000–₹10,000 per month — this is a real salary for real work, not a scholarship. By the time you graduate, you will have 2 full years of work experience on your resume.',
  },
  {
    q: 'What tools and software will I learn?',
    a: 'You will get hands-on training in ZOHO (CRM & Books), Tally Prime, Odoo ERP, GST filing portal, Advanced Excel & MIS reporting, Upwork (freelancing), and digital accounting tools. These are the exact tools companies use every day.',
  },
  {
    q: 'What certifications will I receive?',
    a: 'Students receive 6+ industry-recognized certifications including Tally Prime, GST Practitioner, Odoo ERP, Advanced Excel, and more. These certifications add significant value to your resume and are recognized by employers across India.',
  },
  {
    q: 'What jobs can I get after Practical B.COM?',
    a: 'Graduates are placed as Accounts Executives, GST Consultants, Finance Executives, Fintech Executives, ERP Specialists, Digital Accountants, and CA Articles. Starting salaries range from ₹2.5 LPA to ₹6 LPA depending on the role and company.',
  },
  {
    q: 'Who is this course for?',
    a: 'This course is ideal for students who have passed 12th from Commerce, Arts, or Science streams and want a B.COM degree combined with real job skills. If you want to earn while you study and graduate with a job already in hand, this is the program for you.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">FAQs</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-5 text-left"
                style={{ background: open === i ? '#f8f9ff' : '#fff' }}>
                <span className="font-bold text-[#0B1F5C] text-sm sm:text-base leading-snug">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                  <ChevronDown size={18} className="text-[#F5B400]" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    <p className="text-gray-600 text-sm leading-relaxed px-5 pb-5">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
