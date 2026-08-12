'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SC, RESERVE_WA } from './constants';

const LINKS = [
  { href: '#agenda', label: 'Agenda' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(16,23,31,0.92)' : 'rgba(16,23,31,0.35)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? `1px solid ${SC.accent}33` : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5">
        <a href="#top" className="flex items-center gap-2.5 flex-shrink-0">
          <Image
            src="/skillcamp/brand/skillcamp-icon.png"
            alt="SkillCamp by Practical EduSkills"
            width={124}
            height={48}
            priority
            className="h-9 sm:h-10 w-auto"
          />
          <span className="leading-tight">
            <span className="block text-sm sm:text-base font-bold tracking-tight" style={{ color: SC.mist, fontFamily: "'Space Grotesk', sans-serif" }}>
              SkillCamp
            </span>
            <span className="hidden sm:block text-[10px] font-semibold uppercase" style={{ color: SC.orange, letterSpacing: '0.08em' }}>
              GenAI Basecamp
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium transition-colors hover:opacity-100" style={{ color: `${SC.mist}CC` }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={RESERVE_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: SC.orange, color: SC.mist, boxShadow: `0 0 18px ${SC.orange}55` }}
          >
            Reserve My Seat <ArrowRight size={15} />
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2"
            style={{ color: SC.mist, background: `${SC.accent}22` }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ background: 'rgba(16,23,31,0.97)' }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium py-1.5" style={{ color: SC.mist }}>
              {l.label}
            </a>
          ))}
          <a
            href={RESERVE_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold"
            style={{ background: SC.orange, color: SC.mist }}
          >
            Reserve My Seat <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
