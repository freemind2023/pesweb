import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Placements | 2000+ Students Placed | Practical EduSkills Pune',
  description:
    'Practical EduSkills has placed 2000+ students across top companies in India and Dubai. View our placement record, industry partners, OJT stipend details, and success stories.',
  path: '/placements',
  keywords:
    'practical eduskills placements, bcom placement pune, dubai placement pune, ojt stipend pune, commerce job placement pune, 2000 placements',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
