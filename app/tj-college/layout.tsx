import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEDP Programs 2026–27 | Tikaram Jagannath College, Kirkee, Pune',
  description: 'Earn while you learn! Join B.Sc. AI & Business Automation or B.Com AEDP at TJ College Kirkee. SPPU degree + 1.5 years paid OJT (₹8K–₹12K/month) + 12+ industry certifications. Limited seats — apply now.',
  keywords: [
    'TJ College Kirkee',
    'Tikaram Jagannath College',
    'AEDP program Pune',
    'BSc AI Business Automation Kirkee',
    'BCom AEDP SPPU',
    'earn while learn Pune',
    'OJT stipend college Kirkee',
    'AI courses Pune college',
    'SPPU affiliated college Kirkee',
    'TJ college admission 2025',
    'degree with job training Pune',
  ],
  openGraph: {
    title: 'AEDP 2026–27 | TJ College Kirkee — Earn While You Learn',
    description: 'SPPU degree + 1.5 years paid OJT (₹8K–₹12K/mo) + 12+ certs. B.Sc. AI & Business Automation | B.Com AEDP. Apply now!',
    url: 'https://practicaleduskills.com/tj-college',
    siteName: 'PES TJ College AEDP',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEDP 2026–27 | TJ College Kirkee — Earn While You Learn',
    description: 'SPPU degree + 1.5 years paid OJT (₹8K–₹12K/mo) + 12+ certifications. B.Sc. AI | B.Com AEDP.',
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/tj-college',
  },
};

export default function TJCollegeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
