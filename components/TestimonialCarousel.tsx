'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Sharma',
    course: 'Practical B.Com',
    company: 'Deloitte India',
    quote: 'PES gave me practical skills that college never taught. I got placed in Deloitte during OJT. The Tally and Excel training was a game changer!',
    avatar: '/brand/student-success.jpg',
    rating: 5,
  },
  {
    name: 'Rahul Patil',
    course: 'Applied MBA',
    company: 'Sales Manager, Pune',
    quote: 'The evening MBA was perfect for me as a working professional. The 5 specialisation tracks helped me choose exactly what I wanted — Business Development!',
    avatar: '/brand/student-success.jpg',
    rating: 5,
  },
  {
    name: 'Sneha Kulkarni',
    course: 'Practical BBA–IB',
    company: 'Dubai, UAE',
    quote: 'I never imagined getting a job in Dubai fresh out of college. PES made it happen with their International Business program. Forever grateful!',
    avatar: '/brand/student-success.jpg',
    rating: 5,
  },
  {
    name: 'Amit Desai',
    course: 'CA Article Placement',
    company: 'Top CA Firm, Pune',
    quote: 'Got placed in a top CA firm within 1 month of joining the CA Article program. The Tally and GST training was exactly what firms look for.',
    avatar: '/brand/student-success.jpg',
    rating: 5,
  },
  {
    name: 'Kavya Joshi',
    course: 'B.Sc. AI & Digital Automation',
    company: 'Digital Marketing Agency',
    quote: 'Learning AI tools and automation from Day 1 was mind-blowing. I built my own portfolio and got hired before completing the course!',
    avatar: '/brand/student-success.jpg',
    rating: 5,
  },
  {
    name: 'Rohan Sawant',
    course: 'Practical BBA',
    company: 'HR Executive, MNC',
    quote: 'The mock interviews and internship drive at PES are incredible. I had 3 job offers before graduating. The faculty mentored us like family.',
    avatar: '/brand/student-success.jpg',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="py-14 md:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fefce8 0%, #fff7ed 100%)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Success Stories</span>
          <h2 className="font-serif text-navy text-2xl md:text-4xl font-bold mt-1 mb-2">
            Our Students&apos; Journeys
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Real students. Real placements. Real transformations.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="testimonial-card rounded-2xl p-6 border border-gold/20 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="text-text-dark text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gold/15">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.course}</div>
                  <div className="text-gold text-xs font-medium">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile auto-carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="testimonial-card rounded-2xl p-6 border border-gold/20 shadow-sm mx-2"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonials[current].rating)].map((_, j) => (
                <span key={j} className="text-gold">★</span>
              ))}
            </div>
            <p className="text-text-dark text-sm leading-relaxed mb-4 italic">&ldquo;{testimonials[current].quote}&rdquo;</p>
            <div className="flex items-center gap-3 pt-4 border-t border-gold/15">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold flex-shrink-0">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-navy text-sm">{testimonials[current].name}</div>
                <div className="text-text-muted text-xs">{testimonials[current].course}</div>
                <div className="text-gold text-xs font-medium">{testimonials[current].company}</div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-navy w-5' : 'bg-navy/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
