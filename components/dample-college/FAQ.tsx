'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const FAQS_EN = [
  {
    q: 'What is Practical B.COM – Fintech & Digital Accounting?',
    a: 'Practical B.COM is a 3-year B.COM program at Marathwada Mitra Mandal\'s College of Commerce (MMCC), Pune, where you learn live industry tools — ZOHO, Tally Prime, Odoo ERP, GST filing, Advanced Excel — alongside your regular B.COM syllabus. Unlike a regular B.COM, this program gives you 2 years of paid Apprenticeship (On-the-Job Training) starting from Second Year, so you graduate with real experience and a monthly stipend.',
  },
  {
    q: 'How is this different from a regular B.COM?',
    a: 'Regular B.COM gives you only theory — no job-ready skills, no work experience. Practical B.COM at MMCC includes live industry tools training, 2 years of Apprenticeship from SY B.COM, ₹8,000–₹10,000/month stipend, and 6+ industry certifications. You graduate as a finance professional, not just a degree holder.',
  },
  {
    q: 'What is the difference between Internship, OJT, and Apprenticeship?',
    a: 'Internship: short-term (1–3 months), mostly observation, little or no payment. OJT (On-the-Job Training): 3–6 months at a company, partially structured, sometimes paid. Apprenticeship: Government-registered contract under the Apprenticeship Act 1961 — 2 full years of real work with a fixed stipend of ₹8,000–₹10,000/month. PES offers Government-registered Apprenticeship — not just a short internship.',
  },
  {
    q: 'When does Apprenticeship start and how much stipend will I get?',
    a: 'Apprenticeship starts from SY B.COM (Second Year). You are placed with an industry partner and receive ₹8,000–₹10,000 per month — this is a real salary for real work, not a scholarship, deposited directly into your account. By graduation you will have 2 full years of work experience on your resume.',
  },
  {
    q: 'What tools and software will I learn?',
    a: 'ZOHO CRM & Books, Tally Prime, Odoo ERP, GST Filing Portal, Advanced Excel & MIS reporting, Upwork (freelancing), and digital accounting tools. These are the exact tools companies use every day.',
  },
  {
    q: 'What certifications will I receive?',
    a: '6+ industry-recognized certifications: Tally Prime, GST Practitioner, Odoo ERP, Advanced Excel, ZOHO, and more. These certifications are recognized by employers across India and add significant value to your resume.',
  },
  {
    q: 'What jobs can I get after Practical B.COM?',
    a: 'Accounts Executive, GST Consultant, Finance Executive, Fintech Executive, ERP Specialist, Digital Accountant, CA Article, Freelance Bookkeeper. Starting salaries range from ₹2.5 LPA to ₹6 LPA depending on role and company.',
  },
  {
    q: 'Which stream students can apply?',
    a: '12th pass students from Commerce, Arts, or Science streams can apply. No entrance exam is required.',
  },
  {
    q: 'Can I pursue MBA after this degree?',
    a: 'Yes. The B.COM degree is affiliated to a recognized university, making it fully valid for MBA, M.COM, and other PG admissions, as well as government job eligibility.',
  },
  {
    q: 'How do I apply?',
    a: 'Fill the admission form on this page or WhatsApp us at +91 90497 93232. Our counsellor will call within 24 hours and guide you through the process. No application fee.',
  },
  {
    q: 'Where is the PES training centre at Marathwada Mitra Mandal\'s College of Commerce?',
    a: 'The PES training centre is located at Marathwada Mitra Mandal\'s College of Commerce (MMCC), Pune. WhatsApp +91 90497 93232 for the exact location and directions.',
  },
];

const FAQS_MR = [
  {
    q: 'Practical B.COM – Fintech & Digital Accounting म्हणजे काय?',
    a: 'Practical B.COM हा 3 वर्षांचा B.COM program आहे जो Marathwada Mitra Mandal\'s College of Commerce (MMCC), Pune येथे आहे. यामध्ये तुम्ही live industry tools शिकता — ZOHO, Tally Prime, Odoo ERP, GST filing, Advanced Excel — नियमित B.COM syllabus सोबत. सामान्य B.COM पेक्षा वेगळे म्हणजे SY B.COM पासूनच 2 वर्षांचे Paid Apprenticeship मिळते — पदवीसोबत real experience आणि monthly stipend.',
  },
  {
    q: 'हे सामान्य B.COM पेक्षा कसे वेगळे आहे?',
    a: 'सामान्य B.COM मध्ये फक्त theory — job-ready skills नाहीत, work experience नाही. MMCC च्या Practical B.COM मध्ये: live industry tools training, SY B.COM पासून 2 वर्षांचे Apprenticeship, ₹8,000–₹10,000/महिना stipend आणि 6+ industry certifications. तुम्ही finance professional म्हणून पदवी मिळवता — फक्त degree holder नाही.',
  },
  {
    q: 'Internship, OJT आणि Apprenticeship यांच्यात काय फरक आहे?',
    a: 'Internship: अल्पकालीन (1–3 महिने), mostly observation, पैसे नाहीत किंवा खूप कमी. OJT: 3–6 महिने company मध्ये काम, partial structure, कधीकधी पैसे. Apprenticeship: Government-registered contract Apprenticeship Act 1961 अंतर्गत — 2 वर्षे real work, fixed stipend ₹8,000–₹10,000/महिना. PES मध्ये Government-registered Apprenticeship आहे — फक्त short internship नाही.',
  },
  {
    q: 'Apprenticeship कधी सुरू होतो आणि किती stipend मिळतो?',
    a: 'Apprenticeship SY B.COM (Second Year) पासून सुरू होतो. तुम्हाला industry partner कडे place केले जाते आणि ₹8,000–₹10,000/महिना मिळतो — हा खरा पगार आहे, scholarship नाही, थेट account मध्ये. पदवी मिळेपर्यंत resume वर 2 वर्षांचा पूर्ण work experience असेल.',
  },
  {
    q: 'कुठले tools आणि software शिकता येतात?',
    a: 'ZOHO CRM & Books, Tally Prime, Odoo ERP, GST Filing Portal, Advanced Excel & MIS reporting, Upwork (freelancing), आणि digital accounting tools. या सगळ्या tools कंपन्या रोज वापरतात.',
  },
  {
    q: 'कुठले certifications मिळतात?',
    a: '6+ industry-recognized certifications: Tally Prime, GST Practitioner, Odoo ERP, Advanced Excel, ZOHO, आणि इतर. हे certifications भारतभरातील employers ओळखतात आणि resume ला खूप मूल्य देतात.',
  },
  {
    q: 'Practical B.COM नंतर कुठले jobs मिळतात?',
    a: 'Accounts Executive, GST Consultant, Finance Executive, Fintech Executive, ERP Specialist, Digital Accountant, CA Article, Freelance Bookkeeper. सुरुवातीचा पगार ₹2.5 ते ₹6 LPA, role आणि company नुसार.',
  },
  {
    q: 'कुठल्या शाखेचे विद्यार्थी प्रवेश घेऊ शकतात?',
    a: 'Commerce, Arts किंवा Science — कुठल्याही शाखेतून 12वी उत्तीर्ण विद्यार्थी प्रवेश घेऊ शकतात. Entrance exam नाही.',
  },
  {
    q: 'या पदवीनंतर MBA करता येईल का?',
    a: 'हो. B.COM पदवी मान्यताप्राप्त विद्यापीठाशी संलग्न असल्यामुळे MBA, M.COM आणि इतर PG programs साठी पूर्णपणे valid आहे. सरकारी नोकरीसाठीही ग्राह्य आहे.',
  },
  {
    q: 'प्रवेश कसा घ्यायचा?',
    a: 'या page वरील form भरा किंवा +91 90497 93232 वर WhatsApp करा. आमचा counsellor 24 तासांत संपर्क करेल. कोणताही application fee नाही.',
  },
  {
    q: 'Marathwada Mitra Mandal\'s College of Commerce मधील PES Training Centre कुठे आहे?',
    a: 'PES Training Centre Marathwada Mitra Mandal\'s College of Commerce (MMCC), Pune येथे आहे. नेमके location आणि directions साठी +91 90497 93232 वर WhatsApp करा.',
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
