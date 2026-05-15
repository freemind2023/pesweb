import type { Metadata } from 'next';

export const BASE_URL = 'https://practicaleduskills.com';

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage = '/brand/hero-poster.jpg',
}: BuildMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Practical EduSkills',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
