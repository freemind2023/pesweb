import { notFound } from 'next/navigation';
import { courses, getCourseBySlug } from '@/lib/courses';
import CourseDetailClient from './CourseDetailClient';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.name} | Practical EduSkills`,
    description: `${course.tagline} | ${course.description} | Eligibility: ${course.eligibility}`,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return <CourseDetailClient course={course} />;
}
