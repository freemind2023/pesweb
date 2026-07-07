export default function NumbersSection() {
  return (
    <section id="numbers" className="relative border-b border-white/5 py-28 overflow-hidden bg-[#0d0a05]">
      <div className="absolute inset-0 mba-grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-3">
            <div className="mba-mono text-xs text-white/40 mb-2">05 / THE OUTCOMES</div>
            <div className="mba-amber mba-mono text-xs">────────</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="mba-serif tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
              Real experience. <span className="text-white/40 italic">Measured in outcomes, not credits.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          <div className="bg-black p-8">
            <div className="mba-mono text-xs text-white/40 mb-4">INDUSTRY EXPERIENCE</div>
            <div className="mba-serif tracking-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>18<span className="mba-amber">mo</span></div>
            <div className="mba-mono text-xs text-white/30 mt-2">before you graduate</div>
          </div>
          <div className="bg-black p-8">
            <div className="mba-mono text-xs text-white/40 mb-4">RESUME STRENGTH</div>
            <div className="mba-serif tracking-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>+</div>
            <div className="mba-mono text-xs text-white/30 mt-2">documented OJT portfolio</div>
          </div>
          <div className="bg-black p-8">
            <div className="mba-mono text-xs text-white/40 mb-4">PACKAGE GROWTH</div>
            <div className="mba-serif tracking-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>↑</div>
            <div className="mba-mono text-xs text-white/30 mt-2">vs. degree-only peers</div>
          </div>
          <div className="bg-black p-8">
            <div className="mba-mono text-xs text-white/40 mb-4">CORPORATE READINESS</div>
            <div className="mba-serif tracking-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>Day <span className="mba-amber">1</span></div>
            <div className="mba-mono text-xs text-white/30 mt-2">lead from day one</div>
          </div>
        </div>

        <p className="mba-serif italic text-xl md:text-2xl tracking-tight text-white/60 max-w-3xl mt-16">
          Industry experience. Stronger resume. Higher packages. Leadership skills. <span className="mba-amber">Corporate readiness.</span>
        </p>
      </div>
    </section>
  );
}
