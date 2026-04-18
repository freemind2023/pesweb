'use client';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function MarqueeTicker() {
  const { lang } = useLanguage();
  const items = t[lang].marquee;
  const ticker = items.join('   ');

  return (
    <div className="bg-gold overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-0 shrink-0">
          <span className="text-navy font-semibold text-sm tracking-wide px-8">{ticker}</span>
          <span className="text-navy font-semibold text-sm tracking-wide px-8">{ticker}</span>
        </div>
        <div className="animate-marquee flex items-center gap-0 shrink-0" aria-hidden>
          <span className="text-navy font-semibold text-sm tracking-wide px-8">{ticker}</span>
          <span className="text-navy font-semibold text-sm tracking-wide px-8">{ticker}</span>
        </div>
      </div>
    </div>
  );
}
