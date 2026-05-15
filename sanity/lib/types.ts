import type { PortableTextBlock } from '@portabletext/types';

export type TCareerType = {
  _id: string;
  title: string;
  slug: string;
};

export type TCareerListItem = {
  _id: string;
  title: string;
  slug: string;
  experienceLevel: string;
  officeTiming: string;
  location?: string;
  publishedAt: string;
  excerpt: string;
  applyFormUrl: string;
  category: TCareerType | null;
};

export type TCareerDetail = {
  _id: string;
  title: string;
  slug: string;
  description: PortableTextBlock[];
  experienceLevel: string;
  officeTiming: string;
  location?: string;
  applyFormUrl: string;
  isOpen: boolean;
  publishedAt: string;
  validThrough?: string;
  category: { title: string; slug: string } | null;
  seo: {
    title: string;
    description: string;
    noIndex: boolean;
  };
};

export type TCareerOg = {
  title: string;
  experienceLevel: string;
  categoryTitle?: string;
};

export type TCareerSlug = { slug: string };
