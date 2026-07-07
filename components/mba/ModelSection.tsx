export default function ModelSection() {
  return (
    <section id="process" className="relative border-b border-white/5 py-28 overflow-hidden">
      <div className="absolute inset-0 mba-grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">02 / THE MODEL</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
          </div>
          <div className="lg:col-span-9">
            <div className="mba-mono text-xs mba-amber mb-6 tracking-widest">ONE MORE THING —</div>
            <h2 className="mba-serif tracking-tight leading-[0.95] mb-10" style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)' }}>
              Tech-Powered<br />
              Corporate <span className="italic">Management.</span><br />
              Not just a <span className="mba-amber italic">degree.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-12">
              Every intake runs through one disciplined operating loop — the same loop real managers use to run
              real functions. You don&apos;t graduate having read about it. You graduate having run it, six times over.
            </p>
            <div className="border border-white/10 p-6 max-w-2xl">
              <div className="mba-mono text-xs text-white/40 mb-4">MBA OJT PROCESS FLOW</div>
              <pre className="mba-mono text-xs text-white/70 leading-relaxed overflow-x-auto">{`observe(role, function)
  → execute(task, ownership)
    → record(outcome, data)
      → analyse(performance, gaps)
        → improve(process, output)
          → present(leadership, results)`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
