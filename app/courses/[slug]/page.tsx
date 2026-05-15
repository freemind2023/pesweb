import { notFound } from 'next/navigation';
import { courses, getCourseBySlug } from '@/lib/courses';
import CourseDetailClient from './CourseDetailClient';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return buildMetadata({
    title: `${course.name} | Practical EduSkills Pune`,
    description: `${course.tagline}. ${course.description}. Eligibility: ${course.eligibility}. Duration: ${course.duration}. OJT with stipend and placement support.`,
    path: `/courses/${slug}`,
    keywords: `${course.name.toLowerCase()} pune, ${course.shortName.toLowerCase()} course pune, practical eduskills ${course.shortName.toLowerCase()}, ${course.shortName.toLowerCase()} with placement pune`,
  });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return <CourseDetailClient course={course} />;
}
