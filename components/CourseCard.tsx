import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import type { Course } from '@/lib/courses';

interface CourseCardProps {
  course: Course;
  index: number;
  detailed?: boolean;
}

export default function CourseCard({ course, index, detailed = false }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="course-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:border-gold group"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image}
          alt={course.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className="px-2.5 py-1 bg-gold text-navy text-xs font-bold rounded-full flex items-center gap-1">
            <Clock size={10} /> {course.duration}
          </span>
          {course.dubaiPlacement && (
            <span className="px-2.5 py-1 bg-accent text-white text-xs font-bold rounded-full">
              🌍 Dubai
            </span>
          )}
        </div>
      </div>

      <div className="p-4 md:p-5">
        <h3 className="font-serif text-navy font-bold text-lg mb-1 group-hover:text-gold transition-colors">
          {course.name}
        </h3>
        <p className="text-text-muted text-sm mb-3 line-clamp-2">{course.description}</p>

        {detailed && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {course.subjects.slice(0, 4).map((subject) => (
              <span key={subject} className="px-2 py-0.5 bg-bg-light text-navy text-xs rounded-full font-medium">
                {subject}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-text-muted mb-4">
          <span>📚 {course.eligibility}</span>
          <span>🎯 {course.mode}</span>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/courses/${course.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border-2 border-navy text-navy font-semibold text-sm rounded-lg hover:bg-navy hover:text-white transition-all"
          >
            Know More <ArrowRight size={14} />
          </Link>
          <Link
            href="/admissions"
            className="flex-1 flex items-center justify-center py-2.5 bg-gold text-navy font-bold text-sm rounded-lg hover:bg-gold-light transition-all"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
