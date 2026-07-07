export default function WhoCanApply() {
  return (
    <section className="border-b border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">07 / WHO CAN APPLY</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="mba-serif tracking-tight leading-[0.95] mb-10" style={{ fontSize: 'clamp(2.25rem,6vw,5rem)' }}>
              Any degree. <br />
              <span className="mba-amber italic">Open to all streams.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-12">
              Transform any academic background into corporate leadership. Your graduation stream doesn&apos;t
              define your career track — your OJT performance does.
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              <div className="bg-black p-8">
                <div className="mba-mono text-xs mba-amber mb-3">AGRICULTURE</div>
                <h3 className="mba-serif text-xl tracking-tight mb-2">Agriculture Graduates</h3>
                <p className="text-sm text-white/50 leading-relaxed">Step into Agri-Business, Supply Chain & Agro-Marketing.</p>
              </div>
              <div className="bg-black p-8">
                <div className="mba-mono text-xs mba-amber mb-3">ENGINEERING</div>
                <h3 className="mba-serif text-xl tracking-tight mb-2">Engineering Graduates</h3>
                <p className="text-sm text-white/50 leading-relaxed">Drive Enterprise Systems, Data Dashboards & Project Excellence.</p>
              </div>
              <div className="bg-black p-8">
                <div className="mba-mono text-xs mba-amber mb-3">COMMERCE & ARTS</div>
                <h3 className="mba-serif text-xl tracking-tight mb-2">Commerce & Arts Graduates</h3>
                <p className="text-sm text-white/50 leading-relaxed">Transform knowledge into automated workflows & digital operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
