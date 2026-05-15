import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Our Centres | 4 Locations in Pune & Baramati | Practical EduSkills',
  description:
    'Visit Practical EduSkills at our 4 centres: Erandwane Head Office, Garware Night College, Modern College Ganesh Khind, and Baramati. Find directions and contact details.',
  path: '/centres',
  keywords:
    'practical eduskills centres, eduskills pune location, garware college pune, modern college ganesh khind, baramati eduskills',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
