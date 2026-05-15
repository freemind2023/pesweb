import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Briefcase, Clock, MapPin } from 'lucide-react';
import PortableTextContent from '@/components/careers/PortableTextContent';
import JobPostingJsonLd from '@/components/careers/JobPostingJsonLd';
import { buildMetadata } from '@/lib/metadata';
import { getCareerBySlug, getCareerSlugs } from '@/lib/sanity/careers';
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getCareerSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

function truncate(text: string, max = 160): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 3).trim()}...`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const career = await getCareerBySlug(slug);
  if (!career) return {};

  const title = career.seo.title || career.title;
  const description = truncate(
    career.seo.description || `Join Practical EduSkills as ${career.title}. Apply online.`,
  );

  return {
    ...buildMetadata({
      title: `${title} | Careers | Practical EduSkills`,
      description,
      path: `/careers/${slug}`,
    }),
    robots: career.seo.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = await getCareerBySlug(slug);
  if (!career) notFound();

  const descriptionPlain = career.seo.description;

  return (
    <>
      {!career.seo.noIndex && (
        <JobPostingJsonLd career={career} descriptionPlain={descriptionPlain} />
      )}

      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/careers"
            className="inline-flex text-gold text-sm font-medium hover:underline mb-4"
          >
            ← All careers
          </Link>
          {career.category && (
            <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-gold text-xs font-semibold mb-3">
              {career.category.title}
            </span>
          )}
          <h1 className="font-serif text-white text-3xl md:text-4xl font-bold mb-4">{career.title}</h1>
          <ul className="flex flex-wrap gap-4 text-white/80 text-sm list-none p-0 m-0">
            <li className="flex items-center gap-2">
              <Briefcase size={16} className="text-gold" aria-hidden />
              {career.experienceLevel}
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-gold" aria-hidden />
              {career.officeTiming}
            </li>
            {career.location && (
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" aria-hidden />
                {career.location}
              </li>
            )}
          </ul>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14 pb-28">
        {!career.isOpen ? (
          <div
            role="status"
            className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm"
          >
            This position is no longer accepting applications.
          </div>
        ) : null}

        <PortableTextContent value={career.description} />

        {career.isOpen && (
          <div className="mt-10 pt-8 border-t border-gray-100">
            <a
              href={career.applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-bold rounded-xl hover:bg-gold-light transition-colors pulse-gold"
            >
              Apply Now →
            </a>
            <p className="text-text-muted text-xs mt-3">
              You will be redirected to a Google Form to submit your application.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
