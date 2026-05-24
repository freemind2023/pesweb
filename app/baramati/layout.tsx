import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practical B.COM 2025–26 | College of Practical Commerce & Management, Baramati',
  description: 'PES\'s own flagship centre in Baramati! Join Practical B.COM – Fintech & Digital Accounting. 2 years paid OJT (₹8K–₹10K/month) + 6+ industry certifications. ZOHO, Tally, Odoo, GST. Pencil Square Building, Vidyanagari MIDC, Baramati.',
  keywords: [
    'Practical BCom Baramati',
    'College of Practical Commerce Baramati',
    'Fintech Digital Accounting Baramati',
    'BCom OJT Baramati',
    'earn while learn Baramati',
    'Tally Odoo ZOHO course Baramati',
    'BCom admission Baramati 2025',
    'PES Baramati',
    'Practical EduSkills Baramati',
    'commerce college Baramati',
  ],
  openGraph: {
    title: 'Practical B.COM 2025–26 | PES Flagship Centre, Baramati — Earn While You Learn',
    description: '2 years paid OJT (₹8K–₹10K/mo) + 6+ certs. Practical B.COM – Fintech & Digital Accounting. PES\'s own college in Baramati.',
    url: 'https://practicaleduskills.com/baramati',
    siteName: 'PES Practical B.COM Baramati',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical B.COM 2025–26 | PES Flagship, Baramati — Earn While You Learn',
    description: '2 years paid OJT (₹8K–₹10K/mo) + 6+ certifications. Fintech & Digital Accounting. Baramati.',
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/baramati',
  },
};

export default function BaramatiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
