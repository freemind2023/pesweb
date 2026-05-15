import Link from 'next/link';
import { Briefcase, Clock, MapPin } from 'lucide-react';
import type { TCareerListItem } from '@/sanity/lib/types';

interface ICareerCardProps {
  career: TCareerListItem;
}

export default function CareerCard({ career }: ICareerCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-gold/40 hover:shadow-md transition-all p-6 flex flex-col h-full">
      {career.category && (
        <span className="inline-flex self-start px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-semibold mb-3">
          {career.category.title}
        </span>
      )}
      <h2 className="font-serif text-navy text-xl font-bold mb-3">{career.title}</h2>
      <ul className="space-y-2 text-sm text-text-muted flex-1 list-none p-0 m-0">
        <li className="flex items-center gap-2">
          <Briefcase size={16} className="text-gold flex-shrink-0" aria-hidden />
          <span>{career.experienceLevel} level</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock size={16} className="text-gold flex-shrink-0" aria-hidden />
          <span>{career.officeTiming}</span>
        </li>
        {career.location && (
          <li className="flex items-center gap-2">
            <MapPin size={16} className="text-gold flex-shrink-0" aria-hidden />
            <span>{career.location}</span>
          </li>
        )}
      </ul>
      {career.excerpt && (
        <p className="text-text-muted text-sm mt-4 line-clamp-2">{career.excerpt}</p>
      )}
      <Link
        href={`/careers/${career.slug}`}
        className="mt-5 inline-flex items-center justify-center px-4 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-dark transition-colors"
      >
        View role →
      </Link>
    </article>
  );
}
