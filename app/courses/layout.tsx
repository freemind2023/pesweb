import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Courses | B.Com, BBA, MBA, AI & More | Practical EduSkills Pune',
  description:
    'Explore job-ready courses at Practical EduSkills: Practical B.Com, BBA, BBA-IB, Applied MBA, B.Sc. AI & Digital Automation, Hospitality and more. OJT with stipend and Dubai placement.',
  path: '/courses',
  keywords:
    'practical bcom pune, bba course pune, applied mba pune, bsc ai pune, hospitality course pune, ca article placement pune',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
