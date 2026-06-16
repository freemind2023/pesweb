import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practical BBA & BBA-IB 2026–27 | Practical EduSkills Head Office, Pune',
  description: 'Practical BBA — Strategic Operations & Business Administration and Practical BBA-IB — International Business. SPPU-aligned curriculum + 2 years On-the-Job Training + 12+ certifications + stipend support. Apply now at our Pune Head Office.',
  keywords: [
    'Practical BBA Pune',
    'BBA-IB international business Pune',
    'BBA with OJT stipend',
    'business administration degree Pune',
    'Practical EduSkills BBA',
    'BBA Dubai placement',
    'BBA admission 2026',
    'SPPU BBA curriculum',
    'BBA HR marketing operations CRM',
    'international business degree Pune',
  ],
  openGraph: {
    title: 'Practical BBA & BBA-IB 2026–27 — Earn While You Learn',
    description: 'SPPU-aligned curriculum + 2 years On-the-Job Training + 12+ certifications + stipend support. Strategic Operations & Business Administration | International Business. Apply now!',
    url: 'https://practicaleduskills.com/bba',
    siteName: 'Practical EduSkills BBA',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical BBA & BBA-IB 2026–27 — Earn While You Learn',
    description: 'SPPU-aligned curriculum + 2 years OJT + 12+ certifications + stipend support.',
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/bba',
  },
};

export default function BBALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
