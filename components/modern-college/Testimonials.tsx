'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'B.Sc. AI Student, Year 2',
    quote: 'The OJT was a game-changer. I earned ₹10,000 a month while still in college and got hands-on AI experience that no classroom can give.',
    marathi: 'OJT मुळे माझा आत्मविश्वास खूप वाढला.',
    avatar: null,
    initials: 'PS',
    color: '#6366F1',
  },
  {
    name: 'Rahul Patil',
    role: 'B.Com AEDP Graduate, 2024',
    quote: 'I cleared my GST certification and got placed as a Finance Executive within 2 weeks of graduating. The placement support here is unmatched.',
    marathi: 'पदवीनंतर लगेच नोकरी मिळाली!',
    avatar: null,
    initials: 'RP',
    color: '#0B1F5C',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Parent of B.Sc. AI Student',
    quote: 'As a parent, I was worried about the job market. But seeing my daughter earn a stipend in Year 2 and get 3 job offers before graduation reassured me completely.',
    marathi: 'माझ्या मुलीचे भविष्य सुरक्षित आहे.',
    avatar: null,
    initials: 'SK',
    color: '#10B981',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Dr. Kharat Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl overflow-hidden mb-16 shadow-2xl"
          style={{ background: 'linear-gradient(135deg,#0B1F5C,#1a3a8f)' }}>
          <div className="flex flex-col md:flex-row items-center gap-0">
            <div className="md:w-64 flex-shrink-0">
              <div className="relative h-60 md:h-full md:min-h-[280px]">
                <Image src="/modern-college/dr-kharat.jpg" alt="Dr. Kharat" fill className="object-cover object-top" />
                <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top,#0B1F5C,transparent 60%)' }} />
              </div>
            </div>
            <div className="flex-1 p-7 md:p-10">
              <Quote size={36} className="text-[#F5B400] mb-4 opacity-70" />
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4">
                &ldquo;AEDP is not just a degree program — it is a career launchpad. We built this curriculum with industry, for industry. Every student who walks out of Modern College is ready to contribute from Day 1.&rdquo;
              </p>
              <p className="text-[#F5B400] text-sm devanagari mb-1">
                &ldquo;आमचे ध्येय आहे — प्रत्येक विद्यार्थ्याला रोजगारक्षम बनवणे.&rdquo;
              </p>
              <div className="mt-4">
                <p className="text-white font-black text-base">Dr. A. B. Kharat</p>
                <p className="text-white/60 text-xs">Principal, PES&apos; Modern College of Arts, Science and Commerce, Ganeshkhind, Pune</p>
              </div>
            </div>
          </div>
        </motion.div>

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
