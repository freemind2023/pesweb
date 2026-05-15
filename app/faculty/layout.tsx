import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Our Faculty | Expert Trainers & Educators | Practical EduSkills Pune',
  description:
    'Meet the expert faculty at Practical EduSkills — industry professionals and experienced educators dedicated to practical, job-oriented learning in commerce, business, and technology.',
  path: '/faculty',
  keywords:
    'practical eduskills faculty, commerce trainers pune, bcom teachers pune, eduskills educators, practical education experts pune',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
