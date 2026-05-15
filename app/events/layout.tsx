import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Events & Workshops | Practical EduSkills Pune',
  description:
    'Explore upcoming and past events, industry workshops, college visits, and career sessions at Practical EduSkills Pune. Stay updated on our latest activities.',
  path: '/events',
  keywords:
    'practical eduskills events, commerce workshops pune, career events pune, eduskills college visit, industry sessions pune',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
