'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import CareerCard from '@/components/careers/CareerCard';
import type { TCareerListItem, TCareerType } from '@/sanity/lib/types';

interface ICareersListingProps {
  careers: TCareerListItem[];
  categories: TCareerType[];
}

export default function CareersListing({ careers, categories }: ICareersListingProps) {
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return careers.filter((career) => {
      const matchesCategory =
        activeCategory === 'all' || career.category?.slug === activeCategory;
      const matchesSearch =
        !q ||
        career.title.toLowerCase().includes(q) ||
        (career.excerpt?.toLowerCase().includes(q) ?? false) ||
        (career.category?.title.toLowerCase().includes(q) ?? false);
      return matchesCategory && matchesSearch;
    });
  }, [careers, activeCategory, searchQuery]);

  if (careers.length === 0) {
    return (
      <section className="py-14 md:py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-text-muted text-lg">
            No open positions right now. Check back soon or reach us at{' '}
            <a href="mailto:info@practicaleduskills.com" className="text-gold font-medium hover:underline">
              info@practicaleduskills.com
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              aria-hidden
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roles by title or keywords…"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              aria-label="Search open positions"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-navy text-white'
                  : 'bg-bg-light text-navy hover:bg-navy/10'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.slug
                    ? 'bg-navy text-white'
                    : 'bg-bg-light text-navy hover:bg-navy/10'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-10 md:py-14 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-text-muted py-10">
              No roles match your search. Try another keyword or category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((career) => (
                <CareerCard key={career._id} career={career} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
