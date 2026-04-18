'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/courses';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function CoursesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLanguage();
  const tr = t[lang].courses;
  const filters = tr.filters as readonly string[];

  const filtered = courses.filter((c) => {
    if (activeIndex === 0) return true;
    if (activeIndex === 1) return c.duration === '3 Years';
    if (activeIndex === 2) return c.duration === '6 Months' || c.duration === '1 Month';
    if (activeIndex === 3) return c.duration === '2 Years';
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold font-semibold text-sm uppercase tracking-widest">
            {tr.label}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">
            {tr.programs}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-base md:text-lg">
            {tr.subPrograms}
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {filters.map((f, i) => (
            <button key={f} onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeIndex === i ? 'bg-navy text-white' : 'bg-bg-light text-navy hover:bg-navy/10'
              }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Courses grid */}
      <section className="py-10 md:py-14 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} detailed />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-10">{tr.noMatch}</p>
          )}
        </div>
      </section>
    </>
  );
}
