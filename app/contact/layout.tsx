import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us | Practical EduSkills Pune | +91-98909-59990',
  description:
    'Get in touch with Practical EduSkills Pune. Call +91-98909-59990, email info@practicaleduskills.com, or visit our Erandwane head office. We reply within 24 hours.',
  path: '/contact',
  keywords:
    'practical eduskills contact, eduskills phone number, eduskills pune address, contact commerce college pune',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
