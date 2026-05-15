import type { MetadataRoute } from 'next';
import { courses } from '@/lib/courses';
import { getCareerSlugs } from '@/lib/sanity/careers';

const BASE = 'https://practicaleduskills.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/courses`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/admissions`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/placements`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/events`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/centres`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/faculty`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/careers`,            lastModified: now, changeFrequency: 'weekly',   priority: 0.8 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((c) => ({
    url: `${BASE}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const careerSlugs = await getCareerSlugs();
  const careerRoutes: MetadataRoute.Sitemap = careerSlugs.map(({ slug }) => ({
    url: `${BASE}/careers/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...careerRoutes];
}
