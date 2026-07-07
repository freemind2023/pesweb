export default function GapSection() {
  return (
    <section id="why" className="border-b border-white/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">01 / THE GAP</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="mba-serif tracking-tight leading-tight mb-10" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
              Every fresh graduate faces the same three walls.<br />
              <span className="text-white/40 italic">No experience. No mentors. No proof.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-10">
              <div className="bg-black p-8">
                <div className="mba-amber mba-mono text-xs mb-4">I.</div>
                <h3 className="mba-serif text-2xl tracking-tight mb-3">Theory taxes the resume.</h3>
                <p className="text-sm text-white/50 leading-relaxed">A classroom-only MBA hands you frameworks, not experience. Recruiters ask what you&apos;ve actually run — not what you memorised.</p>
              </div>
              <div className="bg-black p-8">
                <div className="mba-amber mba-mono text-xs mb-4">II.</div>
                <h3 className="mba-serif text-2xl tracking-tight mb-3">Leadership isn&apos;t taught. It&apos;s mentored.</h3>
                <p className="text-sm text-white/50 leading-relaxed">By the time most graduates meet a real manager, their first year on the job is already over. You need mentors before you need a job title.</p>
              </div>
              <div className="bg-black p-8">
                <div className="mba-amber mba-mono text-xs mb-4">III.</div>
                <h3 className="mba-serif text-2xl tracking-tight mb-3">A degree doesn&apos;t pay rent. A stipend does.</h3>
                <p className="text-sm text-white/50 leading-relaxed">Real independence during your MBA means real income during your MBA — not two more years of dependence before you start earning.</p>
              </div>
            </div>
            <p className="mba-serif italic text-2xl md:text-3xl tracking-tight text-white/70 max-w-3xl">
              &quot;What if the degree was never the goal — only the corporate experience inside it?&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
