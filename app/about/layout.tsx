import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About Practical EduSkills | 21+ Years of Commerce Education in Pune',
  description:
    "Learn about Practical EduSkills Pvt. Ltd. — Pune's leading vocational education provider since 2003. 2000+ students placed, ISO certified, NSDC Skill Centre with 4 learning centres.",
  path: '/about',
  keywords:
    'practical eduskills about, commerce education pune, vocational training pune, eduskills history, nsdc skill centre pune',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
