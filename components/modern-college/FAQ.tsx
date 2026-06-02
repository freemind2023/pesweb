'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is AEDP and how is it different from a regular degree?',
    a: 'AEDP (Applied Education and Development Program) is an SPPU-affiliated degree that combines classroom learning with 1.5 years of paid On-the-Job Training (Apprenticeship). Unlike regular degrees, students work with real companies and earn a monthly stipend of ₹8,000–₹12,000 — all while completing their degree.',
  },
  {
    q: 'Is the degree valid for higher studies like MBA or MSc?',
    a: 'Yes. AEDP degrees are fully affiliated to Savitribai Phule Pune University (SPPU), a recognized state university. The degree is valid for all government and private higher education admissions, including MBA, MSc, and other PG programs.',
  },
  {
    q: 'When does Apprenticeship start and how does the stipend work?',
    a: 'Apprenticeship begins in Year 2 and continues through Year 3 (totalling 1.5 years). Students are placed with industry partners and receive ₹8,000–₹12,000 per month directly from the company — this is not a scholarship, it is a real salary for real work.',
  },
  {
    q: 'What are the admission requirements?',
    a: 'Any student who has passed 12th standard (HSC or equivalent) from any stream (Science, Commerce, Arts) can apply. There are no entrance exams — admission is based on merit and a counselling session. B.Sc. AI is recommended for Science/Commerce students; B.Com AEDP suits Commerce and Arts students.',
  },
  {
    q: 'Is there placement assistance after graduation?',
    a: 'Yes. Modern College has a dedicated placement cell with 100+ industry partners. Students who complete the program typically receive job offers before graduation. Placement preparation — resume building, interview coaching, aptitude training — is integrated from Year 1.',
  },
  {
    q: 'What certifications will I receive?',
    a: 'Students earn 12+ industry-recognized certifications including AI/ML tools, Tally ERP & Prime, GST, Cloud Platforms (AWS/Azure basics), Digital Marketing, Advanced Excel, and more. These are in addition to the SPPU degree.',
  },
  {
    q: 'How do I apply and what are the next steps?',
    a: 'Fill out the enquiry form on this page or WhatsApp us at +91 79724 01596. Our counsellor will contact you within 24 hours, explain the program in detail, and guide you through the admission process. There is no application fee.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">FAQ</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">Common Questions</h2>
          <p className="text-gray-500 text-sm mt-2 devanagari">तुमच्या मनातील प्रश्नांची उत्तरे</p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#0B1F5C]/30 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}>
                <span className="font-bold text-[#0B1F5C] text-sm leading-snug">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                  <ChevronDown size={18} className="text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </p>
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
