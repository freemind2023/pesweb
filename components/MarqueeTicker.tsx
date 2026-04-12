export default function MarqueeTicker() {
  const items = [
    '✦ Dubai Placement Opportunity',
    '✦ 2000+ Students Placed',
    '✦ 21 Years Legacy',
    '✦ ISO Certified',
    '✦ NSDC Skill Centre',
    '✦ OJT with Stipend',
    '✦ Industry-Ready Curriculum',
    '✦ 8 Career Programs',
    '✦ Evening MBA Batches',
    '✦ CA Article Fast-Track',
  ];

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
