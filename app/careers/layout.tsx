import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Careers | We Are Hiring Faculty | Practical EduSkills Pune',
  description:
    'Join the Practical EduSkills faculty team in Pune. We are hiring commerce trainers, BBA/MBA faculty, AI educators, soft-skills trainers and visiting lecturers. Apply online.',
  path: '/careers',
  keywords:
    'faculty jobs pune, teaching jobs pune, commerce trainer job pune, practical eduskills hiring, faculty vacancy pune eduskills',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
