'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const FAQS_EN = [
  {
    q: 'What is Practical B.COM – Fintech & Digital Accounting at Baramati?',
    a: "Practical B.COM is a 3-year job-ready B.COM program at PES's College of Practical Commerce & Management, Vidyanagari MIDC, Baramati. You learn ZOHO, Tally Prime, Odoo ERP, GST filing, and Advanced Excel — along with 2 years of paid Apprenticeship starting from Second Year. You earn ₹8,000–₹10,000/month while studying and graduate with real work experience.",
  },
  {
    q: 'How is this different from a regular B.COM?',
    a: 'Regular B.COM is theory-only — no live tools, no work experience. Practical B.COM at Baramati includes live industry tools training, 2 years of Apprenticeship from SY B.COM, ₹8,000–₹10,000/month stipend, and 6+ industry certifications. You graduate job-ready, not just degree-ready.',
  },
  {
    q: 'What is Apprenticeship and how is it different from Internship?',
    a: 'Internship is short-term (1–3 months), mostly observation, with little or no payment. Apprenticeship is a Government-registered contract under the Apprenticeship Act 1961 — 2 years of real work, real salary (₹8,000–₹10,000/month), and genuine work experience. PES offers Government-registered Apprenticeship, not just a short internship.',
  },
  {
    q: 'When does Apprenticeship start and how much stipend will I get?',
    a: 'Apprenticeship starts from SY B.COM (Second Year). You are placed with a company and receive ₹8,000–₹10,000 per month — a real salary deposited in your account. By graduation you will have 2 full years of work experience.',
  },
  {
    q: 'What tools and software will I learn?',
    a: 'ZOHO CRM & Books, Tally Prime, Odoo ERP, GST Filing Portal, Advanced Excel & MIS reporting, Upwork (freelancing), and digital accounting tools.',
  },
  {
    q: 'What certifications will I receive?',
    a: '6+ industry-recognized certifications: Tally Prime, GST Practitioner, Odoo ERP, Advanced Excel, ZOHO, and more — recognized by employers across India.',
  },
  {
    q: 'What jobs can I get after this course?',
    a: 'Accounts Executive, GST Consultant, Finance Executive, Digital Accountant, ERP Specialist, CA Article, Freelance Bookkeeper. Starting salaries ₹2.5–₹6 LPA.',
  },
  {
    q: 'Which stream students can apply?',
    a: '12th pass students from Commerce, Arts, or Science. No entrance exam required.',
  },
  {
    q: 'How do I apply?',
    a: 'Fill the admission form on this page or WhatsApp us at +91 96893 48709. Our counsellor will call within 24 hours. No application fee.',
  },
  {
    q: 'Where is the PES training centre in Baramati?',
    a: 'PES College of Practical Commerce & Management is located at Pencil Square Building, Vidyanagari MIDC, Near Mahindra Showroom, Baramati. WhatsApp +91 96893 48709 for exact directions.',
  },
];

const FAQS_MR = [
  {
    q: 'बारामती मध्ये Practical B.COM – Fintech & Digital Accounting म्हणजे काय?',
    a: 'Practical B.COM हा 3 वर्षांचा job-ready B.COM program आहे जो PES च्या College of Practical Commerce & Management, Vidyanagari MIDC, Baramati येथे आहे. तुम्ही ZOHO, Tally Prime, Odoo ERP, GST filing, Advanced Excel शिकता — आणि SY B.COM पासूनच 2 वर्षांचे Paid Apprenticeship मिळते. शिकत असताना ₹8,000–₹10,000/महिना कमवता आणि पदवीसोबत real work experience मिळते.',
  },
  {
    q: 'हे सामान्य B.COM पेक्षा कसे वेगळे आहे?',
    a: 'सामान्य B.COM मध्ये फक्त theory — live tools नाहीत, work experience नाही. बारामतीच्या Practical B.COM मध्ये: live industry tools training, SY B.COM पासून 2 वर्षांचे Apprenticeship, ₹8,000–₹10,000/महिना stipend आणि 6+ industry certifications. तुम्ही job-ready म्हणून पदवी मिळवता — फक्त degree-ready नाही.',
  },
  {
    q: 'Apprenticeship म्हणजे काय आणि Internship पेक्षा वेगळे कसे?',
    a: 'Internship अल्पकालीन (1–3 महिने), mostly observation, पैसे नाहीत किंवा खूप कमी. Apprenticeship म्हणजे Government-registered contract Apprenticeship Act 1961 अंतर्गत — 2 वर्षे real work, खरा पगार (₹8,000–₹10,000/महिना), genuine work experience. PES मध्ये Government-registered Apprenticeship आहे — फक्त short internship नाही.',
  },
  {
    q: 'Apprenticeship कधी सुरू होतो आणि किती stipend मिळतो?',
    a: 'Apprenticeship SY B.COM (Second Year) पासून सुरू होतो. तुम्हाला company मध्ये place केले जाते आणि ₹8,000–₹10,000/महिना मिळतो — खरा पगार, थेट account मध्ये. पदवी मिळेपर्यंत 2 वर्षांचा पूर्ण work experience.',
  },
  {
    q: 'कुठले tools आणि software शिकता येतात?',
    a: 'ZOHO CRM & Books, Tally Prime, Odoo ERP, GST Filing Portal, Advanced Excel & MIS reporting, Upwork (freelancing), आणि digital accounting tools.',
  },
  {
    q: 'कुठले certifications मिळतात?',
    a: '6+ industry-recognized certifications: Tally Prime, GST Practitioner, Odoo ERP, Advanced Excel, ZOHO, आणि इतर — भारतभरातील employers ओळखतात.',
  },
  {
    q: 'या कोर्स नंतर कुठले jobs मिळतात?',
    a: 'Accounts Executive, GST Consultant, Finance Executive, Digital Accountant, ERP Specialist, CA Article, Freelance Bookkeeper. सुरुवातीचा पगार ₹2.5–₹6 LPA.',
  },
  {
    q: 'कुठल्या शाखेचे विद्यार्थी प्रवेश घेऊ शकतात?',
    a: 'Commerce, Arts किंवा Science — कुठल्याही शाखेतून 12वी उत्तीर्ण. Entrance exam नाही.',
  },
  {
    q: 'प्रवेश कसा घ्यायचा?',
    a: 'या page वरील form भरा किंवा +91 96893 48709 वर WhatsApp करा. आमचा counsellor 24 तासांत संपर्क करेल. कोणताही application fee नाही.',
  },
  {
    q: 'बारामती मधील PES Training Centre कुठे आहे?',
    a: 'PES College of Practical Commerce & Management, Pencil Square Building, Vidyanagari MIDC, Near Mahindra Showroom, Baramati येथे आहे. नेमके directions साठी +91 96893 48709 वर WhatsApp करा.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLanguage();
  const faqs = lang === 'mr' ? FAQS_MR : FAQS_EN;
  const heading = lang === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Asked Questions';

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">FAQs</span>
          <h2 className="text-[#0B1F5C] text-3xl md:text-4xl font-black mt-1">{heading}</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
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
