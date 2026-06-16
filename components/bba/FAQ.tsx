'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const FAQS_EN = [
  {
    q: 'What is Practical BBA and how is it different from a regular BBA?',
    a: 'Practical BBA — Strategic Operations & Business Administration is a skill-oriented undergraduate program at our Head Office, Pune. Unlike a regular BBA which is mostly theory, this program blends SPPU-aligned academics with 2 full years of On-the-Job Training (OJT), 12+ industry certifications, and functional specialization in Marketing, HR, CRM, Operations, or Analytics.',
  },
  {
    q: 'What is the difference between Practical BBA and Practical BBA-IB?',
    a: 'Practical BBA focuses on core business functions — Management, Marketing, HR, CRM, and Analytics — preparing you for domestic corporate roles. Practical BBA-IB (International Business) adds Import-Export, Cross-Culture Negotiation, Global Digital Marketing, and International Business Laws — preparing you for global trade and Dubai placement opportunities.',
  },
  {
    q: 'What is the difference between Internship, OJT, and Apprenticeship?',
    a: 'Internship is short-term (1–3 months), mostly observation, with little or no payment. OJT (On-the-Job Training) is longer and more structured — in Practical BBA, it runs for 2 full years from Year 2, giving you real operational experience with stipend support. Apprenticeship is a Government-registered contract under the Apprenticeship Act 1961. PES embeds genuine OJT into the BBA degree — not a short, unpaid internship.',
  },
  {
    q: 'Which stream students can apply?',
    a: 'Any student who has passed 12th (HSC) from any stream — Science, Commerce, or Arts — can apply for Practical BBA or BBA-IB. No entrance exam is required.',
  },
  {
    q: 'When does OJT start and is there a stipend?',
    a: 'On-the-Job Training begins in Year 2 and continues through Year 3 — 2 full years of industry immersion within your chosen corporate track. Students earn stipend support during this period, learning and earning at the same time.',
  },
  {
    q: 'What jobs can I get after Practical BBA or BBA-IB?',
    a: 'Practical BBA graduates: HR Executive, Marketing Manager, Operations Coordinator, CRM Manager, Business Analyst (₹2.5–7 LPA). Practical BBA-IB graduates: Import-Export Manager, International Sales Executive, Global Trade Analyst, Supply Chain Specialist (₹3–7 LPA) — with Dubai placement pathway for top performers.',
  },
  {
    q: 'What certifications and tools will I learn?',
    a: '12+ industry-recognized certifications across your chosen functional track. Tools include business spreadsheet software, reporting & dashboard tools, CRM platforms, HR management applications, digital advertising dashboards, and workflow automation engines.',
  },
  {
    q: 'Is the curriculum recognized? Can I pursue higher studies after this?',
    a: 'Yes. The Practical BBA curriculum is structured as per Savitribai Phule Pune University (SPPU) guidelines, combining academic concepts with professional skill development. This makes it valid for further studies such as MBA and other PG programs.',
  },
  {
    q: 'How do I apply?',
    a: 'Fill the admission form on this page or WhatsApp us at 98909 59990. Our counsellor will call within 24 hours and guide you through the process. No application fee.',
  },
  {
    q: 'Where is the PES Training Centre for Practical BBA?',
    a: 'Practical BBA and BBA-IB are run at our Practical EduSkills Head Office: 3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune – 411052. Call or WhatsApp 98909 59990 for exact directions.',
  },
];

const FAQS_MR = [
  {
    q: 'Practical BBA म्हणजे काय आणि सामान्य BBA पेक्षा कसे वेगळे आहे?',
    a: 'Practical BBA — Strategic Operations & Business Administration हा आमच्या Head Office, Pune येथे चालणारा skill-oriented undergraduate program आहे. सामान्य BBA मध्ये फक्त theory असते, तर या program मध्ये SPPU-संलग्न अभ्यासक्रमासोबत 2 पूर्ण वर्षांचे On-the-Job Training (OJT), 12+ industry certifications आणि Marketing, HR, CRM, Operations किंवा Analytics मधील functional specialization समाविष्ट आहे.',
  },
  {
    q: 'Practical BBA आणि Practical BBA-IB यांच्यात काय फरक आहे?',
    a: 'Practical BBA मध्ये core business functions — Management, Marketing, HR, CRM आणि Analytics — यावर भर असतो, जो domestic corporate roles साठी तयार करतो. Practical BBA-IB (International Business) मध्ये Import-Export, Cross-Culture Negotiation, Global Digital Marketing आणि International Business Laws समाविष्ट आहे — जे global trade आणि Dubai placement संधींसाठी तयार करते.',
  },
  {
    q: 'Internship, OJT आणि Apprenticeship यांच्यात काय फरक आहे?',
    a: 'Internship अल्पकालीन (1–3 महिने), mostly observation, पैसे नाहीत किंवा खूप कमी. OJT (On-the-Job Training) जास्त कालावधीचे आणि structured असते — Practical BBA मध्ये हे 2nd Year पासून 2 पूर्ण वर्षे चालते, ज्यात real operational experience आणि stipend support मिळतो. Apprenticeship म्हणजे Government-registered contract Apprenticeship Act 1961 अंतर्गत. PES BBA पदवीतच genuine OJT समाविष्ट करते — फक्त short, unpaid internship नाही.',
  },
  {
    q: 'कुठल्या शाखेचे विद्यार्थी प्रवेश घेऊ शकतात?',
    a: 'Science, Commerce किंवा Arts — कुठल्याही शाखेतून 12वी (HSC) उत्तीर्ण विद्यार्थी Practical BBA किंवा BBA-IB साठी अर्ज करू शकतात. कोणताही entrance exam नाही.',
  },
  {
    q: 'OJT कधी सुरू होतो आणि stipend मिळतो का?',
    a: 'On-the-Job Training Year 2 पासून सुरू होतो आणि Year 3 पर्यंत चालतो — तुमच्या निवडलेल्या corporate track मध्ये 2 पूर्ण वर्षांचे industry immersion. या काळात विद्यार्थ्यांना stipend support मिळतो — शिकता शिकता कमवता.',
  },
  {
    q: 'Practical BBA किंवा BBA-IB नंतर कुठले jobs मिळतात?',
    a: 'Practical BBA: HR Executive, Marketing Manager, Operations Coordinator, CRM Manager, Business Analyst (₹2.5–7 LPA). Practical BBA-IB: Import-Export Manager, International Sales Executive, Global Trade Analyst, Supply Chain Specialist (₹3–7 LPA) — उत्तम विद्यार्थ्यांसाठी Dubai placement पथ.',
  },
  {
    q: 'कुठले certifications आणि tools शिकता येतात?',
    a: 'तुमच्या निवडलेल्या functional track मध्ये 12+ industry-recognized certifications. Tools मध्ये business spreadsheet software, reporting & dashboard tools, CRM platforms, HR management applications, digital advertising dashboards आणि workflow automation engines समाविष्ट आहेत.',
  },
  {
    q: 'हा अभ्यासक्रम मान्यताप्राप्त आहे का? यानंतर higher studies करता येतील का?',
    a: 'हो. Practical BBA अभ्यासक्रम सावित्रीबाई फुले पुणे विद्यापीठ (SPPU) च्या guidelines नुसार रचलेला आहे, ज्यात academic concepts आणि professional skill development दोन्ही एकत्र आहेत. त्यामुळे MBA आणि इतर PG programs साठी valid आहे.',
  },
  {
    q: 'प्रवेश कसा घ्यायचा?',
    a: 'या page वरील form भरा किंवा 98909 59990 वर WhatsApp करा. आमचा counsellor 24 तासांत संपर्क करेल. कोणताही application fee नाही.',
  },
  {
    q: 'Practical BBA साठी PES Training Centre कुठे आहे?',
    a: 'Practical BBA आणि BBA-IB आमच्या Practical EduSkills Head Office येथे चालतात: 3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune – 411052. नेमके directions साठी 98909 59990 वर call किंवा WhatsApp करा.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { lang } = useLanguage();
  const faqs = lang === 'mr' ? FAQS_MR : FAQS_EN;
  const heading = lang === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Asked Questions';
  const sub = lang === 'mr' ? 'तुमच्या मनातील प्रश्नांची उत्तरे' : 'Everything you need to know about Practical BBA & BBA-IB';

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">FAQ</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">{heading}</h2>
          <p className="text-gray-500 text-sm mt-2">{sub}</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.04 }}
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
