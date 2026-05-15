import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Admissions 2025 | Apply Now | Practical EduSkills Pune',
  description:
    'Apply for admission at Practical EduSkills Pune. Enroll in Practical B.Com, BBA, MBA, or B.Sc. AI with guaranteed internship, OJT stipend, and placement support.',
  path: '/admissions',
  keywords:
    'practical eduskills admission, apply bcom pune, bba admission pune 2025, mba admission pune, practical eduskills enrollment',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
