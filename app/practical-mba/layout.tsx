import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practical MBA — Tech-Powered Corporate Management | Practical EduSkills',
  description:
    'Practical MBA — 18 Months OJT with stipend, executive career path, leadership mentorship & industry certifications. Open to all streams. Apply now at Practical EduSkills.',
  keywords: [
    'Practical MBA Pune',
    'MBA with OJT stipend',
    'tech-powered corporate management',
    'executive MBA Pune',
    'Practical EduSkills MBA',
    'MBA leadership mentorship',
    'MBA industry certifications',
    'MBA for all streams',
    'corporate management degree Pune',
  ],
  openGraph: {
    title: 'Practical MBA — Tech-Powered Corporate Management',
    description: '18 Months OJT with stipend + executive career path + leadership mentorship + industry certifications. Real learning. Real experience. Real career growth.',
    url: 'https://practicaleduskills.com/practical-mba',
    siteName: 'Practical EduSkills',
    images: [{ url: '/brand/courses/mba.jpg', width: 1200, height: 630, alt: 'Practical MBA — Practical EduSkills' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practical MBA — Tech-Powered Corporate Management',
    description: '18 Months OJT with stipend + executive career path + leadership mentorship + industry certifications.',
    images: ['/brand/courses/mba.jpg'],
  },
  alternates: {
    canonical: 'https://practicaleduskills.com/practical-mba',
  },
};

export default function PracticalMBALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOccupationalProgram',
            name: 'Practical MBA — Tech-Powered Corporate Management',
            description:
              '18 Months On-the-Job Training with stipend, executive career path, leadership mentorship and industry certifications. Open to graduates of all streams.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Practical EduSkills Pvt. Ltd.',
              sameAs: 'https://practicaleduskills.com',
            },
            occupationalCategory: 'Corporate Management',
            programType: 'MBA',
            timeToComplete: 'P2Y',
            offers: {
              '@type': 'Offer',
              category: 'Stipend-supported On-the-Job Training',
            },
          }),
        }}
      />
      {children}
    </>
  );
}
