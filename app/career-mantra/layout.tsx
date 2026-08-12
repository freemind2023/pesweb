import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Mantra | Commerce Readiness Quiz — Practical EduSkills',
  description:
    'Take the free 2-minute Career Mantra quiz for 12th students. Answer 10 quick challenges and get an instant personalized commerce career readiness report.',
  keywords: [
    'Career Mantra',
    'commerce readiness quiz',
    '12th students career test',
    'B.Com career quiz',
    'Practical EduSkills',
    'career aptitude test for 12th',
  ],
  openGraph: {
    title: 'Career Mantra | What’s Your Commerce Readiness Score?',
    description: 'A free, 2-minute gamified quiz for 12th students. Get your instant personalized career report.',
    url: 'https://practicaleduskills.com/career-mantra',
    siteName: 'Career Mantra by Practical EduSkills',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Mantra | What’s Your Commerce Readiness Score?',
    description: 'A free, 2-minute gamified quiz for 12th students. Get your instant personalized career report.',
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/career-mantra',
  },
};

export default function CareerMantraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
