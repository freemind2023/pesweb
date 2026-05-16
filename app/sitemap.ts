import type { MetadataRoute } from 'next';
import { courses } from '@/lib/courses';

const BASE = 'https://practicaleduskills.com';

export default function sitemap(): MetadataRoute.Sitemap {
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
    { url: `${BASE}/careers`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((c) => ({
    url: `${BASE}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}
