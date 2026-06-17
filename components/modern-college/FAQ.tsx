'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const FAQS_EN = [
  {
    q: 'What programs are offered at Modern College under PES?',
    a: 'PES offers two AEDP programs at Modern College, Ganeshkhind, Pune: (1) B.Sc. AI & Business Automation — ideal for Science & Commerce students, and (2) B.Com Accounting & Business Practices — for Commerce & Arts students. Both are 3-year SPPU-affiliated degrees with 1.5 years of paid Apprenticeship (On-the-Job Training).',
  },
  {
    q: 'Which university gives the degree? Is it valid?',
    a: 'Both programs are affiliated to Savitribai Phule Pune University (SPPU) — a fully recognized state government university. The degree is valid for government jobs, MBA, MSc, M.Com, and all PG programs. Modern College is also NAAC accredited.',
  },
  {
    q: 'What is AEDP (Apprenticeship Embedded Degree Program)?',
    a: "AEDP means your Government-registered Apprenticeship is built directly into the degree — not an add-on. From Year 2, you work with a real industry partner, earn a monthly stipend of ₹8,000–₹12,000, and complete 1.5 years of practical training — all while earning your SPPU degree.",
  },
  {
    q: 'What is the difference between Internship, OJT, and Apprenticeship?',
    a: 'Internship: short-term (1–3 months), mostly observation, little or no payment. OJT (On-the-Job Training): 3–6 months at a company, partially structured, sometimes paid. Apprenticeship: Government-registered contract under the Apprenticeship Act 1961 — 1.5 to 2 years of real work with a fixed stipend of ₹8,000–₹12,000/month. PES offers Government-registered Apprenticeship — not just a short internship.',
  },
  {
    q: 'Which stream students can apply?',
    a: '12th pass students from any stream can apply. B.Sc. AI is ideal for Science and Commerce students. B.Com AEDP is open to Commerce and Arts students. No entrance exam is required for either program.',
  },
  {
    q: 'When does Apprenticeship start and what stipend do I get?',
    a: 'Apprenticeship starts from Year 2 (Second Year). You are placed with an industry partner and receive ₹8,000–₹12,000 per month — a real salary, not a scholarship, deposited directly into your account. By graduation you will have 1.5 years of paid work experience.',
  },
  {
    q: 'What jobs can I get after B.Sc. AI or B.Com AEDP?',
    a: 'B.Sc. AI graduates: AI Executive, Data Analyst, Business Automation Specialist, Cloud Support Executive — ₹3–₹8 LPA. B.Com AEDP graduates: Accounts Executive, GST Consultant, Finance Executive, CA Article, Banking Executive — ₹2.5–₹6 LPA. Top performers also get Dubai International Placement opportunities.',
  },
  {
    q: 'What certifications will I receive?',
    a: '12+ industry-recognized certifications including Python basics, AI/ML tools, Cloud Platforms (AWS/Azure basics), Tally ERP & Prime, GST Practitioner, Advanced Excel, Digital Marketing, and Business Automation tools — in addition to your SPPU degree.',
  },
  {
    q: 'Is there placement support after graduation?',
    a: 'Yes. PES has a dedicated placement cell with 1000+ hiring partners. Resume building, interview coaching, and aptitude training begin from Year 1. Most students receive job offers before graduation. 2000+ students have been placed over 21 years.',
  },
  {
    q: 'Can I pursue MBA or MSc after this degree?',
    a: 'Yes. Since the degree is SPPU-affiliated, it is fully valid for all PG admissions including MBA, MSc, M.Com, and government job eligibility — exactly like any other SPPU degree.',
  },
  {
    q: 'How do I apply?',
    a: 'Fill the admission form on this page or WhatsApp us at +91 79724 01596. Our counsellor will call within 24 hours and guide you through the process. No application fee.',
  },
  {
    q: 'Where is the PES training centre at Modern College?',
    a: 'The PES training centre is at Modern College of Arts, Science & Commerce, Ganeshkhind, Pune 411016. Easily accessible by bus and auto from Pune city. WhatsApp +91 79724 01596 for exact directions.',
  },
];

const FAQS_MR = [
  {
    q: 'Modern College मध्ये PES कुठले programs देतात?',
    a: 'PES Modern College, Ganeshkhind, Pune येथे दोन AEDP programs देतात: (1) B.Sc. AI & Business Automation — Science/Commerce विद्यार्थ्यांसाठी, आणि (2) B.Com Accounting & Business Practices — Commerce/Arts विद्यार्थ्यांसाठी. दोन्ही 3 वर्षांचे SPPU-संलग्न पदवी कार्यक्रम आहेत ज्यात 1.5 वर्षांचे Paid Apprenticeship समाविष्ट आहे.',
  },
  {
    q: 'कुठल्या विद्यापीठाची पदवी मिळते? ती valid आहे का?',
    a: 'दोन्ही programs सावित्रीबाई फुले पुणे विद्यापीठ (SPPU) शी संलग्न आहेत — पूर्णतः मान्यताप्राप्त राज्य सरकारी विद्यापीठ. ही पदवी सरकारी नोकऱ्या, MBA, MSc, M.Com आणि सर्व PG programs साठी valid आहे. Modern College हे NAAC accredited आहे.',
  },
  {
    q: 'AEDP म्हणजे काय?',
    a: 'AEDP म्हणजे Apprenticeship Embedded Degree Program — Government-registered Apprenticeship थेट पदवीतच समाविष्ट आहे. 2nd Year पासून तुम्ही खऱ्या industry partner कडे काम करता, ₹8,000–₹12,000/महिना stipend मिळवता आणि 1.5 वर्षांचे practical training पूर्ण करता — सगळं SPPU पदवी मिळवताना.',
  },
  {
    q: 'Internship, OJT आणि Apprenticeship यांच्यात काय फरक आहे?',
    a: 'Internship: अल्पकालीन (1–3 महिने), mostly observation, पैसे नाहीत किंवा खूप कमी. OJT: 3–6 महिने company मध्ये काम, partial structure, कधीकधी पैसे. Apprenticeship: Government-registered contract Apprenticeship Act 1961 अंतर्गत — 1.5 ते 2 वर्षे real work, fixed stipend ₹8,000–₹12,000/महिना. PES मध्ये Government-registered Apprenticeship आहे — फक्त short internship नाही.',
  },
  {
    q: 'कुठल्या शाखेचे विद्यार्थी प्रवेश घेऊ शकतात?',
    a: 'कुठल्याही शाखेतून 12वी उत्तीर्ण विद्यार्थी प्रवेश घेऊ शकतात. B.Sc. AI Science आणि Commerce साठी उत्तम आहे. B.Com AEDP Commerce आणि Arts साठी खुला आहे. कोणताही entrance exam नाही.',
  },
  {
    q: 'Apprenticeship कधी सुरू होतो आणि किती stipend मिळतो?',
    a: 'Apprenticeship 2nd Year (Second Year) पासून सुरू होतो. तुम्हाला industry partner कडे place केले जाते आणि ₹8,000–₹12,000/महिना मिळतो — हा खरा पगार आहे, scholarship नाही, थेट account मध्ये. पदवी मिळेपर्यंत 1.5 वर्षांचा paid work experience तयार होतो.',
  },
  {
    q: 'B.Sc. AI किंवा B.Com AEDP नंतर कुठले jobs मिळतात?',
    a: 'B.Sc. AI: AI Executive, Data Analyst, Business Automation Specialist, Cloud Support Executive — ₹3–₹8 LPA. B.Com AEDP: Accounts Executive, GST Consultant, Finance Executive, CA Article, Banking Executive — ₹2.5–₹6 LPA. उत्तम विद्यार्थ्यांना Dubai International Placement संधी मिळते.',
  },
  {
    q: 'कुठले certifications मिळतात?',
    a: '12+ industry-recognized certifications — Python basics, AI/ML tools, Cloud Platforms (AWS/Azure), Tally ERP & Prime, GST Practitioner, Advanced Excel, Digital Marketing, Business Automation tools — SPPU पदवीसोबत.',
  },
  {
    q: 'Placement मिळणार का?',
    a: 'हो. PES कडे 1000+ hiring partners आणि dedicated placement cell आहे. Resume building, interview coaching आणि aptitude training Year 1 पासूनच सुरू होते. बहुतेक विद्यार्थ्यांना पदवी मिळण्याआधीच job offer मिळते. 21 वर्षांत 2000+ विद्यार्थी placed.',
  },
  {
    q: 'या पदवीनंतर MBA किंवा MSc करता येईल का?',
    a: 'हो. SPPU-संलग्न पदवी असल्यामुळे MBA, MSc, M.Com आणि सर्व PG programs साठी पूर्णपणे valid आहे. सरकारी नोकरीसाठीही ग्राह्य आहे — इतर कुठल्याही SPPU पदवीसारखीच.',
  },
  {
    q: 'प्रवेश कसा घ्यायचा?',
    a: 'या page वरील form भरा किंवा +91 79724 01596 वर WhatsApp करा. आमचा counsellor 24 तासांत संपर्क करेल. कोणताही application fee नाही.',
  },
  {
    q: 'Modern College मधील PES Training Centre कुठे आहे?',
    a: 'PES Training Centre Modern College of Arts, Science & Commerce, Ganeshkhind, Pune 411016 येथे आहे. पुण्यातून bus आणि auto ने सहज पोहोचता येते. नेमके directions साठी +91 79724 01596 वर WhatsApp करा.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { lang } = useLanguage();
  const faqs = lang === 'mr' ? FAQS_MR : FAQS_EN;
  const heading = lang === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Asked Questions';
  const sub = lang === 'mr' ? 'तुमच्या मनातील प्रश्नांची उत्तरे' : 'Everything you need to know about our programs';

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
