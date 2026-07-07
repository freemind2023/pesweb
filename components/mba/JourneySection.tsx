const ROWS = [
  {
    code: 'Y1', title: 'Year One', tag: 'LEARN · PRACTICE · PREPARE',
    desc: 'Advanced Management & Strategy, Corporate Communication & Leadership, Business Analytics & Reporting, Industry Tools & Practical Projects. Build the foundation. Get industry-ready.',
  },
  {
    code: 'Y2', title: 'Year Two', tag: 'EARN · EXPERIENCE · EXCEL',
    desc: '18 Months OJT With Stipend, Real Projects & Live Assignments, Performance Tracking & Mentorship, Executive Certifications & Portfolio Building. Gain real experience. Become a corporate leader.',
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="border-b border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">04 / THE JOURNEY</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="mba-serif tracking-tight leading-tight mb-16" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
              Two years.<br />One transformation.<br /><span className="text-white/40 italic">Zero wasted time.</span>
            </h2>

            <div className="space-y-px">
              {ROWS.map((r) => (
                <div key={r.code} className="grid md:grid-cols-12 gap-6 py-8 border-t border-white/10 hover:bg-white/[0.02] transition px-2">
                  <div className="md:col-span-1 mba-mono text-xs mba-amber">{r.code}</div>
                  <div className="md:col-span-3">
                    <h3 className="mba-serif text-2xl tracking-tight">{r.title}</h3>
                    <div className="mba-mono text-xs text-white/40 mt-1">{r.tag}</div>
                  </div>
                  <div className="md:col-span-8 text-sm text-white/60 leading-relaxed border-t border-b border-white/10 md:border-none pt-4 md:pt-0">{r.desc}</div>
                </div>
              ))}
              <div className="border-t border-b border-white/10" />
            </div>

            <div className="mt-16 rounded p-6 max-w-2xl" style={{ background: 'rgba(245,180,0,0.05)', border: '1px solid rgba(245,180,0,0.2)' }}>
              <div className="mba-mono text-xs text-white/40 mb-2">OJT STIPEND</div>
              <div className="mba-serif text-4xl tracking-tight mb-1">₹12,000<span className="mba-amber">–</span>₹18,000<span className="text-white/40 text-xl"> / month</span></div>
              <div className="mba-mono text-xs text-white/50">Financial support. Real independence.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
