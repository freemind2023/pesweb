import { createClient, type QueryParams, type SanityClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

let clientInstance: SanityClient | null = null;

function getClient(): SanityClient | null {
  if (!projectId) return null;
  if (!clientInstance) {
    clientInstance = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: 'published',
    });
  }
  return clientInstance;
}

type TSanityFetchOptions = {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
};

/**
 * Fetches data from Sanity with Next.js cache tags for on-demand revalidation.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 3600,
  tags = ['career'],
}: TSanityFetchOptions): Promise<T> {
  const client = getClient();
  if (!client) {
    return [] as T;
  }

  return client.fetch<T>(query, params, {
    next: {
      revalidate: revalidate === false ? false : revalidate,
      tags,
    },
  });
}

/** Fresh fetch for static generation (no CDN). */
export async function sanityFetchStatic<T>({
  query,
  params = {},
}: Pick<TSanityFetchOptions, 'query' | 'params'>): Promise<T> {
  const client = getClient();
  if (!client) {
    return [] as T;
  }

  return client.withConfig({ useCdn: false }).fetch<T>(query, params);
}