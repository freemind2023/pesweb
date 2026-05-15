import type { TCareerDetail } from '@/sanity/lib/types';

const ORG_NAME = 'Practical EduSkills Pvt. Ltd.';
const DEFAULT_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: '3rd Floor, Butte Patil Complex, Warje Malwadi Rd',
  addressLocality: 'Pune',
  addressRegion: 'Maharashtra',
  postalCode: '411052',
  addressCountry: 'IN',
};

interface IJobPostingJsonLdProps {
  career: TCareerDetail;
  descriptionPlain: string;
}

function defaultValidThrough(publishedAt: string): string {
  const date = new Date(publishedAt);
  date.setDate(date.getDate() + 90);
  return date.toISOString();
}

export default function JobPostingJsonLd({ career, descriptionPlain }: IJobPostingJsonLdProps) {
  const validThrough = career.validThrough ?? defaultValidThrough(career.publishedAt);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: career.title,
    description: descriptionPlain,
    datePosted: career.publishedAt,
    validThrough,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: ORG_NAME,
      sameAs: 'https://practicaleduskills.com',
      logo: 'https://practicaleduskills.com/brand/logo.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        ...DEFAULT_ADDRESS,
        addressLocality: career.location?.split(',')[0]?.trim() ?? DEFAULT_ADDRESS.addressLocality,
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    directApply: true,
    url: `https://practicaleduskills.com/careers/${career.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
