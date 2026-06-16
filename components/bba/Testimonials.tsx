'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sanmit Shah',
    role: 'Founder & CEO, Practical EduSkills',
    quote: 'Practical BBA is not just a degree program — it is a career launchpad. We built this curriculum with industry, for industry. Every student who walks out is ready to contribute from Day 1, in HR, Marketing, Operations, CRM, or Analytics.',
    marathi: 'आमचे ध्येय आहे — प्रत्येक विद्यार्थ्याला रोजगारक्षम बनवणे.',
    initials: 'SS',
    color: '#0B1F5C',
  },
  {
    name: 'BBA-IB Student',
    role: 'Year 3, International Business Track',
    quote: 'By the time I complete my degree I will already have 2 years of real corporate work experience, cross-cultural negotiation skills, and 12 industry certifications. No other program prepares you for global business like this.',
    marathi: 'डिग्री + अनुभव + ग्लोबल एक्सपोजर — सगळं एकत्र!',
    initials: 'BI',
    color: '#6366F1',
  },
  {
    name: 'Parent, Practical BBA',
    role: 'Parent Testimonial',
    quote: 'My son receives stipend support during his OJT and has already built dashboards and managed real CRM pipelines. Watching him grow into a confident professional before even graduating gives us complete peace of mind.',
    marathi: 'शिकताना कमाई — यापेक्षा काय हवे?',
    initials: 'PB',
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <span className="text-[#F5B400] font-bold text-xs uppercase tracking-widest">Voices</span>
          <h2 className="text-[#0B1F5C] text-2xl md:text-3xl font-black mt-1">What Students & Leaders Say</h2>
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
