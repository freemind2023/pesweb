export default function FinalCall({ onApply }: { onApply: () => void }) {
  return (
    <section className="relative py-32 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 mba-grid-bg opacity-40" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(245,180,0,0.08),transparent 70%)' }}
      />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="mba-mono text-xs mba-amber tracking-widest mb-8">09 / THE CALL</div>
        <h2 className="mba-serif tracking-tight leading-[0.95] mb-10" style={{ fontSize: 'clamp(2.5rem,9vw,7rem)' }}>
          Transform Your Career<br />
          with <span className="mba-amber italic">Practical MBA.</span>
        </h2>
        <p className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
          Real Learning. Real Experience. Real Career Growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onApply} className="px-8 py-4 mba-bg-amber text-black hover:bg-white transition mba-mono text-xs tracking-widest">
            APPLY NOW →
          </button>
          <a href="tel:+919890959990" className="px-8 py-4 border border-white/15 hover:border-white/40 transition mba-mono text-xs tracking-widest text-white/80">
            CALL NOW ↗
          </a>
        </div>
      </div>
    </section>
  );
}
