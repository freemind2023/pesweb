import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Digital Marketing Career Program 2026 | Practical EduSkills',
  description:
    'Master digital marketing the way Indian brands run it in 2026, then step into a paid internship. 6 months, 168 live hours, 12 portfolio projects, AI tools across the workflow, agency simulation, and placement support.',
  keywords: [
    'digital marketing course Pune',
    'AI digital marketing program',
    'digital marketing career program',
    'SEO course Pune',
    'performance marketing course',
    'digital marketing internship Pune',
    'Practical EduSkills digital marketing',
  ],
  openGraph: {
    title: 'AI-Powered Digital Marketing Career Program | Practical EduSkills',
    description: '6 months. 168 live hours. 12 portfolio projects. Paid internship. Admissions open 2026.',
    url: 'https://practicaleduskills.com/digital-marketing',
    siteName: 'Practical EduSkills',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Digital Marketing Career Program | Practical EduSkills',
    description: '6 months. 168 live hours. 12 portfolio projects. Paid internship. Admissions open 2026.',
  },
  alternates: { canonical: 'https://practicaleduskills.com/digital-marketing' },
};

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
