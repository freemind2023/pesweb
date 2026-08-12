import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GenAI Basecamp | SkillCamp — AI + Startup Camp at Pawna Lake',
  description:
    'A 2-day/1-night AI + startup skill camp for college students at Pawna Lake. 100+ AI tools, hands-on GenAI labs, a real founder mentor, a startup pitch sprint, bonfire, tents, and a guided trek. Seats limited — reserve yours.',
  keywords: [
    'GenAI Basecamp',
    'SkillCamp Pawna Lake',
    'AI camp for college students',
    'startup camp Pune',
    'GenAI workshop students',
    'Pawna Lake camping trek',
    'AI tools workshop Pune',
    'Practical EduSkills SkillCamp',
  ],
  openGraph: {
    title: 'GenAI Basecamp | Learn AI. Pitch a Startup. Sleep Under the Stars.',
    description: '2 days · 1 night · Pawna Lake. 100+ AI tools, a real founder mentor, and a lakeside trek — for students who want more than a certificate.',
    url: 'https://practicaleduskills.com/skillcamp',
    siteName: 'SkillCamp by Practical EduSkills',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenAI Basecamp | Learn AI. Pitch a Startup. Sleep Under the Stars.',
    description: '2 days · 1 night · Pawna Lake. 100+ AI tools, a real founder mentor, and a lakeside trek.',
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/skillcamp',
  },
};

export default function SkillCampLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
