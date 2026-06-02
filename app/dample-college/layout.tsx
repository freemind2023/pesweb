import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practical B.COM 2026–27 | Maharashtriya Mandal College Of Commerce, Pune',
  description: 'Earn while you learn! Join Practical B.COM – Fintech & Digital Accounting at Maharashtriya Mandal College, Pune. 2 years paid OJT (₹8K–₹10K/month) + 6+ industry certifications. ZOHO, Tally, Odoo, GST. Limited seats — apply now.',
  keywords: [
    'Practical BCom Pune',
    'Maharashtriya Mandal College',
    'Fintech Digital Accounting',
    'BCom OJT Pune',
    'earn while learn BCom',
    'Tally Odoo ZOHO course Pune',
    'BCom admission 2025',
    'practical accounting course Pune',
    'GST Tally certification BCom',
    'job ready BCom Pune',
  ],
  openGraph: {
    title: 'Practical B.COM 2026–27 | Maharashtriya Mandal College — Earn While You Learn',
    description: '2 years paid OJT (₹8K–₹10K/mo) + 6+ certs. Practical B.COM – Fintech & Digital Accounting. Apply now!',
    url: 'https://practicaleduskills.com/dample-college',
    siteName: 'PES Practical B.COM',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical B.COM 2026–27 | Maharashtriya Mandal College — Earn While You Learn',
    description: '2 years paid OJT (₹8K–₹10K/mo) + 6+ certifications. Fintech & Digital Accounting.',
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/dample-college',
  },
};

export default function DampleCollegeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
