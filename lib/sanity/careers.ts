import {
  CAREERS_LIST_QUERY,
  CAREER_BY_SLUG_QUERY,
  CAREER_SLUGS_QUERY,
  CAREER_TYPES_QUERY,
  CAREER_OG_QUERY,
} from '@/sanity/lib/queries';
import { sanityFetch, sanityFetchStatic } from '@/sanity/lib/client';
import type {
  TCareerDetail,
  TCareerListItem,
  TCareerOg,
  TCareerSlug,
  TCareerType,
} from '@/sanity/lib/types';
import { projectId } from '@/sanity/env';

export function isSanityConfigured(): boolean {
  return Boolean(projectId);
}

export async function getCareersList(): Promise<TCareerListItem[]> {
  if (!isSanityConfigured()) return [];
  return sanityFetch<TCareerListItem[]>({
    query: CAREERS_LIST_QUERY,
    tags: ['career', 'careerType'],
  });
}

export async function getCareerTypes(): Promise<TCareerType[]> {
  if (!isSanityConfigured()) return [];
  return sanityFetch<TCareerType[]>({
    query: CAREER_TYPES_QUERY,
    tags: ['careerType'],
  });
}

export async function getCareerBySlug(slug: string): Promise<TCareerDetail | null> {
  if (!isSanityConfigured()) return null;
  return sanityFetch<TCareerDetail | null>({
    query: CAREER_BY_SLUG_QUERY,
    params: { slug },
    tags: ['career'],
  });
}

export async function getCareerSlugs(): Promise<TCareerSlug[]> {
  if (!isSanityConfigured()) return [];
  return sanityFetchStatic<TCareerSlug[]>({ query: CAREER_SLUGS_QUERY });
}

export async function getCareerForOg(slug: string): Promise<TCareerOg | null> {
  if (!isSanityConfigured()) return null;
  return sanityFetchStatic<TCareerOg | null>({
    query: CAREER_OG_QUERY,
    params: { slug },
  });
}
