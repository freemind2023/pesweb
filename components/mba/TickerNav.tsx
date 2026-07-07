'use client';
import Image from 'next/image';

export default function TickerNav({ onApply }: { onApply: () => void }) {
  return (
    <>
      {/* Top ticker */}
      <div className="border-b border-white/5 bg-black overflow-hidden mba-mono">
        <div className="flex items-center gap-8 py-2 px-6 text-xs whitespace-nowrap w-max mba-ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="mba-amber">● APPLICATIONS OPEN</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">18 MONTHS OJT WITH STIPEND</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">STIPEND ₹12,000–₹18,000 / MONTH</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">TECH-POWERED CORPORATE MANAGEMENT</span>
              <span className="text-white/20">/</span>
              <span className="mba-amber">● OPEN TO ALL STREAMS</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">EXECUTIVE CAREER PATH</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">PRACTICAL EDUSKILLS</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-sm p-0.5 flex-shrink-0">
              <Image src="/brand/peslogo.png" alt="Practical EduSkills" width={28} height={28} className="h-7 w-auto object-contain" />
            </div>
            <span className="mba-mono text-xs tracking-widest">PRACTICAL<span className="text-white/30">/MBA</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 mba-mono text-xs text-white/50">
            <a href="#why" className="hover:text-white transition">01 / WHY MBA</a>
            <a href="#process" className="hover:text-white transition">02 / PROCESS</a>
            <a href="#journey" className="hover:text-white transition">03 / JOURNEY</a>
            <a href="#numbers" className="hover:text-white transition">04 / NUMBERS</a>
            <a href="#apply" className="hover:text-white transition">05 / APPLY</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+919890959990" className="hidden sm:flex mba-mono text-xs text-white/50 hover:text-white transition">
              98909 59990
            </a>
            <button onClick={onApply} className="mba-mono text-xs px-3 py-1.5 mba-bg-amber text-black hover:bg-white transition">
              APPLY →
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
