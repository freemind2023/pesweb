'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Rahul Patil',
    role: 'B.Com Graduate, 2024',
    quote: 'I cleared my GST certification and got placed as a Finance Executive within 2 weeks of graduating. The SPPU degree gave me credibility and the skills gave me the job.',
    marathi: 'पदवीनंतर लगेच नोकरी मिळाली!',
    initials: 'RP',
    color: '#0B1F5C',
  },
  {
    name: 'Aditya Joshi',
    role: 'B.Com Student, Year 3',
    quote: 'By the time I complete my degree I will already have 1.5 years of real work experience, a valid SPPU certificate, and 12 industry certifications. No other college in Pune offers this.',
    marathi: 'डिग्री + अनुभव + सर्टिफिकेट — सगळं एकत्र!',
    initials: 'AJ',
    color: '#F5B400',
  },
  {
    name: 'Meghna Desai',
    role: 'Parent, B.Com Program',
    quote: 'My daughter earns a stipend during her OJT and has already cleared her Tally and GST certifications. Knowing the degree is from SPPU gave us complete confidence in the program.',
    marathi: 'शिकताना कमाई — यापेक्षा काय हवे?',
    initials: 'MD',
    color: '#10B981',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Student / Parent Testimonials */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Student Stories</span>
          <h2 className="text-[#0B1F5C] text-2xl md:text-3xl font-black mt-1">What Our Students Say</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={idx}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl text-center">
              <Quote size={28} className="mx-auto mb-4 opacity-30" style={{ color: TESTIMONIALS[idx].color }} />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 italic">
                &ldquo;{TESTIMONIALS[idx].quote}&rdquo;
              </p>
              <p className="text-gray-400 text-sm devanagari mb-6">{TESTIMONIALS[idx].marathi}</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm"
                  style={{ background: TESTIMONIALS[idx].color }}>
                  {TESTIMONIALS[idx].initials}
                </div>
                <div className="text-left">
                  <p className="font-black text-[#0B1F5C] text-sm">{TESTIMONIALS[idx].name}</p>
                  <p className="text-gray-400 text-xs">{TESTIMONIALS[idx].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#0B1F5C] transition-colors">
              <ChevronLeft size={18} className="text-gray-500" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === idx ? '#0B1F5C' : '#e5e7eb', transform: i === idx ? 'scale(1.3)' : 'scale(1)' }} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#0B1F5C] transition-colors">
              <ChevronRight size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
