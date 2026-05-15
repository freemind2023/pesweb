import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Careers | Practical EduSkills',
  description:
    'Join Practical EduSkills in Pune. Explore open roles in sales and digital marketing. Grow with 21+ years of experiential education and industry-led teams.',
  path: '/careers',
  keywords:
    'practical eduskills careers, jobs pune education, sales jobs pune, digital marketing jobs pune',
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
