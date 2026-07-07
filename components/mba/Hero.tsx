'use client';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero({ onApply }: { onApply: () => void }) {
  return (
    <section className="relative min-h-screen mba-grid-bg border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      <div
        className="absolute top-0 left-1/2 w-px h-full"
        style={{ background: 'linear-gradient(180deg,rgba(245,180,0,0.4),transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="flex items-center gap-3 mb-12 mba-mono text-xs">
          <span className="w-1.5 h-1.5 mba-bg-amber rounded-full mba-amber-pulse" />
          <span className="text-white/50">APPLICATIONS / OPEN</span>
          <span className="text-white/20">·</span>
          <span className="text-white/50">OPEN TO ALL STREAMS</span>
          <span className="text-white/20">·</span>
          <span className="mba-amber">18 MONTHS OJT WITH STIPEND</span>
        </div>

        <h1 className="mba-serif tracking-tight leading-[0.95] mb-8" style={{ fontSize: 'clamp(2.75rem, 8vw, 7rem)' }}>
          Your degree isn&apos;t<br />
          <span className="italic text-white/60">the finish line.</span><br />
          It&apos;s the <span className="mba-amber italic">starting gun.</span>
        </h1>

        <p className="text-base md:text-lg text-white/60 max-w-2xl mb-12 leading-relaxed">
          Practical MBA — Tech-Powered Corporate Management. 18 months of On-the-Job Training with stipend,
          executive career mentorship, and industry certifications. No lecture halls pretending to be boardrooms —
          just real corporate experience from day one.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-20">
          <button onClick={onApply} className="group flex items-center justify-between gap-6 px-6 py-4 mba-bg-amber text-black hover:bg-white transition">
            <span className="mba-mono text-xs tracking-widest">APPLY NOW</span>
            <ArrowRight size={18} />
          </button>
          <a
            href="https://wa.me/919890959990?text=Hi%2C+please+send+me+the+Practical+MBA+brochure"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 px-6 py-4 border border-white/15 hover:border-white/40 transition"
          >
            <span className="mba-mono text-xs tracking-widest text-white/80">DOWNLOAD BROCHURE</span>
            <FileText size={18} className="text-white/60" />
          </a>
        </div>

        {/* Live data strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          <div className="bg-black p-5">
            <div className="mba-mono text-xs text-white/40 mb-2">PROGRAM DURATION</div>
            <div className="mba-serif text-3xl tracking-tight">2<span className="mba-amber"> Yrs</span></div>
          </div>
          <div className="bg-black p-5">
            <div className="mba-mono text-xs text-white/40 mb-2">OJT PERIOD</div>
            <div className="mba-serif text-3xl tracking-tight">18<span className="text-white/40 text-xl"> mo</span></div>
          </div>
          <div className="bg-black p-5">
            <div className="mba-mono text-xs text-white/40 mb-2">MONTHLY STIPEND</div>
            <div className="mba-serif text-3xl tracking-tight">₹12–18<span className="mba-amber">K</span></div>
          </div>
          <div className="bg-black p-5">
            <div className="mba-mono text-xs text-white/40 mb-2">STREAMS ELIGIBLE</div>
            <div className="mba-serif text-3xl tracking-tight">All<span className="mba-amber">.</span></div>
          </div>
        </div>
      </div>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block mba-mono text-xs text-white/30 -rotate-90 origin-left">
        LEADERSHIP · MENTORSHIP · CERTIFICATIONS
      </div>
    </section>
  );
}
