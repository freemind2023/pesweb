import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEDP Programs 2025–26 | PES\' Modern College, Ganeshkhind, Pune',
  description: 'Earn while you learn! Join B.Sc. AI & Business Automation or B.Com AEDP at Modern College Ganeshkhind. SPPU degree + 1.5 years paid OJT (₹8K–₹12K/month) + 12+ industry certifications. Limited seats — apply now.',
  keywords: [
    'Modern College Ganeshkhind',
    'AEDP program Pune',
    'BSc AI Business Automation',
    'BCom AEDP SPPU',
    'earn while learn Pune',
    'OJT stipend college Pune',
    'AI courses Pune college',
    'SPPU affiliated college Ganeshkhind',
    'modern college admission 2025',
    'degree with job training Pune',
  ],
  openGraph: {
    title: 'AEDP 2025–26 | Modern College Ganeshkhind — Earn While You Learn',
    description: 'SPPU degree + 1.5 years paid OJT (₹8K–₹12K/mo) + 12+ certs. B.Sc. AI & Business Automation | B.Com AEDP. Apply now!',
    url: 'https://practicaleduskills.com/modern-college',
    siteName: 'PES Modern College AEDP',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEDP 2025–26 | Modern College Ganeshkhind — Earn While You Learn',
    description: 'SPPU degree + 1.5 years paid OJT (₹8K–₹12K/mo) + 12+ certifications. B.Sc. AI | B.Com AEDP.',
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/modern-college',
  },
};

export default function ModernCollegeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
