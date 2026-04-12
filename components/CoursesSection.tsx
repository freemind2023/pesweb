'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/courses';

export default function CoursesSection() {
  return (
    <section className="py-14 md:py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Programs</span>
          <h2 className="font-serif text-navy text-2xl md:text-4xl font-bold mt-1 mb-2">
            Our Courses
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Choose your path. Build your future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <CourseCard key={course.slug} course={course} index={i} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="inline-block px-7 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy/80 transition-all"
          >
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  );
}
