'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const FAQS_EN = [
  {
    q: 'What is Practical EduSkills (PES)?',
    a: 'Practical EduSkills (PES) is a 21-year-old vocational education company that partners with leading colleges in Pune and Baramati to offer industry-embedded degree programs. PES programs combine SPPU-affiliated degrees with 1.5–2 years of paid Government-registered Apprenticeship, 6–12+ industry certifications, and guaranteed placement support. ISO Certified. NSDC Skill Centre.',
  },
  {
    q: 'What courses does PES offer?',
    a: 'PES offers: (1) B.Sc. AI & Business Automation — 3 years, SPPU degree, at Modern College & TJ College; (2) B.Com Accounting & Business Practices (AEDP) — 3 years, SPPU degree, at Modern College & TJ College; (3) Practical B.COM Fintech & Digital Accounting — 3 years, at MMCC Pune & Baramati campus. All programs include Apprenticeship with stipend.',
  },
  {
    q: 'Which university gives the degree? Is it valid for government jobs and higher studies?',
    a: 'Degrees at Modern College and TJ College are affiliated to Savitribai Phule Pune University (SPPU) — a fully recognized state government university. Valid for all government jobs, MBA, MSc, M.Com, and PG programs. NAAC accredited colleges. Your PES degree is equal to any other SPPU degree.',
  },
  {
    q: 'What is an Apprenticeship Embedded Degree Program (AEDP)?',
    a: "AEDP means Government-registered Apprenticeship is embedded into the degree itself — not an optional add-on. Students work with real industry partners from Year 2, earn a monthly stipend of ₹8,000–₹12,000, and complete 1.5 years of practical training — all while earning their SPPU degree. This is PES's flagship model.",
  },
  {
    q: 'What is the difference between Internship, OJT, and Apprenticeship?',
    a: 'Internship is short-term (1–3 months), mostly observation-based, with little or no payment. OJT (On-the-Job Training) involves working at a company for 3–6 months with partial structure, sometimes paid. Apprenticeship is a Government-registered contract under the Apprenticeship Act 1961 — 1.5 to 2 years of real work with a fixed monthly stipend of ₹8,000–₹12,000. PES offers Government-registered Apprenticeship — not just a short internship like most other colleges.',
  },
  {
    q: 'Which stream students can apply for PES courses?',
    a: 'Any student who has passed 12th (HSC/SSC) from any stream can apply. B.Sc. AI is best for Science and Commerce students. B.Com programs are open to Commerce, Arts, and Science students. No entrance exam is required for any PES program.',
  },
  {
    q: 'When does Apprenticeship start and what stipend do I get?',
    a: 'Apprenticeship starts from Second Year (Year 2). Industry partners pay ₹8,000–₹12,000 per month — directly to your bank account. This is a real salary, not a scholarship. By graduation, you have 1.5–2 years of paid work experience on your resume.',
  },
  {
    q: 'What jobs can I get after a PES degree?',
    a: 'B.Sc. AI graduates: AI Executive, Data Analyst, Business Automation Specialist, Cloud Support Executive — ₹3–₹8 LPA. B.Com / Practical B.COM graduates: Accounts Executive, GST Consultant, Finance Executive, CA Article, Fintech Executive, ERP Specialist, Digital Accountant — ₹2.5–₹6 LPA. Top performers get Dubai International Placement opportunities.',
  },
  {
    q: 'What certifications will I receive?',
    a: 'B.Sc. AI: 12+ certifications — Python, AI/ML tools, Cloud Platforms (AWS/Azure), Digital Marketing, Business Automation. B.Com AEDP: 12+ certifications — Tally Prime, GST Practitioner, Advanced Excel, AI Accounting tools. Practical B.COM: 6+ certifications — Tally Prime, GST, Odoo ERP, ZOHO, Advanced Excel, Upwork.',
  },
  {
    q: 'Is there placement support after graduation?',
    a: 'Yes. PES has a dedicated placement cell with 1000+ hiring partners across India. Resume building, interview coaching, and aptitude training begin from Year 1. Most students receive job offers before graduation. 2000+ students have been placed over 21 years — in CA firms, corporates, and international companies.',
  },
  {
    q: 'What are the Dubai placement opportunities?',
    a: 'Top-performing students get opportunities to work in Dubai with international companies. PES has been sending successful Dubai placement batches since 2012. This opportunity is open to students from all PES-partnered centers.',
  },
  {
    q: 'Can I pursue higher studies (MBA/MSc) after a PES degree?',
    a: 'Yes. SPPU-affiliated degrees are fully valid for all PG admissions — MBA, MSc, M.Com — and government job eligibility. Your PES degree carries the same weight as any other SPPU degree.',
  },
  {
    q: 'What is the admission process and eligibility?',
    a: 'Eligibility: Passed 12th (any stream). Process: Fill the inquiry form or call/WhatsApp us → Free counselling call within 24 hours → Document verification → Admission confirmed. No entrance exam. No application fee.',
  },
  {
    q: 'Where are the PES training centres located?',
    a: 'PES has 4 training centres: (1) Modern College of Arts, Science & Commerce, Ganeshkhind, Pune; (2) Tikaram Jagannath (TJ) College, 491 Elphinstone Road, Kirkee, Pune; (3) Marathwada Mitra Mandal\'s College of Commerce (MMCC), Pune; (4) College of Practical Commerce & Management, Vidyanagari MIDC, Baramati. Call +91-98909-59990 for directions to any centre.',
  },
  {
    q: 'How is PES different from other colleges?',
    a: 'Most colleges give you theory + a short internship. PES gives you a recognized SPPU degree + 1.5–2 years of Government-registered Apprenticeship + ₹8,000–₹15,000/month stipend + 6–12+ industry certifications + dedicated placement support — all in one integrated program. You graduate with real work experience, real earnings, and a valid degree.',
  },
];

const FAQS_MR = [
  {
    q: 'Practical EduSkills (PES) म्हणजे काय?',
    a: 'Practical EduSkills (PES) ही 21 वर्षे जुनी व्यावसायिक शिक्षण संस्था आहे जी पुणे आणि बारामती मधील अग्रगण्य colleges सोबत भागीदारी करून industry-embedded degree programs देते. PES programs मध्ये SPPU-संलग्न पदवी + 1.5–2 वर्षांचे Paid Government-registered Apprenticeship + 6–12+ industry certifications + placement support समाविष्ट आहे. ISO Certified. NSDC Skill Centre.',
  },
  {
    q: 'PES मध्ये कुठले courses आहेत?',
    a: 'PES देतात: (1) B.Sc. AI & Business Automation — 3 वर्षे, SPPU पदवी, Modern College व TJ College येथे; (2) B.Com Accounting & Business Practices (AEDP) — 3 वर्षे, SPPU पदवी, Modern College व TJ College येथे; (3) Practical B.COM Fintech & Digital Accounting — 3 वर्षे, MMCC Pune व Baramati campus येथे. सर्व programs मध्ये stipend सह Apprenticeship समाविष्ट आहे.',
  },
  {
    q: 'कुठल्या विद्यापीठाची पदवी मिळते? सरकारी नोकरी आणि higher studies साठी valid आहे का?',
    a: 'Modern College आणि TJ College मधील degrees सावित्रीबाई फुले पुणे विद्यापीठ (SPPU) शी संलग्न आहेत — पूर्णतः मान्यताप्राप्त राज्य सरकारी विद्यापीठ. सरकारी नोकऱ्या, MBA, MSc, M.Com आणि सर्व PG programs साठी valid. NAAC accredited colleges. PES पदवी कुठल्याही SPPU पदवी इतकीच ग्राह्य आहे.',
  },
  {
    q: 'AEDP म्हणजे काय?',
    a: 'AEDP म्हणजे Apprenticeship Embedded Degree Program — Government-registered Apprenticeship थेट पदवीतच समाविष्ट आहे. 2nd Year पासून विद्यार्थी खऱ्या industry partners कडे काम करतात, ₹8,000–₹12,000/महिना stipend मिळवतात आणि 1.5 वर्षांचे practical training पूर्ण करतात — सगळं SPPU पदवी मिळवताना. हे PES चे flagship model आहे.',
  },
  {
    q: 'Internship, OJT आणि Apprenticeship यांच्यात काय फरक आहे?',
    a: 'Internship: अल्पकालीन (1–3 महिने), mostly observation, पैसे नाहीत किंवा खूप कमी. OJT: 3–6 महिने company मध्ये काम, partial structure, कधीकधी पैसे. Apprenticeship: Government-registered contract Apprenticeship Act 1961 अंतर्गत — 1.5 ते 2 वर्षे real work, fixed stipend ₹8,000–₹12,000/महिना. PES मध्ये Government-registered Apprenticeship आहे — इतर colleges च्या short internship पेक्षा पूर्णपणे वेगळे.',
  },
  {
    q: 'PES courses साठी कुठल्या शाखेचे विद्यार्थी अर्ज करू शकतात?',
    a: 'कुठल्याही शाखेतून 12वी उत्तीर्ण विद्यार्थी अर्ज करू शकतात. B.Sc. AI Science आणि Commerce साठी उत्तम. B.Com programs Commerce, Arts आणि Science — सगळ्यांसाठी खुले. कुठल्याही PES program साठी entrance exam नाही.',
  },
  {
    q: 'Apprenticeship कधी सुरू होतो आणि किती stipend मिळतो?',
    a: 'Apprenticeship 2nd Year (Second Year) पासून सुरू होतो. Industry partners तुम्हाला ₹8,000–₹12,000/महिना देतात — थेट bank account मध्ये. हा खरा पगार आहे, scholarship नाही. पदवी मिळेपर्यंत resume वर 1.5–2 वर्षांचा paid work experience असेल.',
  },
  {
    q: 'PES पदवीनंतर कुठले jobs मिळतात?',
    a: 'B.Sc. AI: AI Executive, Data Analyst, Business Automation Specialist, Cloud Support Executive — ₹3–₹8 LPA. B.Com / Practical B.COM: Accounts Executive, GST Consultant, Finance Executive, CA Article, Fintech Executive, ERP Specialist, Digital Accountant — ₹2.5–₹6 LPA. उत्तम विद्यार्थ्यांना Dubai International Placement संधी मिळते.',
  },
  {
    q: 'कुठले certifications मिळतात?',
    a: 'B.Sc. AI: 12+ certifications — Python, AI/ML tools, Cloud Platforms (AWS/Azure), Digital Marketing, Business Automation. B.Com AEDP: 12+ certifications — Tally Prime, GST Practitioner, Advanced Excel, AI Accounting tools. Practical B.COM: 6+ certifications — Tally Prime, GST, Odoo ERP, ZOHO, Advanced Excel, Upwork.',
  },
  {
    q: 'Placement support मिळतो का?',
    a: 'हो. PES कडे 1000+ hiring partners सह dedicated placement cell आहे. Resume building, interview coaching आणि aptitude training Year 1 पासूनच सुरू होते. बहुतेक विद्यार्थ्यांना पदवी मिळण्याआधीच job offer मिळते. 21 वर्षांत 2000+ विद्यार्थी placed — CA firms, corporates आणि international companies मध्ये.',
  },
  {
    q: 'Dubai Placement opportunities म्हणजे काय?',
    a: 'उत्तम विद्यार्थ्यांना Dubai मधील international companies मध्ये placement मिळते. PES 2012 पासून यशस्वीरीत्या Dubai placement batches पाठवत आहे. ही संधी सर्व PES केंद्रांच्या विद्यार्थ्यांसाठी खुली आहे.',
  },
  {
    q: 'PES पदवीनंतर MBA किंवा MSc करता येईल का?',
    a: 'हो. SPPU-संलग्न पदवी MBA, MSc, M.Com आणि सर्व PG programs साठी पूर्णपणे valid आहे. सरकारी नोकरीसाठीही ग्राह्य आहे. PES पदवी इतर कुठल्याही SPPU पदवी इतकीच ग्राह्य आहे.',
  },
  {
    q: 'प्रवेश प्रक्रिया आणि पात्रता काय आहे?',
    a: 'पात्रता: 12वी उत्तीर्ण (कुठल्याही शाखेतून). प्रक्रिया: Inquiry form भरा किंवा call/WhatsApp करा → 24 तासांत मोफत counselling call → Document verification → Admission confirmed. Entrance exam नाही. Application fee नाही.',
  },
  {
    q: 'PES Training Centres कुठे आहेत?',
    a: 'PES चे 4 training centres आहेत: (1) Modern College of Arts, Science & Commerce, Ganeshkhind, Pune; (2) Tikaram Jagannath (TJ) College, 491 Elphinstone Road, Kirkee, Pune; (3) Marathwada Mitra Mandal\'s College of Commerce (MMCC), Pune; (4) College of Practical Commerce & Management, Vidyanagari MIDC, Baramati. कुठल्याही centre चे directions साठी +91-98909-59990 वर call करा.',
  },
  {
    q: 'PES इतर colleges पेक्षा कसे वेगळे आहे?',
    a: 'बहुतेक colleges theory + short internship देतात. PES देतात SPPU पदवी + 1.5–2 वर्षांचे Government-registered Apprenticeship + ₹8,000–₹15,000/महिना stipend + 6–12+ industry certifications + dedicated placement support — सगळं एकाच integrated program मध्ये. तुम्ही real work experience, real earnings आणि valid पदवीसह पदवीधर होता.',
  },
];

export default function MainFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLanguage();
  const faqs = lang === 'mr' ? FAQS_MR : FAQS_EN;
  const label = lang === 'mr' ? 'सामान्य प्रश्न' : 'Common Questions';
  const heading = lang === 'mr' ? 'तुमच्या मनातील सर्व प्रश्न' : 'Everything You Want to Know About PES';
  const sub = lang === 'mr'
    ? 'कोर्सेस, पदवी, Apprenticeship, placement — सगळ्या प्रश्नांची उत्तरे एकाच ठिकाणी'
    : 'Courses, degree, apprenticeship, placements — all answered in one place';

  return (
    <section className="py-14 md:py-20 bg-[#f8f9ff]">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">{label}</span>
          <h2 className="font-serif text-navy text-2xl md:text-4xl font-bold mt-1 mb-2">{heading}</h2>
          <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto">{sub}</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.03 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}>
                <span className="font-bold text-navy text-sm leading-snug">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                  <ChevronDown size={18} className="text-gold" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                    <p className="text-gray-600 text-sm leading-relaxed px-5 pb-5 border-t border-gray-100 pt-3">
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
