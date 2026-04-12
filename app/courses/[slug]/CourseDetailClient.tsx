'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Users, ChevronRight, Check } from 'lucide-react';
import type { Course } from '@/lib/courses';
import InquiryForm from '@/components/InquiryForm';

export default function CourseDetailClient({ course }: { course: Course }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image src={course.image} alt={course.name} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/70 to-navy/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 md:pb-14 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/courses" className="hover:text-gold transition-colors">Courses</Link>
            <ChevronRight size={14} />
            <span className="text-gold">{course.name}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-3">
            {course.dubaiPlacement && (
              <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">🌍 Dubai Placement</span>
            )}
            {course.ojtStipend && (
              <span className="px-3 py-1 bg-success/80 text-white text-xs font-bold rounded-full">💰 OJT: {course.ojtStipend}</span>
            )}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-white text-3xl md:text-5xl font-bold mb-2"
          >
            {course.name}
          </motion.h1>
          <p className="text-gold text-base md:text-lg font-medium">{course.tagline}</p>
        </div>
      </section>

      {/* Overview strip */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-4 md:gap-8">
          {[
            { icon: <Clock size={16} />, label: 'Duration', val: course.duration },
            { icon: <BookOpen size={16} />, label: 'Mode', val: course.mode },
            { icon: <Users size={16} />, label: 'Eligibility', val: course.eligibility },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-gold">{item.icon}</span>
              <div>
                <div className="text-text-muted text-xs">{item.label}</div>
                <div className="text-navy font-semibold text-sm">{item.val}</div>
              </div>
            </div>
          ))}
          <Link
            href="/admissions"
            className="ml-auto px-5 py-2 bg-gold text-navy font-bold text-sm rounded-lg hover:bg-gold-light transition-colors pulse-gold"
          >
            Apply Now →
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left main */}
        <div className="lg:col-span-2 space-y-10">
          {/* Subjects */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-navy text-2xl font-bold mb-4">What You Will Learn</h2>
            <div className="flex flex-wrap gap-2">
              {course.subjects.map((subject) => (
                <span key={subject} className="px-3 py-1.5 bg-navy/5 border border-navy/10 text-navy text-sm rounded-full font-medium hover:bg-navy hover:text-white transition-all cursor-default">
                  {subject}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Highlights */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-navy text-2xl font-bold mb-4">Program Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.highlights.map((hl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gold/20 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-gold" />
                  </div>
                  <span className="text-text-dark text-sm font-medium">{hl}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Career outcomes */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-navy text-2xl font-bold mb-4">Career Opportunities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {course.careerOutcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-3 navy-gradient text-center rounded-xl"
                >
                  <div className="text-gold text-lg mb-1">💼</div>
                  <div className="text-white text-xs font-semibold">{outcome}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right sidebar */}
        <div className="space-y-4">
          <div className="sticky top-24 space-y-4">
            {/* Apply card */}
            <div className="bg-navy-dark rounded-2xl p-6 text-center border border-gold/20">
              <div className="text-gold font-serif text-xl font-bold mb-1">{course.name}</div>
              <div className="text-white/60 text-sm mb-4">{course.duration} | {course.eligibility}</div>
              {course.dubaiPlacement && (
                <div className="mb-3 flex items-center justify-center gap-2 text-accent text-sm font-semibold">
                  🌍 Dubai Placement Available
                </div>
              )}
              {course.ojtStipend && (
                <div className="mb-4 p-2.5 bg-success/10 rounded-lg text-success text-xs font-semibold">
                  💰 OJT Stipend: {course.ojtStipend}
                </div>
              )}
              <Link href="/admissions" className="block w-full py-3.5 bg-gold text-navy font-bold rounded-xl hover:bg-gold-light transition-all pulse-gold mb-2">
                Apply Now →
              </Link>
              <a href="tel:+919890959990" className="block w-full py-3 border border-white/20 text-white text-sm rounded-xl hover:bg-white/5 transition-all">
                📞 Get Free Counselling
              </a>
            </div>

            {/* Quick info */}
            <div className="bg-bg-light rounded-2xl p-5 space-y-3">
              <h4 className="font-serif text-navy font-bold text-sm">Quick Info</h4>
              {[
                { label: 'Duration', val: course.duration },
                { label: 'Eligibility', val: course.eligibility },
                { label: 'Mode', val: course.mode },
                { label: 'Placement Support', val: 'Yes ✓' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                  <span className="text-text-muted">{item.label}</span>
                  <span className="text-navy font-semibold">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <InquiryForm />

      {/* Fixed mobile apply bar */}
      <div className="fixed bottom-16 left-0 right-0 z-40 lg:hidden bg-white border-t border-gold/30 p-3 shadow-lg">
        <Link href="/admissions" className="block text-center py-3.5 bg-gold text-navy font-bold rounded-xl pulse-gold">
          Apply for {course.shortName} →
        </Link>
      </div>
    </>
  );
}
