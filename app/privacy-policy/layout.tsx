import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | Practical EduSkills',
  description:
    'How Practical EduSkills Pvt. Ltd. collects, uses, stores and protects your personal information across practicaleduskills.com, our admission forms and enquiry channels.',
  path: '/privacy-policy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
