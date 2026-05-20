'use client';
import Link from 'next/link';
import { Phone, ClipboardList } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div id="site-sticky-bar">
    <div className="sticky-mobile-bar lg:hidden">
      <div className="flex gap-3">
        <a
          href="tel:+919890959990"
          className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-navy text-navy font-bold rounded-lg text-sm"
          style={{ minHeight: 44 }}
        >
          <Phone size={16} /> Call Now
        </a>
        <Link
          href="/admissions"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold text-navy font-bold rounded-lg text-sm pulse-gold"
          style={{ minHeight: 44 }}
        >
          <ClipboardList size={16} /> Enroll Now
        </Link>
      </div>
    </div>
    </div>
  );
}
